import { cpStatsLeetcode } from "@api/cp-stats";

export const APIS: {
  [apiId: string]: {
    caller: () => unknown;
  };
} = {
  "cpStatLeetcode": {
    caller: cpStatsLeetcode,
  }
}

