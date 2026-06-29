const SNAPSHOTS = [
  {
    id: "2026-04-12",
    label: "12 Apr",
    note: "Initial export",
    overview: "../data/search-console/2026-04-12-Chart.csv",
    pages: "../data/search-console/2026-04-12-Pages.csv",
    queries: "../data/search-console/2026-04-12-Queries.csv",
    devices: "../data/search-console/2026-04-12-Devices.csv",
    countries: "../data/search-console/2026-04-12-Countries.csv",
    ga4: "../data/ga4/ga4-reports-snapshot-2026-04-12.csv"
  },
  {
    id: "2026-04-17",
    label: "17 Apr",
    note: "Rolling export",
    overview: "../data/search-console/search-console-chart-2026-04-17.csv",
    pages: "../data/search-console/search-console-pages-2026-04-17.csv",
    queries: "../data/search-console/search-console-queries-2026-04-17.csv",
    devices: "../data/search-console/search-console-devices-2026-04-17.csv",
    countries: "../data/search-console/search-console-countries-2026-04-17.csv",
    ga4: "../data/ga4/ga4-reports-snapshot-2026-04-17.csv"
  },
  {
    id: "2026-05-02",
    label: "2 May",
    note: "Latest rolling export",
    overview: "../data/search-console/search-console-chart-2026-05-02.csv",
    pages: "../data/search-console/search-console-pages-2026-05-02.csv",
    queries: "../data/search-console/search-console-queries-2026-05-02.csv",
    devices: "../data/search-console/search-console-devices-2026-05-02.csv",
    countries: "../data/search-console/search-console-countries-2026-05-02.csv",
    ga4: "../data/ga4/ga4-reports-snapshot-2026-05-02.csv"
  }
];

const EXTRA_SOURCES = {
  monthly: "../docs/seo/SEO_MONTHLY_REPORT.md",
  actionsCurrent: "../docs/seo/SEO_PAGE_ACTIONS.md",
  keywordRoadmap: "../docs/seo/KEYWORD_ROADMAP.md",
  conversionFramework: "../docs/seo/SALES_CONVERSION_FRAMEWORK.md"
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

function compact(value) {
  return new Intl.NumberFormat("en-GB").format(Math.round(value || 0));
}

function pct(value, digits = 1) {
  return `${Number(value || 0).toFixed(digits)}%`;
}

function dateLabel(date) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }).format(new Date(`${date}T00:00:00Z`));
}

