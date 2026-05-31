import { CpStatsLeetcode } from "@interfaces/cp-stats";

interface RawData {
  data: {
    userContestRanking: {
      attendedContestsCount: number;
      rating: number;
      globalRanking: number;
      totalParticipants: number;
      topPercentage: number;
      badge: null | {
        name: "Guardian" | "Knight";
      }
    },
    userContestRankingHistory: {
      attended: boolean;
      trendDirection: "UP" | "DOWN" | string;
      problemsSolved: number;
      totalProblems: number;
      finishTimeInSeconds: number;
      rating: number;
      ranking: number;
      contest: {
        title: string;
        startTime: number;
      }
    }[],
    userProfileUserQuestionProgressV2: {
      totalQuestionBeatsPercentage: number;
      numAcceptedQuestions: {
        count: number;
        difficulty: string;
      }[],
      numFailedQuestions: {
        count: number;
        difficulty: string;
      }[],
      numUntouchedQuestions: {
        count: number;
        difficulty: string;
      }[],
      userSessionBeatsPercentage: {
        difficulty: string;
        percentage: number;
      }[],
    },
    contestRatingHistogram: {
      userCount: number;
      ratingStart: number;
      ratingEnd: number;
      topPercentage: number;
    }[]
  }
}

export function transformCpStatsLeetcode(raw: unknown): CpStatsLeetcode {
  const data = (raw as RawData).data;
  const userRating = Math.round(data.userContestRanking.rating);
  const userData = {
    rating: Math.round(data.userContestRanking.rating),
    badge: data.userContestRanking.badge?.name ?? null,
  };

  const ucrhData = data.userContestRankingHistory;
  const contestTimes = ucrhData.map(
    (entry) => entry.contest.startTime
  );

  const initialTime = Math.min(...contestTimes);
  const finalTime = Math.max(...contestTimes);
  const totalTime = finalTime - initialTime || 1;
  const ratings = ucrhData.map(
    (entry) => entry.rating
  );

  const minRating = Math.min(...ratings);
  const maxRating = Math.max(...ratings);
  const ratingWindow = maxRating - minRating || 1;
  const linegraphPoints = ucrhData.map(
    (entry) => ({
      x: (entry.contest.startTime - initialTime) / totalTime,
      y: (entry.rating - minRating) / ratingWindow,
      k: entry.rating,
    })
  );

  const crhData = data.contestRatingHistogram;
  const maxCount = Math.max(...crhData.map((entry) => entry.userCount), 1);
  const histogramBars = crhData.map(
    (entry) => ({
      start: entry.ratingStart,
      end: entry.ratingEnd,
      height: entry.userCount / maxCount,
      highlighted: (
        entry.ratingStart <= userRating &&
        userRating <= entry.ratingEnd
      ),
    })
  );

  return {
    userData,
    linegraphPoints,
    histogramBars,
  };
}

