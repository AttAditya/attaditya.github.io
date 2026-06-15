import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { useClasses } from "@styles";

interface LineGraphProps {
  title?: string;

  points: {
    x: number;
    y: number;
    k: number;
  }[];
}

export function LineGraph({ title, points }: LineGraphProps) {
  return (
    <Container className={useClasses("line-graph")}>
      <Heading size="medium">
        {title}
      </Heading>

      <Container className={useClasses("line-graph-points")}>
        {points.map((point) => (
          <Container
          key={point.x}
          className={useClasses("line-graph-point")}

          attributes={{
            "data-x": point.x.toString(),
            "data-y": point.y.toString(),
            "data-k": point.k.toString(),
          }}
          >
            <Container
              className={useClasses(
                "line-graph-point-tooltip",
                "no-scrollpop",
              )}
            >
              {point.k}
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  );
}

