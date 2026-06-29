const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function latestFile(folder, prefix) {
  return fs
    .readdirSync(path.join(root, folder))
    .filter((name) => name.startsWith(prefix) && name.endsWith(".csv"))
    .sort()
    .at(-1);
}

const sources = {
  queries: path.join("data", "search-console", latestFile("data/search-console", "search-console-queries-")),
  pages: path.join("data", "search-console", latestFile("data/search-console", "search-console-pages-")),
  overview: path.join("data", "search-console", latestFile("data/search-console", "search-console-chart-")),
  ga4: path.join("data", "ga4", latestFile("data/ga4", "ga4-reports-snapshot-"))
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  const headerIndex = rows.findIndex((candidate) => candidate.length > 1 && !candidate[0].startsWith("#"));
  if (headerIndex === -1) return [];
  const headers = rows[headerIndex].map((header) => header.trim());

  return rows.slice(headerIndex + 1).map((cells) => {
    const item = {};
    headers.forEach((header, index) => {
      item[header] = (cells[index] || "").trim();
    });
    return item;
  });
}

function numberFrom(value) {
  if (!value) return 0;
  return Number(String(value).replace(/[% ,]/g, "")) || 0;
}

function pct(value, decimals = 1) {
  return `${Number(value || 0).toFixed(decimals)}%`;
}

function compact(value) {
  return new Intl.NumberFormat("en-GB").format(Math.round(value || 0));
}

function pathFromUrl(url) {
  try {
    return new URL(url).pathname;
  } catch {
    return url;
  }
}

