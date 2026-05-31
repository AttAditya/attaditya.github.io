import { Linklet } from "@components/kit/linklet";
import { Section } from "@components/kit/section";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { useClasses } from "@styles";

export function Latest() {
  return (
    <Section className={useClasses("latest")}>
      <Heading size="medium">
        Latest Frankensteins I've been building!
      </Heading>

      <Container className={useClasses("latest-linklets")}>
        <Linklet
          icon="SparksRegular"
          url="https://github.com/AttAditya/CutyPy"
          title="CutyPy"
        />

        <Linklet
          icon="PuzzleRegular"
          url="https://github.com/AttAditya/LangEx"
          title="LangEx"
        />

        <Linklet
          icon="LaptopDevModeRegular"
          url="https://github.com/AttAditya/Pilot"
          title="Pilot"
        />
      </Container>
    </Section>
  )
}

