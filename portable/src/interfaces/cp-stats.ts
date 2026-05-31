export interface UserData {
  rating: number | null;
  badge: null | "Guardian" | "Knight";
}

export interface LinegraphPoint {
  x: number;
  y: number;
  k: number;
}

export interface HistogramPoint {
  start: number;
  end: number;
  height: number;
  highlighted: boolean;
}

export interface CpStatsLeetcode {
  userData: UserData;
  linegraphPoints: LinegraphPoint[];
  histogramBars: HistogramPoint[];
}

