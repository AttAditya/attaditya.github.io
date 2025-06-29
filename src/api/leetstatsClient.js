import { supabase } from "./supabaseClient";

export async function fetchLeetStats() {
  const query = `
    query fullLeetCodeStats(
      $username: String!
      $userSlug: String!
      $limit: Int!
    ) {
      matchedUser(username: $username) {
        username
        profile {
          realName
          userAvatar
          ranking
          reputation
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        badges {
          id
          name
          shortName
          displayName
          icon
          hoverText
          medal {
            slug
            config {
              iconGif
              iconGifBackground
            }
          }
          creationDate
          category
        }
        upcomingBadges {
          name
          icon
          progress
        }
        contestBadge {
          name
          expired
        }
        tagProblemCounts {
          advanced {
            tagName
            tagSlug
            problemsSolved
          }
          intermediate {
            tagName
            tagSlug
            problemsSolved
          }
          fundamental {
            tagName
            tagSlug
            problemsSolved
          }
        }
      }

      userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
        topPercentage
        badge {
          name
        }
      }

      userContestRankingHistory(username: $username) {
        attended
        trendDirection
        problemsSolved
        totalProblems
        finishTimeInSeconds
        rating
        ranking
        contest {
          title
          startTime
        }
      }

      userProfileUserQuestionProgressV2(userSlug: $userSlug) {
        numAcceptedQuestions {
          count
          difficulty
        }
        numFailedQuestions {
          count
          difficulty
        }
        numUntouchedQuestions {
          count
          difficulty
        }
        userSessionBeatsPercentage {
          difficulty
          percentage
        }
        totalQuestionBeatsPercentage
      }

      recentAcSubmissionList(username: $username, limit: $limit) {
        id
        title
        titleSlug
        timestamp
      }

      contestRatingHistogram {
        userCount
        ratingStart
        ratingEnd
        topPercentage
      }
    }
  `;

  const cache_key = `leetstats-${query}`;
  const cachedData = await supabase
    .from("cache_table")
    .select("cache_value, last_update")
    .eq("cache_key", cache_key)
    .single();

  if (cachedData.data && cachedData.data.cache_value) {
    const cacheValue = JSON.parse(cachedData.data.cache_value);
    const lastUpdate = new Date(cachedData.data.last_update);

    const currentTime = new Date();
    const cacheDuration = 60 * 60 * 1000;
    if (currentTime - lastUpdate < cacheDuration) {
      return { data: cacheValue };
    }
  }

  const result = await supabase.functions.invoke("leetstats", {
    body: {
      username: "attaditya",
      query: query,
      variables: {
        username: "attaditya",
        userSlug: "attaditya",
        limit: 15
      }
    }
  });

  if (result.error) {
    console.error("Error fetching LeetCode stats:", result.error);
    return { data: null };
  }

  const data = result.data;
  if (!data || !data.data) {
    console.error("No data returned from LeetCode stats function.");
    return { data: null };
  }

  const cacheValue = data.data;
  try {
    await supabase
      .from("cache_table")
      .upsert({
        cache_key: cache_key,
        cache_value: JSON.stringify(cacheValue),
        last_update: new Date()
      });
  } catch (error) {}

  return { data: cacheValue };
}

export const leetstats = {
  fetchStats: fetchLeetStats,
}
