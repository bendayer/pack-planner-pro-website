const DATA_SOURCES = {
  queries: "../data/search-console/search-console-queries-2026-05-02.csv",
  pages: "../data/search-console/search-console-pages-2026-05-02.csv",
  overview: "../data/search-console/search-console-chart-2026-05-02.csv",
  devices: "../data/search-console/search-console-devices-2026-05-02.csv",
  countries: "../data/search-console/search-console-countries-2026-05-02.csv",
  ga4: "../data/ga4/ga4-reports-snapshot-2026-05-02.csv",
  keywords: "../docs/seo/KEYWORD_ROADMAP.md",
  actions: "../docs/seo/SEO_PAGE_ACTIONS.md",
  actionsCurrent: "../docs/seo/SEO_PAGE_ACTIONS_CURRENT.md",
  seoManager: "../docs/seo/SEO_MANAGER.md",
  conversionFramework: "../docs/seo/SALES_CONVERSION_FRAMEWORK.md",
  monthly: "../docs/seo/SEO_MONTHLY_REPORT.md"
};

const PUBLIC_TO_LOCAL = new Map([
  ["/", "../index.html"],
  ["/dog-walking-software-uk/", "../dog-walking-software-uk.html"],
  ["/dog-walking-software-uk", "../dog-walking-software-uk.html"],
  ["/dog-walking-software-no-monthly-fee/", "../dog-walking-software-no-monthly-fee.html"],
  ["/dog-walking-software-for-sole-traders/", "../dog-walking-software-for-sole-traders.html"],
  ["/dog-walking-scheduling-software/", "../dog-walking-scheduling-software.html"],
  ["/pet-care-software/", "../pet-care-software.html"],
  ["/blog/", "../blog/index.html"],
  ["/blog/dog-walking-pricing-guide-uk/", "../blog/dog-walking-pricing-guide-uk/index.html"],
  ["/blog/how-to-organise-your-dog-walking-schedule/", "../blog/how-to-organise-your-dog-walking-schedule/index.html"],
  ["/blog/tools-for-dog-walkers-uk/", "../blog/tools-for-dog-walkers-uk/index.html"],
  ["/blog/how-to-start-a-dog-walking-business-uk/", "../blog/how-to-start-a-dog-walking-business-uk/index.html"],
  ["/blog/dog-walking-invoicing-how-to-invoice-clients-properly/", "../blog/dog-walking-invoicing-how-to-invoice-clients-properly/index.html"],
  ["/blog/moving-from-spreadsheets-to-proper-dog-walking-software/", "../blog/moving-from-spreadsheets-to-proper-dog-walking-software/index.html"],
  ["/contact/", "../contact.html"],
  ["/privacy/", "../privacy.html"]
]);

const AUDIT_STEPS = [
  {
    id: "gsc",
    phase: "Data",
    title: "Export Search Console performance",
    detail: "Queries, Pages, Chart, Devices, and Countries for the latest 28-day window.",
    source: "Search Console"
  },
  {
    id: "ga4",
    phase: "Data",
    title: "Export GA4 acquisition and events",
    detail: "Organic users, sessions, landing pages, key events, contact clicks, and country anomalies.",
    source: "GA4"
  },
  {
    id: "keywords",
    phase: "Research",
    title: "Update keyword and SERP notes",
    detail: "Check priority terms, near-page-one queries, SaaS competitors, and dog-walker software demand.",
    source: "Keywords"
  },
  {
    id: "report",
    phase: "Output",
    title: "Run the monthly SEO review prompt",
    detail: "Attach the files, ask for the monthly review, then update the report and page actions.",
    source: "Prompt"
  },
  {
    id: "briefs",
    phase: "Execution",
    title: "Create page refresh briefs",
    detail: "Turn the top priority pages into focused briefs before changing copy, titles, FAQs, or internal links.",
    source: "Briefs"
  }
];

const COLLECTION_SOURCES = [
  {
    name: "Google Search Console",
    url: "https://search.google.com/search-console",
    note: "Performance > Search results. Export Queries, Pages, Dates/chart, Countries, and Devices."
  },
  {
    name: "Google Analytics 4",
    url: "https://analytics.google.com/",
    note: "Reports > Acquisition and Engagement. Export organic sessions, landing pages, events, and countries."
  },
  {
    name: "Google live SERP",
    url: "https://www.google.co.uk/search?q=dog+walking+software+uk",
    note: "Incognito check for ads, AI overviews, competitor titles, snippets, and organic page position."
  },
  {
    name: "Keyword Planner",
    url: "https://ads.google.com/aw/keywordplanner/home",
    note: "Validate dog-walking software, pet-care software, pricing, invoicing, and scheduling keyword ideas."
  },
  {
    name: "PageSpeed Insights",
    url: "https://pagespeed.web.dev/",
    note: "Use after content priorities to confirm real performance issues."
  },
  {
    name: "DataForSEO",
    url: "https://app.dataforseo.com/",
    note: "Low-cost keyword data: search volume, difficulty, and related terms."
  }
];

const AUDIT_STORAGE_KEY = "ppp-seo-audit-checks";

