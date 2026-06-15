import { Search } from "@attaditya/iconoir-preact";
import { Section } from "@components/kit/section";
import { Input } from "@components/ui/interactive/input";
import { Container } from "@components/ui/structure/container";
import { Text } from "@components/ui/text/text";
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

      <Container>
        <Text>
          This Project is under construction. Please check back later for
          updates on my projects and work experience.
        </Text>
      </Container>
    </Section>
  );
}

