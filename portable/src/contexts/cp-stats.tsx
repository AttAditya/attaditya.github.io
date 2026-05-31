import { useCallback, useContext, useEffect, useState } from "preact/hooks";
import { ComponentChildren, createContext } from "preact";

import { useData } from "@data/index";
import { HistogramPoint, LinegraphPoint, UserData } from "@interfaces/cp-stats";
import { transformCpStatsLeetcode } from "@transformers/cp-stats";

interface CpStatsMeta {
  ready: boolean;
  userData: UserData;
  linegraph: LinegraphPoint[];
  histogram: HistogramPoint[];
}

function createCpStatsContext() {
  const CpStatsContext = createContext<CpStatsMeta | null>(null);

  function CpStatsProvider({ children }: { children: ComponentChildren }) {
    const { dataDump, subscribe, refreshApi } = useData();
    const [subscribed, setSubscribed] = useState(false);
    const [ready, setReady] = useState(false);
    const [userData, setUserData] = useState<UserData>({
      rating: null,
      badge: null,
    });

    const [linegraph, setLinegraph] = useState<LinegraphPoint[]>([]);
    const [histogram, setHistogram] = useState<HistogramPoint[]>([]);
    const processData = useCallback(() => {
      const {
        userData,
        histogramBars,
        linegraphPoints,
      } = transformCpStatsLeetcode(
        dataDump["cpStatLeetcode"]
      );

      setReady(true);
      setUserData(userData);
      setLinegraph(linegraphPoints);
      setHistogram(histogramBars);
    }, [dataDump]);

    useEffect(() => {
      setSubscribed(true);
      const unsubscribe = subscribe(
        "cpStatLeetcode", () => processData()
      );

      return () => {
        setSubscribed(false);
        unsubscribe();
      };
    }, [processData, subscribe]);

    useEffect(() => {
      if (!subscribed) return;
      refreshApi("cpStatLeetcode");
    }, [subscribed]);

    const value = {
      ready,
      userData,
      linegraph,
      histogram,
    };

    return <CpStatsContext.Provider value={value}>
      {children}
    </CpStatsContext.Provider>
  }

  function useCpStats(): CpStatsMeta {
    return useContext(CpStatsContext)!;
  }

  return { useCpStats, CpStatsProvider };
}

export const {
  useCpStats,
  CpStatsProvider,
} = createCpStatsContext();

