import { Bbq } from "@attaditya/iconoir-preact";
import { Linklet } from "@components/kit/linklet";
import { Section } from "@components/kit/section";
import { Button } from "@components/ui/interactive/button";
import { Link } from "@components/ui/interactive/link";
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
          icon="LaptopDevModeRegular"
          url="https://pypi.org/project/gsam"
          title="GSAM"
        />

        <Linklet
          icon="SparksRegular"
          url="https://pypi.org/project/cutypy"
          title="CutyPy"
        />

        <Linklet
          icon="PuzzleRegular"
          url="https://pypi.org/project/langex"
          title="LangEx"
        />
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