const PROMPTS = {
  monthly: {
    label: "Monthly SEO review",
    task: "Run the PPP monthly SEO review from the latest files. Compare Search Console, GA4, keyword roadmap, conversion framework, and live SERP notes. Update docs/seo/SEO_MONTHLY_REPORT.md, save a dated copy in reports/monthly/, and update docs/seo/SEO_PAGE_ACTIONS.md with the new priorities.",
    files: [
      "data/search-console/search-console-queries-2026-05-02.csv",
      "data/search-console/search-console-pages-2026-05-02.csv",
      "data/search-console/search-console-chart-2026-05-02.csv",
      "data/search-console/search-console-devices-2026-05-02.csv",
      "data/search-console/search-console-countries-2026-05-02.csv",
      "data/ga4/ga4-reports-snapshot-2026-05-02.csv",
      "docs/seo/SEO_MONTHLY_REPORT.md",
      "docs/seo/SEO_PAGE_ACTIONS.md",
      "docs/seo/KEYWORD_ROADMAP.md",
      "docs/seo/SALES_CONVERSION_FRAMEWORK.md"
    ]
  },
  pageBrief: {
    label: "Page refresh brief",
    task: "Create a PPP page refresh brief for the focus page/query using the latest Search Console data, current page copy, SaaS buying intent, Pack Planner Pro tone, and conversion framework. Save the brief in content-briefs/ and include title/meta, H1/opening, sections to add, FAQs, internal links, and schema notes.",
    files: [
      "docs/seo/SEO_PAGE_ACTIONS.md",
      "docs/seo/KEYWORD_ROADMAP.md",
      "docs/seo/SALES_CONVERSION_FRAMEWORK.md"
    ]
  },
  newPage: {
    label: "New page decision",
    task: "Decide whether PPP should create a new SEO page for the focus dog-walker software topic, or fold the demand into an existing page. Use Search Console evidence, keyword roadmap, commercial intent, and thin-page risk. Save a clear yes/no decision note with the recommended next action.",
    files: [
      "docs/seo/SEO_PAGE_ACTIONS.md",
      "docs/seo/KEYWORD_ROADMAP.md",
      "dog-walking-software-uk.html"
    ]
  },
  technical: {
    label: "Pre-Search-Console technical audit",
    task: "Run a pre-Search-Console technical SEO audit. Check canonicals, redirects, robots, sitemap, indexability, title/meta quality, social images, 404 handling, tracking basics, and obvious performance blockers. Save a dated audit note in reports/ad-hoc/ and make only safe direct fixes.",
    files: [
      "vercel.json",
      "robots.txt",
      "sitemap.xml",
      "docs/seo/SEO_PAGE_ACTIONS.md",
      "docs/seo/SEO_MANAGER.md"
    ]
  },
  crossDataset: {
    label: "Cross-dataset analysis (SC + GA4 + keyword data)",
    task: "Run a cross-dataset SEO analysis. From Search Console, show the top 10 queries by clicks over the past 28 days. From GA4, show the top 10 landing pages by sessions over the past 28 days. Identify the top non-brand query from Search Console and provide keyword context: search volume estimate, difficulty, and what content improvements would help PPP rank higher for it. Give actionable recommendations. Save a dated report in reports/ad-hoc/.",
    files: [
      "data/search-console/search-console-queries-2026-05-02.csv",
      "data/search-console/search-console-pages-2026-05-02.csv",
      "data/ga4/ga4-reports-snapshot-2026-05-02.csv",
      "docs/seo/SEO_PAGE_ACTIONS.md",
      "docs/seo/KEYWORD_ROADMAP.md"
    ]
  }
};

const state = {
  pages: [],
  queries: [],
  daily: [],
  ga4Daily: [],
  weekly: [],
  keywordRows: [],
  builtPages: new Set(),
  selectedPage: null
};

const sourceMeta = {};

const $ = (selector) => document.querySelector(selector);

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

