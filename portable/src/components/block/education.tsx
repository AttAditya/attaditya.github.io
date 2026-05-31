import { EducationCard } from "@components/kit/education-card";
import { Container } from "@components/ui/structure/container";
import { LimitWidth } from "@components/ui/structure/limit-width";
import { Heading } from "@components/ui/text/heading";
import { EDUCATIONS } from "@registry/educations";
import { useClasses } from "@styles";

export function EducationHistory() {
  const educations = EDUCATIONS;

  return (
    <Container className={useClasses("education-history")}>
      <LimitWidth>
        <Heading
          className={useClasses("education-history-title")}
          size="large"
        >
          My Educational Journey
        </Heading>
      </LimitWidth>

      <Container className={useClasses("education-cards")}>
        {educations.map((education) => (
          <EducationCard
            key={education.title + education.degree}
            icon={education.icon as any}
            title={education.title}
            degree={education.degree}
            grade={education.grade}
          />
        ))}
      </Container>
    </Container>
  );
}

