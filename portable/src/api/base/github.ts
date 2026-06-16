import { ApiCaller } from "@api/base/api-caller";

export const githubCaller = new ApiCaller({
  baseApiUrl: "https://api.github.com",
  lsCached: true,
  lsCacheTTL: 1000 * 60 * 60 * 24,
})

