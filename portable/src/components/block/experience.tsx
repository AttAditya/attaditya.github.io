import * as iconoir from "@attaditya/iconoir-preact/regular";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { useClasses } from "@styles";

interface ExperienceProps {
  icon?: keyof typeof iconoir;
  company: string;
  startDate: Date;
  endDate: Date;

  role: {
    name: string;
    type: string;
  };

  contributions: string[];
}

export function Experience({
  icon,
  role,
  company,
  startDate,
  endDate,
}: ExperienceProps) {
  const Icon = icon ? iconoir[icon] : () => null;

  return (
    <Container className={useClasses("experience")}>
      <Icon className={useClasses("experience-icon")} />
      <Container className={useClasses("experience-grid")}>
        <Container className={useClasses("experience-column")}>
          <Container className={useClasses("experience-company")}>
            <Heading size="large">
              {company}
            </Heading>
          </Container>
        </Container>

        <Container className={useClasses("experience-column")}>
          <Container className={useClasses("experience-role")}>
            <Heading size="medium">
              {role.name}
            </Heading>

            <Heading size="small">
              {startDate.toLocaleString("default", { month: "short" })}{" "}
              {startDate.getFullYear()} -{" "}
              {endDate.toLocaleString("default", { month: "short" })}{" "}
              {endDate.getFullYear()}
            </Heading>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

