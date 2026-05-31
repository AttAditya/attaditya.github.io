import { CareerHistory } from "@components/block/career-history";
import { CpStats } from "@components/block/cp-stats";
import { Domains } from "@components/block/domains";
import { EducationHistory } from "@components/block/education";
import { Hero } from "@components/block/hero";
import { Latest } from "@components/block/latest";
import { OpenSource } from "@components/block/open-source";
import { ScrollPop } from "@components/kit/scrollpop";
import { CpStatsProvider } from "@contexts/cp-stats";

export function HomeView() {
  return (
    <ScrollPop>
      <Hero />
      <Latest />
      <Domains />
      <OpenSource />
      <CpStatsProvider>
        <CpStats />
      </CpStatsProvider>

      <CareerHistory />
      <EducationHistory />
    </ScrollPop>
  );
}