function fullDate(date) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${date}T00:00:00Z`));
}

function pathFromUrl(url) {
  try {
    return new URL(url).pathname;
  } catch {
    return url || "";
  }
}

function readable(value) {
  const path = pathFromUrl(value);
  if (path === "/") return "Homepage";
  return path.replace(/^\/|\/$/g, "").split("/").pop().replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

async function fetchText(key, path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`${key} ${response.status}`);
  sourceMeta[key] = { path, lastModified: response.headers.get("last-modified") || "" };
  return response.text();
}

function normaliseDaily(rows) {
  return rows.map((row) => ({
    date: row.Date,
    clicks: numberFrom(row.Clicks),
    impressions: numberFrom(row.Impressions),
    ctr: numberFrom(row.CTR),
    position: numberFrom(row.Position)
  })).filter((row) => row.date);
}

function normalisePages(rows) {
  return rows.map((row) => ({
    key: pathFromUrl(row["Top pages"]),
    label: readable(row["Top pages"]),
    clicks: numberFrom(row.Clicks),
    impressions: numberFrom(row.Impressions),
    ctr: numberFrom(row.CTR),
    position: numberFrom(row.Position)
  })).filter((row) => row.key);
}

function normaliseQueries(rows) {
  return rows.map((row) => ({
    key: (row["Top queries"] || "").toLowerCase(),
    label: row["Top queries"] || "",
    clicks: numberFrom(row.Clicks),
    impressions: numberFrom(row.Impressions),
    ctr: numberFrom(row.CTR),
    position: numberFrom(row.Position)
  })).filter((row) => row.key);
}

function normaliseDimension(rows, dimension) {
  return rows.map((row) => ({
    key: row[dimension],
    label: row[dimension],
    clicks: numberFrom(row.Clicks),
    impressions: numberFrom(row.Impressions),
    ctr: numberFrom(row.CTR),
    position: numberFrom(row.Position)
  })).filter((row) => row.key);
}

function parseGa4Daily(text) {
  const lines = text.split(/\r?\n/);
  let startDate = null;
  let metric = null;
  const map = new Map();

  for (const line of lines) {
    const trimmed = line.trim();
    const start = trimmed.match(/^# Start date:\s*(\d{8})/);
    if (start) {
      startDate = start[1];
      metric = null;
      continue;
    }
    if (trimmed === "Nth day,Active users") {
      metric = "activeUsers";
      continue;
    }
    if (trimmed === "Nth day,New users") {
      metric = "newUsers";
      continue;
    }
    if (!metric || !startDate || !/^\d{4},/.test(trimmed)) continue;
    const [offset, value] = trimmed.split(",");
    const date = dateFromCompact(startDate, Number(offset));
    const current = map.get(date) || { date, activeUsers: 0, newUsers: 0 };
    current[metric] = numberFrom(value);
    map.set(date, current);
  }

  return [...map.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function dateFromCompact(compactDate, offsetDays) {
  const year = Number(compactDate.slice(0, 4));
  const month = Number(compactDate.slice(4, 6)) - 1;
  const day = Number(compactDate.slice(6, 8));
  return new Date(Date.UTC(year, month, day + offsetDays)).toISOString().slice(0, 10);
}

function summariseDaily(daily) {
  const clicks = daily.reduce((sum, row) => sum + row.clicks, 0);
  const impressions = daily.reduce((sum, row) => sum + row.impressions, 0);
  const weightedPosition = daily.reduce((sum, row) => sum + (row.position * row.impressions), 0);
  return {
    clicks,
    impressions,
    ctr: impressions ? (clicks / impressions) * 100 : 0,
    position: impressions ? weightedPosition / impressions : 0,
    start: daily[0]?.date || "",
    end: daily[daily.length - 1]?.date || ""
  };
}

function groupWeekly(daily, ga4Daily = []) {
  const ga4ByDate = new Map(ga4Daily.map((row) => [row.date, row]));
  const sorted = [...daily].sort((a, b) => a.date.localeCompare(b.date));
  const weeks = [];
  for (let index = 0; index < sorted.length; index += 7) {
    const slice = sorted.slice(index, index + 7);
    if (!slice.length) continue;
    const clicks = slice.reduce((sum, row) => sum + row.clicks, 0);
    const impressions = slice.reduce((sum, row) => sum + row.impressions, 0);
    const weightedPosition = slice.reduce((sum, row) => sum + (row.position * row.impressions), 0);
    const activeUsers = slice.reduce((sum, row) => sum + (ga4ByDate.get(row.date)?.activeUsers || 0), 0);
    weeks.push({
      label: `${dateLabel(slice[0].date)}-${dateLabel(slice[slice.length - 1].date)}`,
      start: slice[0].date,
      end: slice[slice.length - 1].date,
      clicks,
      impressions,
      ctr: impressions ? (clicks / impressions) * 100 : 0,
      position: impressions ? weightedPosition / impressions : 0,
      activeUsers
    });
  }
  return weeks;
}

function mergeDailyByDate(snapshots) {
  const map = new Map();
  snapshots.forEach((snapshot) => {
    snapshot.daily.forEach((row) => {
      map.set(row.date, row);
    });
  });
  return [...map.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function groupMonthly(daily) {
  const map = new Map();
  daily.forEach((row) => {
    const key = row.date.slice(0, 7);
    const current = map.get(key) || { key, label: key, clicks: 0, impressions: 0, weightedPosition: 0 };
    current.clicks += row.clicks;
    current.impressions += row.impressions;
    current.weightedPosition += row.position * row.impressions;
    map.set(key, current);
  });
  return [...map.values()].map((row) => ({
    ...row,
    label: new Intl.DateTimeFormat("en-GB", { month: "short", year: "2-digit" }).format(new Date(`${row.key}-01T00:00:00Z`)),
    ctr: row.impressions ? (row.clicks / row.impressions) * 100 : 0,
    position: row.impressions ? row.weightedPosition / row.impressions : 0
  })).sort((a, b) => a.key.localeCompare(b.key));
}

function diff(current, previous, reverse = false) {
  if (!previous && previous !== 0) return { text: "baseline", className: "trend-flat", value: 0 };
  const value = current - previous;
  const better = reverse ? value < 0 : value > 0;
  if (Math.abs(value) < 0.05) return { text: "flat", className: "trend-flat", value };
  return {
    text: `${value > 0 ? "+" : ""}${Math.abs(value) >= 10 ? value.toFixed(0) : value.toFixed(1)}`,
    className: better ? "trend-up" : "trend-down",
    value
  };
}

function compareCollections(current, previous, metric = "impressions") {
  const previousMap = new Map(previous.map((row) => [row.key, row]));
  return current.map((row) => {
    const before = previousMap.get(row.key);
    return {
      ...row,
      previous: before,
      deltaClicks: row.clicks - (before?.clicks || 0),
      deltaImpressions: row.impressions - (before?.impressions || 0),
      deltaPosition: before ? row.position - before.position : 0,
      score: metric === "clicks" ? row.clicks - (before?.clicks || 0) : row.impressions - (before?.impressions || 0)
    };
  });
}

function pointsPath(points, xKey, yKey, width, height, pad, yMax) {
  if (!points.length) return "";
  const xMax = Math.max(points.length - 1, 1);
  return points.map((point, index) => {
    const x = pad + (index / xMax) * (width - pad * 2);
    const y = height - pad - ((point[yKey] || 0) / Math.max(yMax, 1)) * (height - pad * 2);
    return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
}

function renderLineChart(target, rows) {
  const width = 760;
  const height = 310;
  const pad = 38;
  const clickMax = Math.max(...rows.map((row) => row.clicks), 1);
  const impressionMax = Math.max(...rows.map((row) => row.impressions), 1);
  const clickPoints = rows.map((row) => ({ ...row, scaledClicks: (row.clicks / clickMax) * impressionMax }));
  const dateMarks = rows.filter((_, index) => index % Math.max(Math.ceil(rows.length / 5), 1) === 0);

  const legendY = height + 20;
  const svgHeight = height + 32;
  $(target).innerHTML = `
    <svg viewBox="0 0 ${width} ${svgHeight}" role="img" aria-label="Daily clicks and impressions chart">
      <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="rgba(0,51,160,.14)" />
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}" stroke="rgba(0,51,160,.14)" />
      <text class="axis-label" x="${pad - 4}" y="${pad + 4}" text-anchor="end">${compact(impressionMax)}</text>
      <text class="axis-label" x="${pad - 4}" y="${height - pad + 4}" text-anchor="end">0</text>
      <path class="line-impressions" d="${pointsPath(rows, "date", "impressions", width, height, pad, impressionMax)}" />
      <path class="line-clicks" d="${pointsPath(clickPoints, "date", "scaledClicks", width, height, pad, impressionMax)}" />
      ${dateMarks.map((row, index) => {
        const x = pad + (rows.indexOf(row) / Math.max(rows.length - 1, 1)) * (width - pad * 2);
        return `<text class="axis-label" x="${x}" y="${height - 10}" text-anchor="${index === 0 ? "start" : "middle"}">${dateLabel(row.date)}</text>`;
      }).join("")}
      <text class="chart-label" x="${pad}" y="22">Impressions</text>
      <circle cx="${pad}" cy="${legendY}" r="5" class="legend-dot-impressions" />
      <text class="axis-label" x="${pad + 12}" y="${legendY + 4}">Impressions</text>
      <circle cx="${pad + 112}" cy="${legendY}" r="5" class="legend-dot-clicks" />
      <text class="axis-label" x="${pad + 124}" y="${legendY + 4}">Clicks (0-${compact(clickMax)})</text>
    </svg>
  `;
}

function renderGroupedBars(target, rows, keys) {
  const width = 760;
  const height = 310;
  const pad = 38;
  const max = Math.max(...rows.flatMap((row) => keys.map((key) => row[key] || 0)), 1);
  const groupWidth = (width - pad * 2) / Math.max(rows.length, 1);
  const barWidth = Math.max(groupWidth / (keys.length + 1), 8);
  const classes = ["bar-clicks", "bar-impressions", "bar-users"];

  $(target).innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Grouped bar chart">
      <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="rgba(0,51,160,.14)" />
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}" stroke="rgba(0,51,160,.14)" />
      <text class="axis-label" x="${pad - 4}" y="${pad + 4}" text-anchor="end">${compact(max)}</text>
      <text class="axis-label" x="${pad - 4}" y="${height - pad + 4}" text-anchor="end">0</text>
      ${rows.map((row, rowIndex) => {
        const baseX = pad + rowIndex * groupWidth + groupWidth * 0.18;
        return keys.map((key, keyIndex) => {
          const barHeight = ((row[key] || 0) / max) * (height - pad * 2);
          const x = baseX + keyIndex * barWidth;
          const y = height - pad - barHeight;
          return `<rect class="${classes[keyIndex] || "bar-impressions"}" x="${x}" y="${y}" width="${barWidth * 0.78}" height="${barHeight}" rx="4"></rect>`;
        }).join("") + `<text class="axis-label" x="${baseX}" y="${height - 10}">${row.label}</text>`;
      }).join("")}
      <text class="chart-label" x="${pad}" y="22">${keys.join(" / ")}</text>
    </svg>
  `;
}

