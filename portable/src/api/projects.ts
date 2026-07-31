import { githubCaller } from "@api/base/github";

export async function getRepoList() {
  const users = [
    "attaditya",
    "attachment-studios",
  ];

  const orgs = [
    "GraphScript-Labs",
    "Berry-Foundations",
    "SyntLang",
    "Tullax",
    "TeamMedRush",
  ];

  const repoList: {
    [key: string]: unknown;
  }[] = [];

  for (const user of users) {
    const endpoint = `/users/${user}/repos?per_page=300`;
    const repos = await githubCaller.callApi(endpoint);
    repoList.push(...repos);
  }

  for (const org of orgs) {
    const endpoint = `/orgs/${org}/repos?per_page=300`;
    const repos = await githubCaller.callApi(endpoint);
    repoList.push(...repos);
  }

  return {
    data: repoList
  };
}

