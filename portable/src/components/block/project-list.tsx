import { Linklet } from "@components/kit/linklet";
import { Button } from "@components/ui/interactive/button";
import { Link } from "@components/ui/interactive/link";
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
        <Link
          key={repo.name}
          url={repo.url}
        >
          <Button>
            {repo.name}
          </Button>
        </Link>
      )))}
    </Container>
  );
}

