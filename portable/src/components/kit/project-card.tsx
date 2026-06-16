import { useCallback } from "preact/hooks";

import * as iconoir from "@attaditya/iconoir-preact/regular";
import { Button } from "@components/ui/interactive/button";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { RepoData } from "@interfaces/projects";
import { useClasses } from "@styles";

interface ProjectCardProps {
  projectData: RepoData;
}

export function ProjectCard({
  projectData
}: ProjectCardProps) {
  const IconComponent = iconoir["GithubRegular"];

  const openLink = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  return (
    <Container className={useClasses("project-card")}>
      <Container className={useClasses("project-card-icon")}>
        <IconComponent />
      </Container>

      <Container className={useClasses("project-card-content")}>
        <Container className={useClasses("project-card-meta")}>
          <Container className={useClasses("project-card-repo")}>
            <Text className={useClasses("project-card-repo-text")}>
              {projectData.author} / {projectData.name}
            </Text>
          </Container>

          <Heading
            className={useClasses("project-card-title")}
            size="medium"
          >
            {projectData.name}
          </Heading>

          <Container className={useClasses("project-card-description")}>
            <Text className={useClasses("project-card-info")}>
              {projectData.description}
            </Text>
          </Container>
        </Container>

        <Container className={useClasses("project-card-actions")}>
          <Button onClick={() => openLink(
            `https://github.com/${projectData.author}/${projectData.name}`
          )}>
            Check Repo
          </Button>

          {!!projectData.url && (
            <Button onClick={() => openLink(projectData.url!)}>
              Try It Out
            </Button>
          )}
        </Container>
      </Container>
    </Container>
  );
}

