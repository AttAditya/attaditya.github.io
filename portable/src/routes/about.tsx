import { CareerHistory } from "@components/block/career-history";
import { CpStats } from "@components/block/cp-stats";
import { Domains } from "@components/block/domains";
import { EducationHistory } from "@components/block/education";
import { Hero } from "@components/block/hero";
import { OpenSource } from "@components/block/open-source";
import { Section } from "@components/kit/section";
import { Button } from "@components/ui/interactive/button";
import { Link } from "@components/ui/interactive/link";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { ErrorView } from "@components/view/not-found-view";
import { CpStatsProvider } from "@contexts/cp-stats";
import { useClasses } from "@styles";
import { LayoutProps, PageProps, useRouter } from "@utils/router";

function Layout({ forwarded, dynamic, children }: LayoutProps) {
  const path = `about/${dynamic}/${forwarded?.join('/')}`;

  return <>
    <Container className={useClasses("projects-view")}>
      {!!children && (<>
        <Section children={null} />
        {children}
      </>)}

      {!!dynamic && <ErrorView
        code={404}
        message={`Can't reach: ${path}`}
      />}

      {(!children && !dynamic) && (<>
        <Hero />
        <Section>
          <Heading size="medium">
            Check Out:
          </Heading>

          <Container className={useClasses("socials-linklets")}>
            <Link url="/about/domains">
              <Button>
                Domains
              </Button>
            </Link>

            <Link url="/about/open-source">
              <Button>
                Open-source
              </Button>
            </Link>

            <Link url="/about/career">
              <Button>
                Career
              </Button>
            </Link>

            <Link url="/about/education">
              <Button>
                Education
              </Button>
            </Link>

            <Link url="/about/leetcode">
              <Button>
                Leetcode
              </Button>
            </Link>
          </Container>
        </Section>
      </>)}
    </Container>
  </>;
}

function LeetCode() {
  return <CpStatsProvider>
    <CpStats />
  </CpStatsProvider>
}

export function AboutPage({ forwarded } : PageProps) {
  return useRouter(forwarded, Layout, {
    "domains": Domains,
    "open-source": OpenSource,
    "career": CareerHistory,
    "education": EducationHistory,
    "leetcode": LeetCode,
  });
}

