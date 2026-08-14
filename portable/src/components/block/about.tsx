import { Section } from "@components/kit/section";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

export function About() {
  return (
    <Section>
      <Text className={useClasses("about-text")}>
        Software developer and builder who loves turning
        ideas into working products. I'm usually somewhere
        between writing code, breaking things, and figuring
        out how they work.
      </Text>
    </Section>
  )
}