function pct(value) {
  return `${numberFrom(value).toFixed(numberFrom(value) >= 10 ? 0 : 1)}%`;
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

function readablePage(url) {
  const path = pathFromUrl(url);
  if (path === "/") return "Homepage";
  return path
    .replace(/^\/|\/$/g, "")
    .split("/")
    .pop()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function slugWords(value) {
  return pathFromUrl(value)
    .toLowerCase()
    .replace(/https?:\/\/[^/]+/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((word) => word.length > 2 && !["the", "and", "for", "near", "with", "html", "areas", "cover"].includes(word));
}

function localPathFor(url) {
  const path = pathFromUrl(url);
  if (PUBLIC_TO_LOCAL.has(path)) return PUBLIC_TO_LOCAL.get(path);
  const fallback = path.replace(/^\/|\/$/g, "").split("/").pop();
  return fallback ? `../${fallback}.html` : "../index.html";
}

function opportunityScore(page) {
  const impressions = page.impressions;
  const clicks = page.clicks;
  const position = page.position || 99;
  const ctr = page.ctr;
  const positionBoost = position <= 3 ? 0.3 : position <= 15 ? 1.6 : position <= 30 ? 1.15 : 0.55;
  const ctrGap = impressions >= 25 && ctr < 3 ? 24 : impressions >= 25 && ctr < 5 ? 12 : 0;
  const zeroClick = impressions >= 10 && clicks === 0 ? 18 : 0;
  return Math.round((Math.log10(impressions + 1) * 18 * positionBoost) + ctrGap + zeroClick);
}

function suggestedQueryAction(query) {
  if (query.clicks === 0 && query.position > 0 && query.position <= 10) {
    return "Near page 1 with no clicks - SERP check needed. Map pack may be blocking click intent.";
  }
  if (query.clicks === 0 && query.position <= 15) {
    return "Rewrite the page title or snippet to better match what this query is looking for.";
  }
  if (query.ctr < 2 && query.impressions >= 5) {
    return "Improve snippet promise - the page is showing but not compelling enough to click.";
  }
  if (query.clicks > 0 && query.position <= 10) {
    return "Protect this ranking - keep the page fresh and add internal links from related pages.";
  }
  return "Monitor until impressions rise, then add targeted content around this phrase.";
}

function suggestedAction(page) {
  if (page.impressions >= 40 && page.clicks === 0 && page.position <= 12) {
    return "Rewrite title/meta first, then inspect the live SERP for map-pack or snippet issues.";
  }
  if (page.impressions >= 100 && page.ctr < 2) {
    return "Improve snippet promise and add page depth around the terms already showing impressions.";
  }
  if (page.position <= 8 && page.ctr < 3) {
    return "This is visible enough to win clicks; sharpen the opening section and title.";
  }
  if (page.position > 15 && page.impressions >= 50) {
    return "Build topical depth: FAQs, local proof, internal links, and supporting sections.";
  }
  if (page.clicks > 0) {
    return "Protect what is working and add internal links from related high-traffic pages.";
  }
  return "Keep monitoring, then add content once impressions rise or a query cluster appears.";
}

function shortAction(page) {
  if (page.impressions >= 40 && page.clicks === 0 && page.position <= 12) return "Fix snippet";
  if (page.impressions >= 100 && page.ctr < 2) return "Improve CTR";
  if (page.position <= 8 && page.ctr < 3) return "Sharpen copy";
  if (page.position > 15 && page.impressions >= 50) return "Build depth";
  if (page.clicks > 0) return "Protect rank";
  return "Monitor";
}

function parseKeywordResearch(markdown) {
  const rows = [];
  const tableLines = markdown.split("\n").filter((line) => line.trim().startsWith("|") && !line.includes("---"));
  let headers = [];

  tableLines.forEach((line) => {
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim().replace(/^`|`$/g, ""));
    if (cells.includes("Keyword") || cells.includes("Town")) {
      headers = cells;
      return;
    }
    if (!headers.length || cells.length !== headers.length) return;
    const item = {};
    headers.forEach((header, index) => {
      item[header] = cells[index];
    });
    if (item.Keyword) rows.push(item);
  });

  return rows;
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

    const [dayOffset, value] = trimmed.split(",");
    const date = dateFromCompact(startDate, Number(dayOffset));
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

function formatSourceDate(date) {
  if (!date) return "";
  const parsed = /^\d{4}-\d{2}-\d{2}$/.test(date) ? new Date(`${date}T00:00:00Z`) : new Date(date);
  if (Number.isNaN(parsed.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(parsed);
}

function datesFromText(value = "") {
  return [...String(value).matchAll(/\b20\d{2}-\d{2}-\d{2}\b/g)].map((match) => match[0]);
}

function dateFromSourceKey(key, results = {}) {
  const pathDates = datesFromText(sourceMeta[key]?.path || DATA_SOURCES[key] || "");
  const contentDates = datesFromText(results[key] || "");
  const modified = sourceMeta[key]?.lastModified ? new Date(sourceMeta[key].lastModified).toISOString().slice(0, 10) : "";
  const dates = [...pathDates, ...contentDates, modified].filter(Boolean).sort();
  return dates[dates.length - 1] || "";
}

function parseMarkdownTable(markdown, requiredHeaders = []) {
  const lines = markdown.split("\n").filter((line) => line.trim().startsWith("|") && !line.includes("---"));
  let headers = [];
  const rows = [];

  for (const line of lines) {
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim().replace(/^`|`$/g, ""));
    if (requiredHeaders.every((header) => cells.includes(header))) {
      headers = cells;
      continue;
    }
    if (!headers.length || cells.length < headers.length) continue;
    const item = {};
    headers.forEach((header, index) => { item[header] = cells[index] || ""; });
    rows.push(item);
  }

  return rows;
}

function latestDateForKeys(keys, results = {}) {
  const dates = keys.map((key) => dateFromSourceKey(key, results)).filter(Boolean).sort();
  return dates[dates.length - 1] || "";
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
        ctr: numberFrom(row.CTR),
        position: numberFrom(row.Position),
        activeUsers: numberFrom(ga4.activeUsers),
        newUsers: numberFrom(ga4.newUsers)
      };
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  const weeks = [];
  for (let index = 0; index < sorted.length; index += 7) {
    const slice = sorted.slice(index, index + 7);
    if (!slice.length) continue;
    const impressions = slice.reduce((sum, row) => sum + row.impressions, 0);
    const clicks = slice.reduce((sum, row) => sum + row.clicks, 0);
    const activeUsers = slice.reduce((sum, row) => sum + row.activeUsers, 0);
    const newUsers = slice.reduce((sum, row) => sum + row.newUsers, 0);
    const weightedPosition = slice.reduce((sum, row) => sum + (row.position * row.impressions), 0);

    weeks.push({
      label: `${formatDate(slice[0].date)}-${formatDate(slice[slice.length - 1].date)}`,
      start: slice[0].date,
      end: slice[slice.length - 1].date,
      clicks,
      impressions,
      ctr: impressions ? (clicks / impressions) * 100 : 0,
      position: impressions ? weightedPosition / impressions : 0,
      activeUsers,
      newUsers
    });
  }

  return weeks;
}

function trend(current, previous, reverse = false) {
  if (!previous && previous !== 0) return { label: "baseline", className: "flat" };
  const diff = current - previous;
  if (Math.abs(diff) < 0.05) return { label: "flat", className: "flat" };
  const better = reverse ? diff < 0 : diff > 0;
  const sign = diff > 0 ? "+" : "";
  return {
    label: `${sign}${diff.toFixed(Math.abs(diff) >= 10 ? 0 : 1)} vs last week`,
    className: better ? "up" : "down"
  };
}

async function fetchText(key, path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`${key} failed: ${response.status}`);
  sourceMeta[key] = {
    path,
    lastModified: response.headers.get("last-modified") || ""
  };
  return response.text();
}

async function detectBuiltPages() {
  const entries = [...PUBLIC_TO_LOCAL.entries()].filter(([, localPath]) => localPath.endsWith(".html"));
  const checks = await Promise.all(entries.map(async ([publicPath, localPath]) => {
    try {
      const response = await fetch(localPath, { cache: "no-store" });
      return response.ok ? publicPath : "";
    } catch {
      return "";
    }
  }));
  state.builtPages = new Set(checks.filter(Boolean));
}

function enrichPages(rawPages, queries) {
  return rawPages.map((row) => {
    const page = {
      url: row["Top pages"],
      title: readablePage(row["Top pages"]),
      clicks: numberFrom(row.Clicks),
      impressions: numberFrom(row.Impressions),
      ctr: numberFrom(row.CTR),
      position: numberFrom(row.Position),
      localPath: localPathFor(row["Top pages"]),
      keywords: []
    };

    const words = new Set(slugWords(page.url));
    if (page.title === "Homepage") {
      ["dog", "walking", "software", "planner", "pack", "pet", "care"].forEach((word) => words.add(word));
    }

    page.keywords = queries
      .map((query) => ({
        ...query,
        relevance: slugWords(query.query).filter((word) => words.has(word)).length
      }))
      .filter((query) => query.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance || b.impressions - a.impressions)
      .slice(0, 6);

    page.score = opportunityScore(page);
    page.action = suggestedAction(page);
    return page;
  });
}

function renderStats() {
  if (!state.pages.length) {
    $("#stat-clicks").textContent = "-";
    $("#stat-clicks-note").textContent = "Data not loaded";
    $("#stat-impressions").textContent = "-";
    $("#stat-impressions-note").textContent = "Data not loaded";
    $("#stat-position").textContent = "-";
    $("#stat-ctr").textContent = "-";
    $("#stat-ctr-note").textContent = "Check data health";
    return;
  }

  const totals = state.pages.reduce(
    (sum, page) => ({
      clicks: sum.clicks + page.clicks,
      impressions: sum.impressions + page.impressions,
      weightedPosition: sum.weightedPosition + (page.position * page.impressions)
    }),
    { clicks: 0, impressions: 0, weightedPosition: 0 }
  );
  const overallCtr = totals.impressions ? (totals.clicks / totals.impressions) * 100 : 0;

  const dates = state.daily.map((row) => row.Date).filter(Boolean).sort();
  const windowLabel = dates.length >= 2
    ? `${formatDate(dates[0])} - ${formatDate(dates[dates.length - 1])}`
    : "Search Console";

  $("#stat-clicks").textContent = compact(totals.clicks);
  $("#stat-clicks-note").textContent = windowLabel;
  $("#stat-impressions").textContent = compact(totals.impressions);
  $("#stat-impressions-note").textContent = windowLabel;
  $("#stat-position").textContent = (totals.weightedPosition / Math.max(totals.impressions, 1)).toFixed(1);
  $("#stat-ctr").textContent = `${overallCtr.toFixed(1)}%`;
  $("#stat-ctr-note").textContent = `${compact(totals.clicks)} clicks from ${compact(totals.impressions)} impressions`;

  const freshEl = document.getElementById("data-freshness");
  if (freshEl && dates.length) freshEl.textContent = `Data as of ${formatDate(dates[dates.length - 1])}`;
}

function renderWeekly() {
  if (!state.weekly.length) {
    $("#weekly-table").innerHTML = "<tr><td colspan=\"7\">No daily Search Console chart data found yet.</td></tr>";
    return;
  }

  const first = state.weekly[0];
  const last = state.weekly[state.weekly.length - 1];
  $("#weekly-range").textContent = `${formatDate(first.start)}-${formatDate(last.end)}`;

  $("#weekly-table").innerHTML = state.weekly.map((week, index) => {
    const previous = state.weekly[index - 1];
    const clickTrend = trend(week.clicks, previous?.clicks);
    const impressionTrend = trend(week.impressions, previous?.impressions);
    const ctrTrend = trend(week.ctr, previous?.ctr);
    const positionTrend = trend(week.position, previous?.position, true);
    const userTrend = trend(week.activeUsers, previous?.activeUsers);
    const read = weeklyRead(week, previous);

    return `
      <tr>
        <td><strong>${week.label}</strong></td>
        <td>${compact(week.clicks)}<span class="trend ${clickTrend.className}">${clickTrend.label}</span></td>
        <td>${compact(week.impressions)}<span class="trend ${impressionTrend.className}">${impressionTrend.label}</span></td>
        <td>${week.ctr.toFixed(1)}%<span class="trend ${ctrTrend.className}">${ctrTrend.label}</span></td>
        <td>${week.position.toFixed(1)}<span class="trend ${positionTrend.className}">${positionTrend.label}</span></td>
        <td>${compact(week.activeUsers)}<span class="trend ${userTrend.className}">${userTrend.label}</span></td>
        <td>${read}</td>
      </tr>
    `;
  }).join("");
}

function weeklyRead(week, previous) {
  if (!previous) return "Baseline week for this 28-day view.";
  const clicksUp = week.clicks > previous.clicks;
  const impressionsUp = week.impressions > previous.impressions;
  const positionBetter = week.position < previous.position;
  const ctrUp = week.ctr > previous.ctr;

  if (clicksUp && impressionsUp && positionBetter) return "Strong week: visibility and rankings improved together.";
  if (impressionsUp && !clicksUp) return "Visibility grew, but clicks did not follow. Snippets and page intent need attention.";
  if (clicksUp && !impressionsUp) return "Fewer searches, but stronger click capture. Protect the winning pages.";
  if (positionBetter && ctrUp) return "Ranking and click appeal improved even if total demand was mixed.";
  return "Mixed week. Check page and query winners before choosing the next action.";
}

function filteredPages() {
  const search = $("#page-search").value.trim().toLowerCase();
  const quick = $("#quick-filter").value;
  const sort = $("#sort-pages").value;

  let pages = state.pages.filter((page) => {
    const haystack = `${page.title} ${page.url} ${page.keywords.map((keyword) => keyword.query).join(" ")}`.toLowerCase();
    return !search || haystack.includes(search);
  });

  if (quick === "lowCtr") pages = pages.filter((page) => page.impressions >= 40 && page.ctr < 3);
  if (quick === "nearPageOne") pages = pages.filter((page) => page.position >= 4 && page.position <= 15);
  if (quick === "zeroClicks") pages = pages.filter((page) => page.impressions > 0 && page.clicks === 0);
  if (quick === "local") pages = pages.filter((page) => /dog-walking|pet-care|scheduling|invoicing|pricing|sole-traders|software/i.test(page.url));

  const sorters = {
    opportunity: (a, b) => b.score - a.score,
    clicks: (a, b) => b.clicks - a.clicks,
    impressions: (a, b) => b.impressions - a.impressions,
    position: (a, b) => a.position - b.position,
    ctr: (a, b) => b.ctr - a.ctr
  };

  return pages.sort(sorters[sort] || sorters.opportunity);
}

function renderPages() {
  const rows = filteredPages();
  $("#page-count").textContent = `${rows.length} pages`;
  $("#pages-table").innerHTML = rows
    .map((page) => {
      const isZeroNearTop = page.clicks === 0 && page.position > 0 && page.position <= 15 && page.impressions >= 10;
      const posClass = page.position > 0 && page.position <= 3 ? "pos-top" : page.position > 0 && page.position <= 10 ? "pos-mid" : "";
      const rowClasses = [isZeroNearTop ? "zero-near-top" : "", posClass].filter(Boolean).join(" ");
      return `
        <tr data-page-url="${page.url}"${rowClasses ? ` class="${rowClasses}"` : ""}>
          <td>
            <span class="page-name">${page.title}</span>${isZeroNearTop ? '<span class="badge-urgent">SERP check</span>' : ""}
            <span class="page-url">${pathFromUrl(page.url)}</span>
          </td>
          <td>${compact(page.clicks)}</td>
          <td>${compact(page.impressions)}</td>
          <td class="${page.ctr < 2 && page.impressions > 30 ? "risk" : ""}">${pct(page.ctr)}</td>
          <td>${page.position.toFixed(1)}</td>
          <td><span class="score">${page.score}</span><span class="action-pill">${shortAction(page)}</span></td>
        </tr>
      `;
    })
    .join("");

  document.querySelectorAll("[data-page-url]").forEach((row) => {
    row.addEventListener("click", () => selectPage(row.dataset.pageUrl));
  });

  if (!state.selectedPage && rows.length) selectPage(rows[0].url);
}

function selectPage(url) {
  const page = state.pages.find((candidate) => candidate.url === url);
  if (!page) return;
  state.selectedPage = page;

  $("#detail-title").textContent = page.title;
  $("#detail-summary").textContent = `${compact(page.clicks)} clicks from ${compact(page.impressions)} impressions, ${pct(page.ctr)} CTR, average position ${page.position.toFixed(1)}.`;
  $("#detail-links").innerHTML = `
    <a class="button" href="${page.localPath}">Open local page</a>
    <a class="button secondary" href="${page.url}">Open live URL</a>
  `;
  $("#detail-keywords").innerHTML = page.keywords.length
    ? page.keywords.map((keyword) => {
        const dotClass = keyword.position <= 3 ? "pos-dot-top" : keyword.position <= 10 ? "pos-dot-mid" : "pos-dot-low";
        return `<li><span class="pos-dot ${dotClass}" title="Position ${keyword.position.toFixed(1)}"></span><strong>${keyword.query}</strong>: ${compact(keyword.clicks)} clicks, ${compact(keyword.impressions)} impr., pos ${keyword.position.toFixed(1)}</li>`;
      }).join("")
    : "<li>No obvious query match in the current export. Check Search Console page filter next.</li>";
  $("#detail-action").textContent = page.action;
}

function renderKeywords() {
  const useful = [...state.queries]
    .filter((query) => query.impressions >= 2)
    .sort((a, b) => {
      const aScore = (a.position <= 15 ? 35 : 0) + (a.clicks === 0 ? 12 : 0) + Math.log10(a.impressions + 1) * 12;
      const bScore = (b.position <= 15 ? 35 : 0) + (b.clicks === 0 ? 12 : 0) + Math.log10(b.impressions + 1) * 12;
      return bScore - aScore;
    })
    .slice(0, 12);

  $("#keyword-list").innerHTML = useful.map((query) => `
    <article class="keyword-card">
      <strong>${query.query}</strong>
      <div class="keyword-meta">
        <span class="tag">${compact(query.clicks)} clicks</span>
        <span class="tag">${compact(query.impressions)} impressions</span>
        <span class="tag">${pct(query.ctr)} CTR</span>
        <span class="tag">pos ${query.position.toFixed(1)}</span>
      </div>
      <p class="keyword-action">${suggestedQueryAction(query)}</p>
    </article>
  `).join("");
}

function renderResearchQueue() {
  const serpCheckPages = state.pages
    .filter((page) => page.impressions >= 10 && page.clicks === 0 && page.position > 0 && page.position <= 15)
    .sort((a, b) => a.position - b.position)
    .map((page) => page.title);

  const titleRewritePages = state.pages
    .filter((page) => page.impressions >= 40 && page.ctr < 3)
    .sort((a, b) => b.impressions - a.impressions)
    .map((page) => page.title);

  const missingKeywordMap = state.pages.filter((page) => page.keywords.length === 0).length;
  const highPriorityTerms = state.keywordRows.filter((row) => /High/i.test(row.Priority || "")).length;

  const tasks = [
    {
      label: "Refresh export monthly",
      body: "Pull a fresh Search Console export, save with the new date, then update DATA_SOURCES in this file.",
      ok: false
    },
    serpCheckPages.length
      ? { label: `SERP check (${serpCheckPages.length} page${serpCheckPages.length > 1 ? "s" : ""})`, body: `Near-page-one with zero clicks: ${serpCheckPages.join(", ")}.`, ok: false }
      : { label: "SERP check: clear", body: "No near-page-one pages with zero clicks right now.", ok: true },
    titleRewritePages.length
      ? { label: `Rewrite titles/meta (${titleRewritePages.length})`, body: `High impressions, low CTR: ${titleRewritePages.join(", ")}.`, ok: false }
      : { label: "Title/meta: clear", body: "No high-impression pages with CTR under 3%.", ok: true },
    {
      label: `Keyword map gaps (${Math.max(missingKeywordMap, 0)})`,
      body: `Pages without obvious keyword matches need a page-filtered Search Console export.`,
      ok: missingKeywordMap === 0
    },
    {
      label: `High-priority terms (${highPriorityTerms})`,
      body: "Cross-check these keyword master terms against existing page sections and FAQs.",
      ok: false
    },
    sourceMeta.conversionFramework
      ? { label: "Conversion framework loaded", body: "Use trial, demo, pricing, and feature proof in page refreshes.", ok: true }
      : { label: "Conversion framework missing", body: "Add conversion notes so SEO work connects to signups and enquiries.", ok: false }
  ];

  $("#research-list").innerHTML = tasks.map((task) => `
    <li class="research-item${task.ok ? " research-ok" : ""}">
      <strong>${task.label}</strong>
      <span>${task.body}</span>
    </li>
  `).join("");
}

function renderSources(results) {
  $("#source-list").innerHTML = Object.entries(DATA_SOURCES).map(([key, path]) => {
    const loaded = Boolean(results[key]);
    const date = dateFromSourceKey(key, results);
    return `
      <div class="source">
        <strong>${loaded ? "Loaded" : "Missing"}: ${key}</strong>
        <span>${path}</span>
        <span>${date ? `Last updated: ${formatSourceDate(date)}` : "Last updated: not detected"}</span>
      </div>
    `;
  }).join("");
}

function renderDataHealth(results) {
  const panel = $("#data-health");
  const core = ["queries", "pages", "overview", "ga4", "actionsCurrent"];
  const missing = core.filter((key) => !results[key]);
  const usingFileProtocol = window.location.protocol === "file:";

  if (!missing.length && !usingFileProtocol) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }

  const localhostUrl = "http://127.0.0.1:4173/local-tools/seo-dashboard.html";
  const reason = usingFileProtocol
    ? `This dashboard is open as a local file, so the browser blocks the CSV and markdown fetches. Open <a href="${localhostUrl}">${localhostUrl}</a> instead.`
    : `Could not load: ${missing.join(", ")}. Check the local preview server is running from the ppp-rebuild folder and the files exist.`;

  panel.hidden = false;
  panel.innerHTML = `
    <strong>SEO data did not fully load</strong>
    <p>${reason}</p>
  `;
}

function wireNotes() {
  const notes = localStorage.getItem("ppp-seo-dashboard-notes") || "";
  $("#planning-notes").value = notes;
  $("#save-notes").addEventListener("click", () => {
    localStorage.setItem("ppp-seo-dashboard-notes", $("#planning-notes").value);
    $("#notes-status").textContent = "Saved on this laptop.";
  });
  $("#clear-notes").addEventListener("click", () => {
    $("#planning-notes").value = "";
    localStorage.removeItem("ppp-seo-dashboard-notes");
    $("#notes-status").textContent = "Notes cleared.";
  });
}

function auditEvidenceFromResults(results = {}) {
  return {
    gsc: Boolean(results.queries && results.pages && results.overview && results.devices && results.countries),
    ga4: Boolean(results.ga4),
    keywords: Boolean(results.keywords && state.keywordRows.length),
    report: Boolean(results.monthly && results.actionsCurrent),
    briefs: false
  };
}

function auditUpdatedDates(results = {}, saved = {}) {
  const manualDate = (id) => typeof saved[id] === "object" ? saved[id].updatedAt || "" : "";
  return {
    gsc: latestDateForKeys(["queries", "pages", "overview", "devices", "countries"], results),
    ga4: dateFromSourceKey("ga4", results),
    keywords: dateFromSourceKey("keywords", results),
    report: latestDateForKeys(["monthly", "actionsCurrent"], results),
    briefs: manualDate("briefs")
  };
}

function renderAuditChecklist(results = {}) {
  const saved = JSON.parse(localStorage.getItem(AUDIT_STORAGE_KEY) || "{}");
  const evidence = auditEvidenceFromResults(results);
  const updatedDates = auditUpdatedDates(results, saved);
  $("#audit-checklist").innerHTML = AUDIT_STEPS.map((step) => `
    <label class="audit-step" for="audit-${step.id}">
      <input id="audit-${step.id}" type="checkbox" data-audit-id="${step.id}" ${saved[step.id] || evidence[step.id] ? "checked" : ""}>
      <span>
        <strong>${step.title}</strong>
        <p>${step.detail}</p>
        <small class="audit-updated">${updatedDates[step.id] ? `Last updated: ${formatSourceDate(updatedDates[step.id])}` : "Last updated: not detected yet"}</small>
      </span>
      <span class="tag audit-status ${evidence[step.id] ? "detected" : saved[step.id] ? "manual" : "needed"}">${evidence[step.id] ? "Detected" : saved[step.id] ? "Manual" : step.phase}</span>
    </label>
  `).join("");

  const updateProgress = () => {
    const checks = [...document.querySelectorAll("[data-audit-id]")];
    const complete = checks.filter((check) => check.checked).length;
    const percent = Math.round((complete / Math.max(checks.length, 1)) * 100);
    const next = {};
    checks.forEach((check) => {
      const id = check.dataset.auditId;
      if (evidence[id]) {
        next[id] = saved[id] || false;
      } else if (check.checked) {
        const previous = typeof saved[id] === "object" ? saved[id] : {};
        next[id] = { checked: true, updatedAt: previous.updatedAt || new Date().toISOString().slice(0, 10) };
      } else {
        next[id] = false;
      }
    });
    localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(next));
    $("#audit-progress").textContent = `${percent}% complete`;
  };

  document.querySelectorAll("[data-audit-id]").forEach((check) => {
    check.addEventListener("change", updateProgress);
  });
  updateProgress();
}

