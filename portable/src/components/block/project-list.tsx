import { ProjectCard } from "@components/kit/project-card";
import { Container } from "@components/ui/structure/container";
import { Text } from "@components/ui/text/text";
import { useProjects } from "@contexts/projects";
import { useClasses } from "@styles";

export function ProjectList() {
  const { ready, repoData } = useProjects()

  return (
    <Container className={useClasses("project-list")}>
      {!ready && (
        <Text>Loading projects...</Text>
      )}

      {ready && repoData.length === 0 && (
        <Text>No projects found.</Text>
      )}

      {ready && repoData.length > 0 && (repoData.map((repo) => (
        <ProjectCard
          key={repo.url}
          projectData={repo}
        />
      )))}
    </Container>
  );
}

