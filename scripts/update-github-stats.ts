#!/usr/bin/env tsx

/**
 * Standalone script to fetch GitHub repository stats (stars and forks)
 * and update the github-stats.json file with the latest data.
 *
 * Usage: GITHUB_TOKEN=your_token npm run update-github-stats
 */

import * as fs from "fs";
import * as path from "path";

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
}

interface GitHubStats {
  [key: string]: {
    stars: string;
    forks: string;
  };
}

/**
 * Fetches repository statistics from GitHub API
 */
async function fetchRepoStats(
  owner: string,
  repo: string,
  token: string | undefined,
): Promise<GitHubRepo> {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-Stats-Updater",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch stats for ${owner}/${repo}: ${response.statusText}`,
    );
  }

  return await response.json();
}

/**
 * Extracts owner and repo from GitHub URL
 */
function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/\?#]+)/);
  if (!match) return null;

  return {
    owner: match[1],
    repo: match[2],
  };
}

/**
 * Formats number with 'k' suffix for thousands
 */
function formatCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

/**
 * Main function to update GitHub stats in github-stats.json
 */
async function updateGitHubStats() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn(
      "⚠️  Warning: GITHUB_TOKEN environment variable not set. Using unauthenticated requests (rate limited to 60 requests/hour)",
    );
  }

  const statsPath = path.join(
    __dirname,
    "..",
    "src",
    "data",
    "github-stats.json",
  );
  const resumePath = path.join(__dirname, "..", "src", "data", "resume.tsx");

  if (!fs.existsSync(statsPath)) {
    console.error(`Error: Stats file not found at ${statsPath}`);
    process.exit(1);
  }

  if (!fs.existsSync(resumePath)) {
    console.error(`Error: Resume file not found at ${resumePath}`);
    process.exit(1);
  }

  // Read the current stats
  const currentStats: GitHubStats = JSON.parse(
    fs.readFileSync(statsPath, "utf-8"),
  );

  // Read resume.tsx to find all GitHub URLs
  const resumeContent = fs.readFileSync(resumePath, "utf-8");
  const projectMatches = resumeContent.matchAll(
    /href:\s*"(https:\/\/github\.com\/[^"]+)"/g,
  );

  console.log("Fetching GitHub repository stats...\n");

  const updatedStats: GitHubStats = {};

  for (const match of projectMatches) {
    const githubUrl = match[1];
    const parsed = parseGitHubUrl(githubUrl);

    if (!parsed) {
      console.log(`⚠️  Skipping invalid URL: ${githubUrl}`);
      continue;
    }

    const { owner, repo } = parsed;
    const repoKey = `${owner}/${repo}`.toLowerCase();

    try {
      console.log(`Fetching stats for ${repoKey}...`);
      const stats = await fetchRepoStats(owner, repo, token);

      const formattedStars = formatCount(stats.stargazers_count);
      const formattedForks = formatCount(stats.forks_count);

      console.log(`  ⭐ Stars: ${stats.stargazers_count} (${formattedStars})`);
      console.log(`  🍴 Forks: ${stats.forks_count} (${formattedForks})`);

      updatedStats[repoKey] = {
        stars: formattedStars,
        forks: formattedForks,
      };

      console.log(`  ✓ Updated stats for ${repoKey}\n`);

      // Add a small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error(
        `  ✗ Error fetching stats for ${repoKey}:`,
        error instanceof Error ? error.message : error,
      );
      // Keep existing stats if available, otherwise use defaults
      if (currentStats[repoKey]) {
        updatedStats[repoKey] = currentStats[repoKey];
        console.log(`  ℹ️  Keeping existing stats for ${repoKey}\n`);
      } else {
        // Add default stats for new repositories that failed to fetch
        updatedStats[repoKey] = { stars: "0", forks: "0" };
        console.log(`  ℹ️  Using default stats for ${repoKey}\n`);
      }
    }
  }

  // Write updated stats back to file
  fs.writeFileSync(
    statsPath,
    JSON.stringify(updatedStats, null, 2) + "\n",
    "utf-8",
  );

  console.log("✓ GitHub stats updated successfully!");
  console.log(`📝 Updated stats saved to ${statsPath}`);
}

// Run the script
updateGitHubStats().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
