import requests


GITHUB_API_URL = "https://api.github.com/graphql"


def get_all_time_github_stats(username: str, token: str) -> dict:
    headers = {
        "Authorization": f"Bearer {token}"
    }

    init_query = """
    query($login: String!) {
        user(login: $login) {
            repositories(
                ownerAffiliations: [OWNER]
                isFork: false
            ) {
                totalCount
            }

            contributionsCollection {
                contributionYears
            }
        }
    }
    """

    response = requests.post(
        GITHUB_API_URL,
        json={
            "query": init_query,
            "variables": {
                "login": username
            }
        },
        headers=headers
    )

    if response.status_code != 200:
        raise Exception(
            f"GitHub API request failed: {response.status_code}"
        )

    data = response.json()

    if "errors" in data:
        raise Exception(
            f"GitHub GraphQL Error: {data['errors'][0]['message']}"
        )

    user = data.get("data", {}).get("user")

    if user is None:
        raise Exception("GitHub user not found")

    total_repos = user["repositories"]["totalCount"]
    active_years = user["contributionsCollection"]["contributionYears"]

    dynamic_query = f"""
    query {{
        user(login: "{username}") {{
    """

    for year in active_years:
        dynamic_query += f"""
            year_{year}: contributionsCollection(
                from: "{year}-01-01T00:00:00Z"
                to: "{year}-12-31T23:59:59Z"
            ) {{
                totalCommitContributions
                totalPullRequestContributions
                totalIssueContributions
                restrictedContributionsCount

                contributionCalendar {{
                    totalContributions
                }}
            }}
        """

    dynamic_query += """
        }
    }
    """

    response = requests.post(
        GITHUB_API_URL,
        json={
            "query": dynamic_query
        },
        headers=headers
    )

    if response.status_code != 200:
        raise Exception(
            f"GitHub API request failed: {response.status_code}"
        )

    data = response.json()

    if "errors" in data:
        raise Exception(
            f"GitHub GraphQL Error: {data['errors'][0]['message']}"
        )

    all_years_data = (
        data.get("data", {})
        .get("user", {})
    )

    stats = {
        "total_heatmap_contributions": 0,
        "total_public_commits": 0,
        "total_private_activity": 0,
        "total_prs": 0,
        "total_issues": 0,
        "total_repos": total_repos,
        "active_years": len(active_years)
    }

    for metrics in all_years_data.values():

        if not metrics:
            continue

        stats["total_heatmap_contributions"] += (
            metrics
            .get("contributionCalendar", {})
            .get("totalContributions", 0)
        )

        stats["total_public_commits"] += (
            metrics.get("totalCommitContributions", 0)
        )

        stats["total_private_activity"] += (
            metrics.get("restrictedContributionsCount", 0)
        )

        stats["total_prs"] += (
            metrics.get("totalPullRequestContributions", 0)
        )

        stats["total_issues"] += (
            metrics.get("totalIssueContributions", 0)
        )

    return stats