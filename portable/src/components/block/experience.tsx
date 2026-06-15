import { PizzaSliceRegular } from "@attaditya/iconoir-preact";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

interface ExperienceProps {
  contributions: string[];
  company: string;

  role: {
    name: string;
    type: string;
  };
}

export function Experience({
  role,
  company,
  contributions,
}: ExperienceProps) {
  return (
    <Container className={useClasses("experience")}>
      <Container className={useClasses("experience-grid")}>
        <Container className={useClasses("experience-column")}>
          <Container className={useClasses("experience-role")}>
            <Heading size="medium">
              {role.name}
            </Heading>

            <Heading size="small">
              {role.type}
            </Heading>
          </Container>

          <Container className={useClasses("experience-company")}>
            <Heading size="large">
              {company}
            </Heading>
          </Container>
        </Container>

        <Container className={useClasses("experience-column")}>
          <Container className={useClasses("experience-contributions")}>
            {contributions.map(contribution => (
              <Text
              className={useClasses("experience-contribution")}
              key={contribution}
              >
                {contribution}
              </Text>
            ))}
          </Container>
        </Container>
      </Container>

      <Text className={useClasses("experience-separator")}>
        {"-".repeat(1000)}
        <PizzaSliceRegular
          className={useClasses("experience-separator-icon")}
        />

        {"-".repeat(1000)}
      </Text>
    </Container>
  );
}

