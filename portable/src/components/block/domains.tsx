import { Section } from "@components/kit/section";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { useClasses } from "@styles";

export function Domains() {
  return (
    <Section className={useClasses("domains")}>
      <Heading size="large">
        Domains I Care About
      </Heading>

      <Container className={useClasses("domain-canvas")}>
        <Container className={useClasses("domain-circle")}>
          Developer Tools
        </Container>

        <Container className={useClasses("domain-circle")}>
          Frontend Tech
        </Container>

        <Container className={useClasses("domain-circle")}>
          Compiler Design
        </Container>
      </Container>
    </Section>
  );
}

