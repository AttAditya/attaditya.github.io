import { queryLeetcode } from "@api/base/leetcode";

export function cpStatsLeetcode() {
  return queryLeetcode({
    username: "attaditya",
  }, `
    query userInfo($username: String!) {
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
      userProfileUserQuestionProgressV2(userSlug: $username) {
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
      contestRatingHistogram {
        userCount
        ratingStart
        ratingEnd
        topPercentage
      }
    }
  `)
}

