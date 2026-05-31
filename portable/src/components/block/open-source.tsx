import { OpenSourceCard } from "@components/kit/open-source-card";
import { Section } from "@components/kit/section";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { OPEN_SOURCES } from "@registry/open-source";
import { useClasses } from "@styles";

export function OpenSource() {
  const openSources = OPEN_SOURCES;

  return (
    <Section>
      <Heading size="large">
        Contributions I made to the open world!
      </Heading>

      <Container className={useClasses("open-source-list")}>
        {openSources.map((source) => (
          <OpenSourceCard
            key={source.title}
            icon={source.icon as any}
            title={source.title}
            info={source.info}
            mine={source.mine}
            dist={source.dist}
            repo={source.repo}
            fork={source.fork}
            animation={source.animation}
          />
        ))}
      </Container>
    </Section>
  );
}

