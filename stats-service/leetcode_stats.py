import requests


LEETCODE_API_URL = "https://leetcode.com/graphql"


def get_leetcode_stats(username: str) -> dict:

    query = """
    query userProfile($username: String!) {
        matchedUser(username: $username) {
            username

            submitStats: submitStatsGlobal {
                acSubmissionNum {
                    difficulty
                    count
                }
            }
        }
    }
    """

    response = requests.post(
        LEETCODE_API_URL,
        json={
            "query": query,
            "variables": {
                "username": username
            }
        },
        headers={
            "Content-Type": "application/json"
        }
    )

    if response.status_code != 200:
        raise Exception(
            f"LeetCode API request failed: {response.status_code}"
        )

    data = response.json()

    if "errors" in data:
        raise Exception(
            f"LeetCode GraphQL Error: {data['errors'][0]['message']}"
        )

    user = data.get("data", {}).get("matchedUser")

    if user is None:
        raise Exception("LeetCode user not found")

    submissions = user["submitStats"]["acSubmissionNum"]

    stats = {}

    for submission in submissions:
        difficulty = submission["difficulty"].lower()
        stats[difficulty] = submission["count"]

    return stats