function renderCollectionLinks() {
  $("#collection-links").innerHTML = COLLECTION_SOURCES.map((source) => `
    <article class="collection-card">
      <strong>${source.name}</strong>
      <p>${source.note}</p>
      <a href="${source.url}" target="_blank" rel="noopener">Open source</a>
    </article>
  `).join("");
}

function renderRoadmap() {
  const zeroClickNearTop = state.pages
    .filter((page) => page.clicks === 0 && page.impressions >= 10 && page.position <= 15)
    .sort((a, b) => a.position - b.position)
    .slice(0, 3);

  const lowCtrPages = state.pages
    .filter((page) => page.impressions >= 40 && page.ctr < 3)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 4);

  const growthPages = state.pages
    .filter((page) => /dog-walking|scheduling|invoicing|pricing|sole-traders|pet-care|software/i.test(page.url))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 4);

  const urgent = [
    ...zeroClickNearTop.map((page) => `SERP and snippet check: ${page.title} is position ${page.position.toFixed(1)} with ${compact(page.impressions)} impressions and zero clicks.`),
    "Check homepage and UK software-page snippets against live SERPs.",
    "Confirm high-intent pages make the free-trial or contact path obvious above the fold."
  ].slice(0, 5);

  const monthly = [
    ...lowCtrPages.map((page) => `Rewrite title/meta and first-screen promise for ${page.title}: ${pct(page.ctr)} CTR from ${compact(page.impressions)} impressions.`),
    ...growthPages.map((page) => `Build content depth and internal links for ${page.title}.`)
  ].slice(0, 6);

  const longTerm = [
    "Grow software proof, use cases, screenshots, and testimonials around dog-walker admin pain points.",
    "Strengthen core software pages before adding thin keyword variants.",
    "Track commercial intent queries alongside organic position and conversion actions.",
    "Build a repeatable monthly archive of reports, decisions, briefs, and completed changes."
  ];

  $("#urgent-roadmap").innerHTML = urgent.map((item) => `<li>${item}</li>`).join("");
  $("#monthly-roadmap").innerHTML = monthly.map((item) => `<li>${item}</li>`).join("");
  $("#long-roadmap").innerHTML = longTerm.map((item) => `<li>${item}</li>`).join("");
}

