import { Search } from "@attaditya/iconoir-preact";
import { ProjectList } from "@components/block/project-list";
import { Section } from "@components/kit/section";
import { Input } from "@components/ui/interactive/input";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { ProjectsProvider } from "@contexts/projects";
import { useClasses } from "@styles";

export function ProjectsView() {
  return (
    <Section className={useClasses("projects-view")}>
      <Container className={useClasses("projects-search")}>
        <Input
          placeholder="Search projects..."
          leftChildren={<Search />}
        />
      </Container>

      <Heading
        size="large"
        className={useClasses("projects-heading")}
      >
        My Projects
      </Heading>

      <Container>
        <ProjectsProvider>
          <ProjectList />
        </ProjectsProvider>
      </Container>
    </Section>
  );
}

