import { useCallback, useContext, useEffect, useState } from "preact/hooks";
import { ComponentChildren, createContext } from "preact";

import { getRepoList } from "@api/projects";
import { transformRepositoryList } from "@transformers/projects";

interface ProjectsMeta {
  ready: boolean;
}

function createProjectsContext() {
  const ProjectsContext = createContext<ProjectsMeta | null>(null);

  function ProjectsProvider({ children }: { children: ComponentChildren }) {
    const [ready, setReady] = useState(false);
    const [repoData, setRepoData] = useState<any>(null);

    const loadRepositories = useCallback(async () => {
      const rawRepoList = await getRepoList();
      const repoList = transformRepositoryList(rawRepoList);
      setRepoData(repoList);
      setReady(true);
    }, [getRepoList]);

    useEffect(() => {
      loadRepositories();
    }, []);

    const value = {
      ready,
    };

    return <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  }

  function useProjects(): ProjectsMeta {
    return useContext(ProjectsContext)!;
  }

  return { useProjects, ProjectsProvider };
}

export const {
  useProjects,
  ProjectsProvider,
} = createProjectsContext();

