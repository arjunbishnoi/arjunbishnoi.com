import { NextResponse } from "next/server";
import { socialLinks } from "@/lib/content/social-links";
import {
  extractGitHubUsername,
  getGithubActivitySummary,
} from "@/lib/github-activity";

export const runtime = "nodejs";

const SUCCESS_CACHE_CONTROL = "public, s-maxage=21600, stale-while-revalidate=86400";
const ERROR_CACHE_CONTROL = "no-store";

export async function GET() {
  const username = extractGitHubUsername(socialLinks.github);

  if (!username) {
    return NextResponse.json(
      { error: "GitHub username is not configured." },
      {
        status: 500,
        headers: {
          "Cache-Control": ERROR_CACHE_CONTROL,
        },
      },
    );
  }

  try {
    const activity = await getGithubActivitySummary(username);

    return NextResponse.json(activity, {
      headers: {
        "Cache-Control": SUCCESS_CACHE_CONTROL,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to load GitHub activity right now." },
      {
        status: 502,
        headers: {
          "Cache-Control": ERROR_CACHE_CONTROL,
        },
      },
    );
  }
}
