import { ApiCaller } from "@api/base/api-caller";

export const leetcodeCaller = new ApiCaller({
  proxied: true,
  lsCached: true,
  lsCacheTTL: 1000 * 60 * 60,
  baseApiUrl: "https://leetcode.com/graphql/",
  defaultHeaders: {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "",
    "baggage": [
      "sentry-environment=production",
      "sentry-release=88cba33d",
      "sentry-transaction=%2Fu%2F%5Busername%5D",
      "sentry-public_key=2a051f9838e2450fbdd5a77eb62cc83c",
      "sentry-trace_id=e8586f6560a649d19d58b6f56f73aaf9",
      "sentry-sample_rate=0.03",
    ].join(","),
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "random-uuid": "b0280a46-b6f4-6add-4d32-5f63254620e5",
    "sec-ch-ua": [
      "\"Chromium\";v=\"148\"",
      "\"Google Chrome\";v=\"148\"",
      "\"Not/A)Brand\";v=\"99\"",
    ].join(", "),
    "sec-ch-ua-arch": "\"arm\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version": "\"148.0.7778.179\"",
    "sec-ch-ua-full-version-list": [
      "\"Chromium\";v=\"148.0.7778.179\"",
      "\"Google Chrome\";v=\"148.0.7778.179\"",
      "\"Not/A)Brand\";v=\"99.0.0.0\"",
    ].join(", "),
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"macOS\"",

    "sec-ch-ua-platform-version": "\"26.5.0\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sentry-trace": "e8586f6560a649d19d58b6f56f73aaf9-bb3f0fab0f1af1ee-1",
    "x-csrftoken": "8qhv20rKrD1vbk2dkawX27WVq2A8pqQY",
    "x-operation-name": "userContestRankingInfo"
  },
  referrer: "https://leetcode.com/u/attaditya/",
  mode: "cors",
  credentials: "include"
})

export async function queryLeetcode(
  variables: { [key: string]: unknown },
  query: string
) {
  return leetcodeCaller.callApi(
    "", "POST", JSON.stringify({ variables, query })
  );
}