function pageName(url) {
  const pagePath = pathFromUrl(url);
  if (pagePath === "/") return "Homepage";
  return pagePath
    .replace(/^\/|\/$/g, "")
    .split("/")
    .pop()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function scorePage(page) {
  const positionBoost = page.position <= 3 ? 0.3 : page.position <= 15 ? 1.6 : page.position <= 30 ? 1.15 : 0.55;
  const ctrGap = page.impressions >= 25 && page.ctr < 3 ? 24 : page.impressions >= 25 && page.ctr < 5 ? 12 : 0;
  const zeroClick = page.impressions >= 10 && page.clicks === 0 ? 18 : 0;
  return Math.round((Math.log10(page.impressions + 1) * 18 * positionBoost) + ctrGap + zeroClick);
}

function actionFor(page) {
  if (page.impressions >= 40 && page.clicks === 0 && page.position <= 12) {
    return "Rewrite title/meta, inspect the SERP, and check whether the map pack is taking the click.";
  }
  if (page.impressions >= 100 && page.ctr < 2) {
    return "Improve the title/snippet and add content depth around the terms already getting impressions.";
  }
  if (page.position <= 8 && page.ctr < 3) {
    return "The page is visible enough to win clicks; sharpen the promise in the title, H1, and opening copy.";
  }
  if (page.position > 15 && page.impressions >= 50) {
    return "Build more page depth: FAQs, product proof, internal links, and feature-specific sections.";
  }
  if (page.clicks > 0) {
    return "Protect what is working and add relevant internal links into this page.";
  }
  return "Monitor until the query/page has enough impressions to justify deeper work.";
}

function parseGa4DailyMetrics(text) {
  const lines = text.split(/\r?\n/);
  let startDate = null;
  let metric = null;
  const metrics = new Map();

  lines.forEach((line) => {
    const trimmed = line.trim();
    const startMatch = trimmed.match(/^# Start date:\s*(\d{8})/);
    if (startMatch) {
      startDate = startMatch[1];
      metric = null;
      return;
    }
    if (trimmed === "Nth day,Active users") {
      metric = "activeUsers";
      return;
    }
    if (trimmed === "Nth day,New users") {
      metric = "newUsers";
      return;
    }
    if (!metric || !startDate || !/^\d{4},/.test(trimmed)) return;

    const [offset, value] = trimmed.split(",");
    const date = dateFromCompact(startDate, Number(offset));
    const current = metrics.get(date) || { date, activeUsers: 0, newUsers: 0 };
    current[metric] = numberFrom(value);
    metrics.set(date, current);
  });

  return [...metrics.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function dateFromCompact(compactDate, offsetDays) {
  const year = Number(compactDate.slice(0, 4));
  const month = Number(compactDate.slice(4, 6)) - 1;
  const day = Number(compactDate.slice(6, 8));
  const date = new Date(Date.UTC(year, month, day + offsetDays));
  return date.toISOString().slice(0, 10);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }).format(new Date(`${date}T00:00:00Z`));
}

function groupWeekly(dailyRows, ga4Rows) {
  const ga4ByDate = new Map(ga4Rows.map((row) => [row.date, row]));
  const sorted = dailyRows
    .map((row) => {
      const ga4 = ga4ByDate.get(row.Date) || {};
      return {
        date: row.Date,
        clicks: numberFrom(row.Clicks),
        impressions: numberFrom(row.Impressions),
        position: numberFrom(row.Position),
        activeUsers: numberFrom(ga4.activeUsers),
        newUsers: numberFrom(ga4.newUsers)
      };
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  const weeks = [];
  for (let index = 0; index < sorted.length; index += 7) {
    const slice = sorted.slice(index, index + 7);
    const impressions = slice.reduce((sum, row) => sum + row.impressions, 0);
    const clicks = slice.reduce((sum, row) => sum + row.clicks, 0);
    const weightedPosition = slice.reduce((sum, row) => sum + (row.position * row.impressions), 0);
    weeks.push({
      start: slice[0].date,
      end: slice.at(-1).date,
      clicks,
      impressions,
      ctr: impressions ? (clicks / impressions) * 100 : 0,
      position: impressions ? weightedPosition / impressions : 0,
      activeUsers: slice.reduce((sum, row) => sum + row.activeUsers, 0),
      newUsers: slice.reduce((sum, row) => sum + row.newUsers, 0)
    });
  }
  return weeks;
}

function readCsv(source) {
  return parseCsv(fs.readFileSync(path.join(root, source), "utf8"));
}

function build() {
  const pages = readCsv(sources.pages)
    .map((row) => ({
      url: row["Top pages"],
      title: pageName(row["Top pages"]),
      clicks: numberFrom(row.Clicks),
      impressions: numberFrom(row.Impressions),
      ctr: numberFrom(row.CTR),
      position: numberFrom(row.Position)
    }))
    .map((page) => ({ ...page, score: scorePage(page), action: actionFor(page) }));

  const queries = readCsv(sources.queries)
    .map((row) => ({
      query: row["Top queries"],
      clicks: numberFrom(row.Clicks),
      impressions: numberFrom(row.Impressions),
      ctr: numberFrom(row.CTR),
      position: numberFrom(row.Position)
    }));

  const daily = readCsv(sources.overview);
  const ga4 = parseGa4DailyMetrics(fs.readFileSync(path.join(root, sources.ga4), "utf8"));
  const weekly = groupWeekly(daily, ga4);
  const totals = daily.reduce(
    (sum, row) => {
      const clicks = numberFrom(row.Clicks);
      const impressions = numberFrom(row.Impressions);
      return {
        clicks: sum.clicks + clicks,
        impressions: sum.impressions + impressions,
        weightedPosition: sum.weightedPosition + (numberFrom(row.Position) * impressions)
      };
    },
    { clicks: 0, impressions: 0, weightedPosition: 0 }
  );

  const reviewedDate = sources.pages.match(/(\d{4}-\d{2}-\d{2})/)?.[1] || new Date().toISOString().slice(0, 10);
  const periodStart = weekly[0].start;
  const periodEnd = weekly.at(-1).end;
  const bestPage = [...pages].sort((a, b) => b.clicks - a.clicks)[0];
  const priorityPages = [...pages].sort((a, b) => b.score - a.score).slice(0, 10);
  const queryOpportunities = queries
    .filter((query) => query.impressions >= 5 && query.position <= 30)
    .sort((a, b) => {
      const aScore = (a.position <= 15 ? 30 : 0) + (a.clicks === 0 ? 20 : 0) + Math.log10(a.impressions + 1) * 10;
      const bScore = (b.position <= 15 ? 30 : 0) + (b.clicks === 0 ? 20 : 0) + Math.log10(b.impressions + 1) * 10;
      return bScore - aScore;
    })
    .slice(0, 12);

  const latest = weekly.at(-1);
  const previous = weekly.at(-2);
  const latestRead = previous
    ? latest.clicks < previous.clicks && latest.impressions >= previous.impressions * 0.9
      ? "Latest week visibility held up, but clicks and CTR dropped. Prioritise snippets, titles, and SERP checks."
      : latest.clicks > previous.clicks
        ? "Latest week improved for clicks. Protect the pages that moved and add internal links to them."
        : "Latest week is mixed. Use page-level opportunities before making broad changes."
    : "Use this as the baseline weekly report.";

  const weeklyRows = weekly.map((week) => (
    `| ${formatDate(week.start)}-${formatDate(week.end)} | ${week.clicks} | ${week.impressions} | ${pct(week.ctr, 2)} | ${week.position.toFixed(2)} | ${week.activeUsers} | ${week.newUsers} |`
  )).join("\n");

  const pageRows = priorityPages.map((page, index) => (
    `| ${index + 1} | ${page.title} | \`${pathFromUrl(page.url)}\` | ${page.clicks} | ${page.impressions} | ${pct(page.ctr, 2)} | ${page.position.toFixed(2)} | ${page.score} | ${page.action} |`
  )).join("\n");

  const queryRows = queryOpportunities.map((query) => (
    `| \`${query.query}\` | ${query.clicks} | ${query.impressions} | ${pct(query.ctr, 2)} | ${query.position.toFixed(2)} | ${query.clicks === 0 ? "Add/adjust page copy or title so this query has a better landing promise." : "Keep supporting this query with internal links and matching FAQs."} |`
  )).join("\n");

  const report = `# Weekly SEO Update - ${reviewedDate}

Generated from the latest local Search Console and GA4 exports.

## Reporting Window

- Search Console window: ${periodStart} to ${periodEnd}
- Date reviewed: ${reviewedDate}
- Search Console pages: \`${sources.pages}\`
- Search Console queries: \`${sources.queries}\`
- Search Console daily chart: \`${sources.overview}\`
- GA4 snapshot: \`${sources.ga4}\`

## Executive Read

- Total clicks: **${compact(totals.clicks)}**
- Total impressions: **${compact(totals.impressions)}**
- Average CTR: **${pct((totals.clicks / Math.max(totals.impressions, 1)) * 100, 2)}**
- Weighted average position: **${(totals.weightedPosition / Math.max(totals.impressions, 1)).toFixed(2)}**
- Best page by clicks: **${bestPage.title}** (${bestPage.clicks} clicks, ${pct(bestPage.ctr, 2)} CTR)
- Latest weekly read: **${latestRead}**

## Weekly Trend

| Week | Clicks | Impressions | CTR | Avg position | GA4 active users | GA4 new users |
|---|---:|---:|---:|---:|---:|---:|
${weeklyRows}

## Site Update Priorities

These are the pages the site should work on first, ranked by a mix of impressions, CTR gap, position, and zero-click risk.

| Rank | Page | URL | Clicks | Impr. | CTR | Pos. | Score | Next site update |
|---:|---|---|---:|---:|---:|---:|---:|---|
${pageRows}

## Query Opportunities

| Query | Clicks | Impr. | CTR | Pos. | Suggested update |
|---|---:|---:|---:|---:|---|
${queryRows}

## Next Prompt For Codex

Use this prompt when you want to turn the report into page edits:

\`\`\`text
Using reports/monthly/weekly-seo-update-${reviewedDate}.md and docs/seo/SEO_PAGE_ACTIONS_CURRENT.md, choose the highest-priority page update for Pack Planner Pro. Make the on-page SEO improvement, keep the tone practical and dog-walker focused, and include the Search Console query phrases only where they read naturally.
\`\`\`
`;

  const currentActions = `# Current SEO Page Actions

Generated: ${reviewedDate}

This file is generated from the latest local Search Console export. Use it as the current working list for what to update on the site.

## Top Priorities

| Rank | Page | URL | Clicks | Impr. | CTR | Pos. | Next site update |
|---:|---|---|---:|---:|---:|---:|---|
${priorityPages.slice(0, 12).map((page, index) => (
    `| ${index + 1} | ${page.title} | \`${pathFromUrl(page.url)}\` | ${page.clicks} | ${page.impressions} | ${pct(page.ctr, 2)} | ${page.position.toFixed(2)} | ${page.action} |`
  )).join("\n")}

## Keyword/Query Updates To Consider

| Query | Clicks | Impr. | CTR | Pos. | Suggested update |
|---|---:|---:|---:|---:|---|
${queryRows}

## Weekly Direction

${latestRead}
`;

  const reportPath = path.join(root, "reports", "monthly", `weekly-seo-update-${reviewedDate}.md`);
  const actionsPath = path.join(root, "docs", "seo", "SEO_PAGE_ACTIONS_CURRENT.md");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, report, "utf8");
  fs.writeFileSync(actionsPath, currentActions, "utf8");

  console.log(`Wrote ${path.relative(root, reportPath)}`);
  console.log(`Wrote ${path.relative(root, actionsPath)}`);
}

build();

