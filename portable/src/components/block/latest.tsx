import { Linklet } from "@components/kit/linklet";
import { Section } from "@components/kit/section";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { LATEST } from "@registry/latest";
import { useClasses } from "@styles";

export function Latest() {
  return (
    <Section className={useClasses("latest")}>
      <Heading size="medium">
        Latest Frankensteins I've been building!
      </Heading>

      <Container className={useClasses("latest-linklets")}>
        {LATEST.map((project, index) => (
          <Linklet
            key={index}
            icon={project.icon}
            url={project.url}
            title={project.title}
          />
        ))}
      </Container>

      <Linklet
        icon="BbqRegular"
        url="/projects"
        newTab={false}
        title="See all projects"
      />
    </Section>
  )
}