function renderPriorityChanges() {
  const candidates = state.pages
    .filter((page) => page.impressions >= 20 || page.position <= 15)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  $("#priority-change-list").innerHTML = candidates.length ? candidates.map((page) => `
    <article class="action-card">
      <strong>${page.title}</strong>
      <p>${compact(page.impressions)} impressions, ${compact(page.clicks)} clicks, ${pct(page.ctr)} CTR, position ${page.position.toFixed(1)}.</p>
      <span class="tag">${page.action}</span>
    </article>
  `).join("") : "<p class=\"muted\">No page data loaded yet. Check the data health message above.</p>";
}

function renderContentDecisions() {
  const schedulingBuilt = state.builtPages.has("/dog-walking-scheduling-software/");
  const pricingBuilt = state.builtPages.has("/blog/dog-walking-pricing-guide-uk/");
  const decisions = [
    {
      title: "Core dog-walking software page",
      decision: "Refresh first",
      why: "This page should capture the broadest commercial intent before new variants are added."
    },
    {
      title: "Scheduling software page",
      decision: schedulingBuilt ? "Built - improve proof" : "Build",
      why: schedulingBuilt
        ? "The scheduling page exists. Add screenshots, workflow proof, and internal links from relevant blog posts."
        : "Scheduling is a clear dog-walker software need and should have a focused landing page."
    },
    {
      title: "Pricing content",
      decision: pricingBuilt ? "Protect and link" : "Create",
      why: pricingBuilt
        ? "The pricing guide exists. Use it to feed internal links into the no-monthly-fee and core software pages."
        : "Pricing intent is useful for dog walkers comparing software costs."
    },
    {
      title: "No monthly fee page",
      decision: "Refresh",
      why: "Cost-sensitive dog walkers need a clear comparison of one-off, monthly, and spreadsheet alternatives."
    },
    {
      title: "Sole trader angle",
      decision: "Keep distinct",
      why: "Sole-trader intent is specific enough to support examples around simple admin, invoices, client records, and reminders."
    }
  ];

  $("#content-decision-list").innerHTML = decisions.map((item) => `
    <article class="action-card">
      <strong>${item.title}</strong>
      <p>${item.why}</p>
      <span class="tag">${item.decision}</span>
    </article>
  `).join("");
}

