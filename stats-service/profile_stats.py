import json
import os

from dotenv import load_dotenv

from github_stats import get_all_time_github_stats
from leetcode_stats import get_leetcode_stats


load_dotenv()


def get_profile_stats(
    github_username: str,
    leetcode_username: str
) -> dict:

    github_token = os.getenv("GITHUB_TOKEN")

    if not github_token:
        raise Exception("GITHUB_TOKEN is not configured in .env")

    github_stats = get_all_time_github_stats(
        username=github_username,
        token=github_token
    )

    leetcode_stats = get_leetcode_stats(
        username=leetcode_username
    )

    return {
        "github": github_stats,
        "leetcode": leetcode_stats
    }


if __name__ == "__main__":

    github_username = input("Enter GitHub username: ").strip()
    leetcode_username = input("Enter LeetCode username: ").strip()

    if not github_username or not leetcode_username:
        print("Both usernames are required.")
        exit(1)

    try:
        stats = get_profile_stats(
            github_username=github_username,
            leetcode_username=leetcode_username
        )

        print("\nProfile Stats")
        print("=" * 40)

        print("\nGitHub:")
        print(json.dumps(stats["github"], indent=2))

        print("\nLeetCode:")
        print(json.dumps(stats["leetcode"], indent=2))

    except Exception as error:
        print(f"\nError: {error}")