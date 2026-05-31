import { Experience } from "@components/block/experience";
import { Section } from "@components/kit/section";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { EXPERIENCES } from "@registry/experiences";
import { useClasses } from "@styles";

export function CareerHistory() {
  const experiences = EXPERIENCES.sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  );

  return (
    <Section>
      <Heading size="large">
        Who's hired me before?
      </Heading>

      <Container className={useClasses("careers-list")}>
        {experiences.map(experience => (
          <Experience
            key={experience.company}
            company={experience.company}
            role={experience.role}
            contributions={experience.contributions}
          />
        ))}
      </Container>
    </Section>
  );
}