function renderCompetitorHub(results) {
  const updated = latestDateForKeys(["keywords", "conversionFramework", "seoManager"], results);
  $("#competitor-updated").textContent = updated ? `Updated ${formatSourceDate(updated)}` : "Update date not found";

  const queryCompetitors = state.queries
    .filter((query) => /software|app|system|planner|scheduling|invoice|pricing|spreadsheet/i.test(query.query))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 5);

  $("#competitor-watch-list").innerHTML = queryCompetitors.length
    ? queryCompetitors.map((query, index) => `
      <article class="action-card">
        <strong>${index + 1}. ${query.query}</strong>
        <p>${compact(query.impressions)} impressions, ${compact(query.clicks)} clicks, ${pct(query.ctr)} CTR, position ${query.position.toFixed(1)}. Check the live SERP for SaaS competitors, ads, and snippet patterns.</p>
      </article>
    `).join("")
    : "<p class=\"muted\">No software competitor query cluster found in the current export.</p>";

  const pageOpportunities = [...state.pages]
    .filter((page) => page.impressions > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  $("#competitor-ranking-list").innerHTML = pageOpportunities.length
    ? pageOpportunities.map((page, index) => `
      <article class="action-card">
        <strong>${index + 1}. ${page.title}</strong>
        <p>${compact(page.impressions)} impressions, ${compact(page.clicks)} clicks, ${pct(page.ctr)} CTR, position ${page.position.toFixed(1)}. Use this as the next SERP comparison target.</p>
      </article>
    `).join("")
    : "<p class=\"muted\">No page opportunities found yet. Check the current Search Console pages export.</p>";
}

