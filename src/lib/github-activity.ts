const GITHUB_ACTIVITY_URL = "https://github.com";

export const GITHUB_ACTIVITY_WINDOW_DAYS = 200;

export type GithubActivityDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
  label: string;
  isPadding: boolean;
};

export type GithubActivityWeek = {
  key: string;
  days: GithubActivityDay[];
};

export type GithubActivitySummary = {
  username: string;
  profileUrl: string;
  rangeLabel: string;
  totalContributions: number;
  activeDays: number;
  maxDayCount: number;
  weeks: GithubActivityWeek[];
};

type ParsedContributionDay = Omit<GithubActivityDay, "isPadding">;

const DAY_PATTERN =
  /<td(?=[^>]*data-date="(?<date>\d{4}-\d{2}-\d{2})")(?=[^>]*id="(?<id>[^"]+)")(?=[^>]*data-level="(?<level>[0-4])")(?=[^>]*class="ContributionCalendar-day")[^>]*><\/td>\s*<tool-tip[^>]*for="\k<id>"[^>]*>(?<tooltip>[^<]+)<\/tool-tip>/g;

const RANGE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

function formatUtcDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function parseUtcDate(dateKey: string) {
  return new Date(`${dateKey}T00:00:00.000Z`);
}

function shiftUtcDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + amount);
  return next;
}

function getWindowBounds(referenceDate: Date) {
  const endDate = new Date(
    Date.UTC(
      referenceDate.getUTCFullYear(),
      referenceDate.getUTCMonth(),
      referenceDate.getUTCDate(),
    ),
  );
  const startDate = shiftUtcDays(endDate, -(GITHUB_ACTIVITY_WINDOW_DAYS - 1));

  return { startDate, endDate };
}

function getContributionCount(tooltip: string) {
  if (/^No contributions on/i.test(tooltip)) {
    return 0;
  }

  const match = tooltip.match(/(?<count>[\d,]+)\s+contributions?\s+on/i);

  if (!match?.groups?.count) {
    return 0;
  }

  return Number.parseInt(match.groups.count.replaceAll(",", ""), 10);
}

export function extractGitHubUsername(url: string) {
  const match = url.match(/github\.com\/(?<username>[^/?#]+)/i);
  return match?.groups?.username ?? null;
}

export function parseGithubContributionDays(html: string): ParsedContributionDay[] {
  const days: ParsedContributionDay[] = [];

  for (const match of html.matchAll(DAY_PATTERN)) {
    const date = match.groups?.date;
    const level = match.groups?.level;
    const tooltip = match.groups?.tooltip?.trim();

    if (!date || level === undefined || !tooltip) {
      continue;
    }

    days.push({
      date,
      count: getContributionCount(tooltip),
      level: Number.parseInt(level, 10) as GithubActivityDay["level"],
      label: tooltip,
    });
  }

  return days;
}

export function buildGithubActivitySummary(
  username: string,
  days: ParsedContributionDay[],
  referenceDate = new Date(),
): GithubActivitySummary {
  const { startDate, endDate } = getWindowBounds(referenceDate);
  const startKey = formatUtcDateKey(startDate);
  const endKey = formatUtcDateKey(endDate);

  const filteredDays = days
    .filter((day) => day.date >= startKey && day.date <= endKey)
    .sort((left, right) => left.date.localeCompare(right.date));

  const daysByDate = new Map(filteredDays.map((day) => [day.date, day]));
  const totalContributions = filteredDays.reduce((sum, day) => sum + day.count, 0);
  const activeDays = filteredDays.filter((day) => day.count > 0).length;
  const maxDayCount = filteredDays.reduce(
    (maxCount, day) => Math.max(maxCount, day.count),
    0,
  );

  const gridStartDate = shiftUtcDays(startDate, -startDate.getUTCDay());
  const gridEndDate = shiftUtcDays(endDate, 6 - endDate.getUTCDay());
  const weeks: GithubActivityWeek[] = [];

  let cursor = gridStartDate;

  while (cursor <= gridEndDate) {
    const weekStart = cursor;
    const weekKey = formatUtcDateKey(weekStart);
    const weekDays: GithubActivityDay[] = [];

    for (let offset = 0; offset < 7; offset += 1) {
      const dayDate = shiftUtcDays(weekStart, offset);
      const dayKey = formatUtcDateKey(dayDate);
      const actualDay = daysByDate.get(dayKey);

      weekDays.push(
        actualDay
          ? {
              ...actualDay,
              isPadding: false,
            }
          : {
              date: dayKey,
              count: 0,
              level: 0,
              label: `${RANGE_FORMATTER.format(dayDate)} · Outside the last 30 days`,
              isPadding: true,
            },
      );
    }

    weeks.push({
      key: weekKey,
      days: weekDays,
    });

    cursor = shiftUtcDays(weekStart, 7);
  }

  return {
    username,
    profileUrl: `${GITHUB_ACTIVITY_URL}/${username}`,
    rangeLabel: `${RANGE_FORMATTER.format(startDate)} - ${RANGE_FORMATTER.format(endDate)}`,
    totalContributions,
    activeDays,
    maxDayCount,
    weeks,
  };
}

export async function getGithubActivitySummary(
  username: string,
  referenceDate = new Date(),
) {
  const { startDate, endDate } = getWindowBounds(referenceDate);
  const years = new Set([startDate.getUTCFullYear(), endDate.getUTCFullYear()]);
  const htmlResponses = await Promise.all(
    [...years].map(async (year) => {
      const contributionsUrl = `${GITHUB_ACTIVITY_URL}/users/${username}/contributions?from=${year}-01-01&to=${year}-12-31`;
      const response = await fetch(contributionsUrl, {
        headers: {
          Accept: "text/html",
          "User-Agent": `${username}.portfolio-site`,
        },
        next: { revalidate: 0 },
      });

      if (!response.ok) {
        throw new Error(`GitHub activity request failed with ${response.status}`);
      }

      return response.text();
    }),
  );
  const html = (await Promise.all(htmlResponses)).join("\n");
  return buildGithubActivitySummary(
    username,
    parseGithubContributionDays(html),
    referenceDate,
  );
}
