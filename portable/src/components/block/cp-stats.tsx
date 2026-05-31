import { LineGraph } from "@components/block/line-graph";
import { Linklet } from "@components/kit/linklet";
import { Section } from "@components/kit/section";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { useCpStats } from "@contexts/cp-stats";
import { useClasses } from "@styles";

export function CpStats() {
  const {
    userData,
    linegraph,
  } = useCpStats();

  return (
    <Section>
      <Heading size="large">
        My LeetCode Grind
      </Heading>

      <Container className={useClasses("cp-stats-leetcode")}>
        <Linklet
          title="Stalk me on LeetCode!"
          icon="MedalRegular"
          url="https://leetcode.com/attaditya"
        />

        <Container className={useClasses("cp-stats-leetcode-summary")}>
          <Container className={useClasses("cp-stats-leetcode-summary-content")}>
            <Heading size="small">
              Contests
            </Heading>

            <Heading size="large">
              {linegraph.length}
            </Heading>
          </Container>

          <Container className={useClasses("cp-stats-leetcode-summary-content")}>
            <Heading size="small">
              Rating
            </Heading>

            <Heading size="large">
              {userData.rating}
            </Heading>
          </Container>

          <Container className={useClasses("cp-stats-leetcode-summary-content")}>
            <Heading size="small">
              Rank
            </Heading>

            <Heading size="large">
              {userData.badge}
            </Heading>
          </Container>
        </Container>

        <LineGraph title="Contest Performance" points={linegraph} />
      </Container>
    </Section>
  );
}