function renderStrategySources(results) {
  const sources = [
    {
      key: "seoManager",
      title: "SEO manager protocol",
      use: "Workflow, data intake rules, monthly cadence, modules, and prompt library."
    },
    {
      key: "conversionFramework",
      title: "Sales conversion framework",
      use: "Trial, pricing, trust, and signup guidance for turning SEO traffic into leads."
    },
    {
      key: "actionsCurrent",
      title: "Current SEO page actions",
      use: "Live data-led priorities from the latest Search Console export."
    },
    {
      key: "keywords",
      title: "Keyword roadmap",
      use: "Target terms, priority modifiers, and content/query validation."
    }
  ];

  $("#strategy-source-list").innerHTML = sources.map((source) => {
    const loaded = Boolean(results[source.key]);
    const date = dateFromSourceKey(source.key, results);
    return `
      <div class="source">
        <strong>${loaded ? "Loaded" : "Missing"}: ${source.title}</strong>
        <span>${source.use}</span>
        <span>${date ? `Last updated: ${formatSourceDate(date)}` : "Last updated: not detected"}</span>
      </div>
    `;
  }).join("");
}

function buildPrompt() {
  const type = $("#prompt-type").value;
  const focus = $("#prompt-focus").value.trim();
  const prompt = PROMPTS[type] || PROMPTS.monthly;
  const fileList = prompt.files.map((file) => `- ${file}`).join("\n");
  const focusLine = focus ? `\nFocus: ${focus}\n` : "\nFocus: choose the highest-value opportunity from the latest data.\n";

  $("#generated-prompt").value = `${prompt.task}${focusLine}
Use the PPP SEO guardrails:
- Dog-walker and pet-care software intent first
- Refresh strong existing pages before creating new thin variants
- Search Console, GA4, conversion evidence, and live SERP checks decide the priority order
- Save reusable outputs in the repo, not just in chat

Attach or read these files:
${fileList}

Return:
- the main finding
- urgent actions
- next 30-day actions
- long-term actions
- exact files changed or created`;
}

