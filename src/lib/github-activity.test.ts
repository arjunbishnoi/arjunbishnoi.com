import { describe, expect, it } from "vitest";
import {
  buildGithubActivitySummary,
  extractGitHubUsername,
  parseGithubContributionDays,
} from "./github-activity";

const sampleContributionHtml = `
  <table>
    <tbody>
      <tr>
        <td
          tabindex="0"
          data-date="2026-03-15"
          id="contribution-day-component-0-11"
          data-level="0"
          class="ContributionCalendar-day"
        ></td>
        <tool-tip for="contribution-day-component-0-11">
          No contributions on March 15th.
        </tool-tip>
        <td
          tabindex="0"
          data-date="2026-03-16"
          id="contribution-day-component-1-11"
          data-level="2"
          class="ContributionCalendar-day"
        ></td>
        <tool-tip for="contribution-day-component-1-11">
          7 contributions on March 16th.
        </tool-tip>
        <td
          tabindex="0"
          data-date="2026-04-13"
          id="contribution-day-component-2-11"
          data-level="4"
          class="ContributionCalendar-day"
        ></td>
        <tool-tip for="contribution-day-component-2-11">
          12 contributions on April 13th.
        </tool-tip>
      </tr>
    </tbody>
  </table>
`;

describe("extractGitHubUsername", () => {
  it("reads usernames from GitHub profile urls", () => {
    expect(extractGitHubUsername("https://github.com/arjunbishnoi")).toBe(
      "arjunbishnoi",
    );
  });

  it("returns null for invalid urls", () => {
    expect(extractGitHubUsername("https://example.com/arjunbishnoi")).toBeNull();
  });
});

describe("parseGithubContributionDays", () => {
  it("parses contribution cells from GitHub markup", () => {
    expect(parseGithubContributionDays(sampleContributionHtml)).toEqual([
      {
        date: "2026-03-15",
        count: 0,
        level: 0,
        label: "No contributions on March 15th.",
      },
      {
        date: "2026-03-16",
        count: 7,
        level: 2,
        label: "7 contributions on March 16th.",
      },
      {
        date: "2026-04-13",
        count: 12,
        level: 4,
        label: "12 contributions on April 13th.",
      },
    ]);
  });
});

describe("buildGithubActivitySummary", () => {
  it("builds a padded weekly calendar for the last 30 days", () => {
    const summary = buildGithubActivitySummary(
      "arjunbishnoi",
      parseGithubContributionDays(sampleContributionHtml),
      new Date("2026-04-13T12:00:00.000Z"),
    );

    expect(summary.rangeLabel).toBe("Mar 15 - Apr 13");
    expect(summary.totalContributions).toBe(19);
    expect(summary.activeDays).toBe(2);
    expect(summary.maxDayCount).toBe(12);
    expect(summary.weeks).toHaveLength(5);
    expect(summary.weeks[0]?.days[0]?.isPadding).toBe(false);
    expect(summary.weeks[0]?.days[0]).toMatchObject({
      date: "2026-03-15",
      count: 0,
      isPadding: false,
    });
    expect(summary.weeks[4]?.days[1]).toMatchObject({
      date: "2026-04-13",
      count: 12,
      isPadding: false,
    });
  });
});