function renderHorizontalBars(target, rows, metric) {
  const width = 760;
  const height = 230;
  const pad = 18;
  const max = Math.max(...rows.map((row) => row[metric]), 1);
  const rowHeight = 36;
  $(target).innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Horizontal bar chart">
      ${rows.slice(0, 5).map((row, index) => {
        const y = pad + index * rowHeight;
        const barWidth = ((row[metric] || 0) / max) * (width - 260);
        return `
          <text class="axis-label" x="${pad}" y="${y + 18}">${row.label}</text>
          <rect class="bar-impressions" x="210" y="${y}" width="${barWidth}" height="22" rx="5"></rect>
          <text class="chart-label" x="${220 + barWidth}" y="${y + 16}">${compact(row[metric])}</text>
        `;
      }).join("")}
    </svg>
  `;
}

function trendSentence(label, current, previous, reverse = false, suffix = "") {
  const movement = diff(current, previous, reverse);
  return `<span class="${movement.className}">${movement.text}${suffix}</span>`;
}

function renderStats(latest) {
  $("#latest-clicks").textContent = compact(latest.summary.clicks);
  $("#latest-clicks-note").textContent = `${dateLabel(latest.summary.start)} - ${dateLabel(latest.summary.end)}`;
  $("#latest-impressions").textContent = compact(latest.summary.impressions);
  $("#latest-impressions-note").textContent = `${dateLabel(latest.summary.start)} - ${dateLabel(latest.summary.end)}`;
  $("#latest-ctr").textContent = pct(latest.summary.ctr);
  $("#latest-ctr-note").textContent = `${compact(latest.summary.clicks)} clicks from ${compact(latest.summary.impressions)} impressions`;
  $("#latest-position").textContent = latest.summary.position.toFixed(1);
}

function renderTrendRead(snapshots, extras) {
  const latest = snapshots.at(-1);
  const previous = snapshots.at(-2);
  const latestWeek = latest.weeks.at(-1);
  const previousWeek = latest.weeks.at(-2);
  const uk = latest.countries.find((row) => row.key === "United Kingdom");
  const nonUk = latest.countries.reduce((sum, row) => row.key === "United Kingdom" ? sum : sum + row.impressions, 0);

  const dir = (current, prev) => current > prev ? "up" : current < prev ? "down" : "flat";
  const ukTotal = uk?.impressions || 0;
  const ukShare = ukTotal / Math.max(latest.summary.impressions, 1);

  $("#snapshot-count").textContent = `${snapshots.length} exports loaded`;
  $("#trend-read").innerHTML = [
    {
      title: "Organic visibility",
      direction: dir(latest.summary.clicks, previous.summary.clicks),
      body: `Latest export has ${compact(latest.summary.impressions)} impressions and ${compact(latest.summary.clicks)} clicks. Clicks vs previous export: ${trendSentence("clicks", latest.summary.clicks, previous.summary.clicks)}.`
    },
    {
      title: "Weekly direction",
      direction: latestWeek && previousWeek ? dir(latestWeek.clicks, previousWeek.clicks) : "flat",
      body: latestWeek && previousWeek
        ? `Latest week: ${compact(latestWeek.clicks)} clicks, ${compact(latestWeek.impressions)} impressions. Clicks vs prior week: ${trendSentence("week clicks", latestWeek.clicks, previousWeek.clicks)}.`
        : "Not enough weekly rows yet."
    },
    {
      title: "Click capture",
      direction: dir(latest.summary.ctr, previous.summary.ctr),
      body: `Latest CTR is ${pct(latest.summary.ctr)}. CTR vs previous export: ${trendSentence("ctr", latest.summary.ctr, previous.summary.ctr, false, " pts")}.`
    },
    {
      title: "Traffic quality",
      direction: ukShare > 0.8 ? "up" : ukShare > 0.5 ? "flat" : "down",
      body: `UK impressions: ${compact(ukTotal)}. Non-UK impressions: ${compact(nonUk)}. Conversion framework: ${extras.conversionFramework ? "loaded" : "missing"}.`
    }
  ].map((item) => `
    <article class="read-card read-card-${item.direction}">
      <strong>${item.title}</strong>
      <p>${item.body}</p>
    </article>
  `).join("");
}

function renderSnapshotTable(snapshots) {
  $("#snapshot-table").innerHTML = snapshots.map((snapshot, index) => {
    const previous = snapshots[index - 1];
    const change = previous
      ? `Clicks ${trendSentence("clicks", snapshot.summary.clicks, previous.summary.clicks)}, impressions ${trendSentence("impressions", snapshot.summary.impressions, previous.summary.impressions)}, pos ${trendSentence("position", snapshot.summary.position, previous.summary.position, true)}`
      : "Baseline";
    return `
      <tr>
        <td><strong>${snapshot.label}</strong><br><span class="muted">${snapshot.id}</span></td>
        <td>${snapshot.summary.start ? `${fullDate(snapshot.summary.start)} to ${fullDate(snapshot.summary.end)}` : "Unknown"}<br><span class="muted">${snapshot.note}</span></td>
        <td>${compact(snapshot.summary.clicks)}</td>
        <td>${compact(snapshot.summary.impressions)}</td>
        <td>${pct(snapshot.summary.ctr)}</td>
        <td>${snapshot.summary.position.toFixed(1)}</td>
        <td>${change}</td>
      </tr>
    `;
  }).join("");
}

function renderMovers(target, rows, type) {
  $(target).innerHTML = rows.slice(0, 8).map((row) => {
    const mainDelta = type === "page" ? row.deltaImpressions : row.deltaClicks || row.deltaImpressions;
    const mainClass = mainDelta > 0 ? "trend-up" : mainDelta < 0 ? "trend-down" : "trend-flat";
    return `
      <article class="mover-card">
        <strong>${row.label}</strong>
        <p>${compact(row.impressions)} impressions, ${compact(row.clicks)} clicks, ${pct(row.ctr)} CTR, pos ${row.position.toFixed(1)}</p>
        <span class="${mainClass}">${mainDelta > 0 ? "+" : ""}${compact(mainDelta)} ${type === "page" ? "impressions" : "clicks/impr. signal"}</span>
      </article>
    `;
  }).join("");
}

function renderMiniTable(target, rows) {
  $(target).innerHTML = rows.map((row) => `
    <div class="mini-row">
      <strong>${row.label}</strong>
      <span>${compact(row.clicks)} clicks</span>
      <span>${compact(row.impressions)} impr.</span>
      <span>${pct(row.ctr)}</span>
    </div>
  `).join("");
}

function renderMonthlyTable(rows) {
  $("#monthly-table").innerHTML = rows.map((row, index) => {
    const previous = rows[index - 1];
    return `
      <div class="mini-row">
        <strong>${row.label}</strong>
        <span>${compact(row.clicks)} clicks ${previous ? trendSentence("clicks", row.clicks, previous.clicks) : ""}</span>
        <span>${compact(row.impressions)} impr.</span>
        <span>${pct(row.ctr)} CTR, pos ${row.position.toFixed(1)}</span>
      </div>
    `;
  }).join("");
}

function renderLocalSignals(extras) {
  const cards = [
    { title: "Keyword roadmap", value: extras.keywordRoadmap ? "Loaded" : "Missing", hasData: Boolean(extras.keywordRoadmap), note: "Use this to validate whether query movement deserves a new page or a refresh." },
    { title: "Conversion framework", value: extras.conversionFramework ? "Loaded" : "Missing", hasData: Boolean(extras.conversionFramework), note: "Use this to connect SEO updates to trials, contact actions, and software proof." },
    { title: "Monthly report", value: extras.monthly ? "Loaded" : "Missing", hasData: Boolean(extras.monthly), note: "Keeps snapshot changes tied to the current strategic read." },
    { title: "Action list", value: extras.actionsCurrent ? "Loaded" : "Missing", hasData: Boolean(extras.actionsCurrent), note: "Shows which page changes are already queued." }
  ];
  $("#local-signal-cards").innerHTML = cards.map((card) => `
    <article class="mover-card">
      <strong>${card.title}</strong>
      <p><span class="${card.hasData ? "trend-up" : "trend-flat"}">${card.value}</span></p>
      <p>${card.note}</p>
    </article>
  `).join("");
}

function renderSources(loadedSnapshots, extras) {
  const rows = [];
  loadedSnapshots.forEach((snapshot) => {
    ["overview", "pages", "queries", "devices", "countries", "ga4"].forEach((key) => {
      rows.push({ name: `${snapshot.label} ${key}`, path: snapshot[key], loaded: Boolean(snapshot.raw[key]) });
    });
  });
  Object.entries(EXTRA_SOURCES).forEach(([key, path]) => {
    rows.push({ name: key, path, loaded: Boolean(extras[key]) });
  });
  $("#source-list").innerHTML = rows.map((row) => `
    <div class="source">
      <strong>${row.loaded ? "Loaded" : "Missing"}: ${row.name}</strong>
      <span>${row.path}</span>
    </div>
  `).join("");
}

function renderDataHealth(loadedSnapshots) {
  const panel = $("#data-health");
  const usingFile = window.location.protocol === "file:";
  const missingCore = loadedSnapshots.length < 2;
  if (!usingFile && !missingCore) {
    panel.hidden = true;
    return;
  }
  panel.hidden = false;
  panel.innerHTML = `
    <strong>Trend data needs attention</strong>
    <p>${usingFile ? "Open this page through http://127.0.0.1:4173/local-tools/seo-trends.html so browser fetches can read CSV files." : "Fewer than two Search Console snapshots loaded, so comparisons will be limited."}</p>
  `;
}

async function loadSnapshot(snapshot) {
  const raw = {};
  await Promise.all(["overview", "pages", "queries", "devices", "countries", "ga4"].map(async (key) => {
    try {
      raw[key] = await fetchText(`${snapshot.id}-${key}`, snapshot[key]);
    } catch (error) {
      console.warn(error);
      raw[key] = "";
    }
  }));

  const daily = normaliseDaily(parseCsv(raw.overview));
  const ga4Daily = parseGa4Daily(raw.ga4);
  return {
    ...snapshot,
    raw,
    daily,
    summary: summariseDaily(daily),
    weeks: groupWeekly(daily, ga4Daily),
    ga4Daily,
    pages: normalisePages(parseCsv(raw.pages)),
    queries: normaliseQueries(parseCsv(raw.queries)),
    devices: normaliseDimension(parseCsv(raw.devices), "Device"),
    countries: normaliseDimension(parseCsv(raw.countries), "Country")
  };
}

async function init() {
  const snapshots = (await Promise.all(SNAPSHOTS.map(loadSnapshot))).filter((snapshot) => snapshot.daily.length);
  const extras = {};
  await Promise.all(Object.entries(EXTRA_SOURCES).map(async ([key, path]) => {
    try {
      extras[key] = await fetchText(key, path);
    } catch (error) {
      console.warn(error);
      extras[key] = "";
    }
  }));

  renderDataHealth(snapshots);
  if (!snapshots.length) return;

  const latest = snapshots.at(-1);
  const previous = snapshots.at(-2) || latest;
  const allDaily = mergeDailyByDate(snapshots);
  const monthly = groupMonthly(allDaily);
  const pageMovers = compareCollections(latest.pages, previous.pages, "impressions").sort((a, b) => Math.abs(b.deltaImpressions) - Math.abs(a.deltaImpressions));
  const queryMovers = compareCollections(latest.queries, previous.queries, "clicks").sort((a, b) => Math.abs((b.deltaClicks * 5) + b.deltaImpressions) - Math.abs((a.deltaClicks * 5) + a.deltaImpressions));

  renderStats(latest);
  renderTrendRead(snapshots, extras);
  renderLineChart("#daily-line-chart", allDaily);
  renderGroupedBars("#weekly-bar-chart", latest.weeks, ["clicks", "impressions"]);
  renderGroupedBars("#monthly-bar-chart", monthly, ["clicks", "impressions"]);
  renderMonthlyTable(monthly);
  renderSnapshotTable(snapshots);
  renderMovers("#page-movers", pageMovers, "page");
  renderMovers("#query-movers", queryMovers, "query");
  renderHorizontalBars("#device-chart", latest.devices, "impressions");
  renderMiniTable("#device-table", latest.devices);
  renderHorizontalBars("#country-chart", latest.countries, "impressions");
  renderMiniTable("#country-table", latest.countries.slice(0, 8));
  renderGroupedBars("#ga4-chart", latest.weeks, ["activeUsers", "clicks"]);
  $("#ga4-table").innerHTML = latest.weeks.map((week) => `
    <div class="mini-row">
      <strong>${week.label}</strong>
      <span>${compact(week.activeUsers)} active users</span>
      <span>${compact(week.clicks)} organic clicks</span>
      <span>${pct(week.ctr)} CTR</span>
    </div>
  `).join("");
  renderLocalSignals(extras);
  renderSources(snapshots, extras);
}

init();