function wirePromptBuilder() {
  ["prompt-type", "prompt-focus"].forEach((id) => {
    $(`#${id}`).addEventListener("input", buildPrompt);
  });
  $("#refresh-prompt").addEventListener("click", buildPrompt);
  $("#copy-prompt").addEventListener("click", async () => {
    buildPrompt();
    try {
      await navigator.clipboard.writeText($("#generated-prompt").value);
      $("#prompt-status").textContent = "Prompt copied.";
    } catch {
      $("#generated-prompt").select();
      $("#prompt-status").textContent = "Select and copy the prompt from the box.";
    }
  });
  buildPrompt();
}

function parseActionPriorities(markdown) {
  const lines = markdown.split("\n").filter((line) => line.trim().startsWith("|") && !line.includes("---"));
  let headers = [];
  const rows = [];

  for (const line of lines) {
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim().replace(/^`|`$/g, ""));
    if (cells.some((cell) => cell === "Page" || cell === "Rank")) {
      headers = cells;
      continue;
    }
    if (!headers.length || cells.length < headers.length) continue;
    const item = {};
    headers.forEach((header, index) => { item[header] = cells[index] || ""; });
    if (item.Rank && !Number.isNaN(Number(item.Rank))) rows.push(item);
  }

  return rows.sort((a, b) => Number(a.Rank) - Number(b.Rank)).slice(0, 3);
}

function renderPlanCards(priorities) {
  const grid = document.querySelector("#plan-grid");
  if (!grid) return;

  if (!priorities.length) {
    grid.innerHTML = "<p class=\"muted\">No priorities found. Check SEO_PAGE_ACTIONS.md is saved and loaded.</p>";
    return;
  }

  grid.innerHTML = priorities.map((priority, index) => {
    const url = priority.URL ? priority.URL.replace(/^`|`$/g, "") : "";
    const localPath = url ? localPathFor(url) : "";
    return `
      <article class="plan-card">
        <span>${index + 1}</span>
        <h3>${priority.Page || "Unknown page"}</h3>
        <p>${priority["Next site update"] || "No action specified."}</p>
        ${localPath ? `<a class="button secondary" href="${localPath}">Open page</a>` : ""}
      </article>
    `;
  }).join("");
}

async function init() {
  wireNotes();
  wirePromptBuilder();
  renderCollectionLinks();
  await detectBuiltPages();
  const results = {};

  await Promise.all(Object.entries(DATA_SOURCES).map(async ([key, path]) => {
    try {
      results[key] = await fetchText(key, path);
    } catch (error) {
      console.warn(error);
      results[key] = "";
    }
  }));

  state.queries = parseCsv(results.queries).map((row) => ({
    query: row["Top queries"],
    clicks: numberFrom(row.Clicks),
    impressions: numberFrom(row.Impressions),
    ctr: numberFrom(row.CTR),
    position: numberFrom(row.Position)
  }));

  state.daily = parseCsv(results.overview);
  state.ga4Daily = parseGa4DailyMetrics(results.ga4);
  state.weekly = groupWeekly(state.daily, state.ga4Daily);
  state.keywordRows = parseKeywordResearch(results.keywords);
  state.pages = enrichPages(parseCsv(results.pages), state.queries);

  renderDataHealth(results);
  renderAuditChecklist(results);
  renderSources(results);
  renderStats();
  renderWeekly();
  renderPages();
  renderKeywords();
  renderResearchQueue();
  renderPlanCards(parseActionPriorities(results.actionsCurrent || ""));
  renderRoadmap();
  renderPriorityChanges();
  renderContentDecisions();
  renderCompetitorHub(results);
  renderStrategySources(results);

  ["page-search", "sort-pages", "quick-filter"].forEach((id) => {
    $(`#${id}`).addEventListener("input", renderPages);
  });
}

init();


