import { useEffect, useState } from "react";
import { leetstats } from "../../api";

import { Blob } from "../../components/blob";
import { Stats } from "../../components/stats";

import "./style.css";

export function CompetitiveProgrammingPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) setLoading(true);
  }, [data]);

  useEffect(() => {
    if (loading || data === null) {
      window.activateLoader();
    } else {
      window.deactivateLoader();
    }
  }, [loading, data]);

  useEffect(() => {
    if (!loading) return;
    const fetchData = async () => {
      let fetchedData = await leetstats.fetchStats();
      fetchedData = fetchedData.data || {};

      setData(fetchedData);
      setLoading(false);
    };

    fetchData();
  }, [loading]);
  
  if (loading || data === null) return null;

  const cpStats = {
    cols: [
      {
        rows: [
          {
            element: {
              stat: (data.userContestRanking.rating ?? 0).toFixed(2),
              desc: "LeetCode Rating"
            }
          },
          {
            element: {
              stat: <img
                src={[
                  "https://assets.leetcode.com/static_assets/others/",
                  data.userContestRanking.badge.name,
                  ".gif"
                ].join("")}
                alt={data.userContestRanking.badge.name}
                width={"30%"}
              />,
              desc: `${data.userContestRanking.badge.name} Level`
            }
          },
        ]
      },
      {
        rows: [
          {
            element: {
              stat: data.userContestRanking.globalRanking ?? 0,
              substat: `/ ${data.userContestRanking.totalParticipants ?? 0}`,
              desc: "Global Ranking"
            }
          },
          {
            element: {
              stat: `${data.userContestRanking.topPercentage ?? 0}%`,
              desc: "Top Percentage"
            }
          },
        ]
      }
    ]
  }

  return (<>
    <div className="competitive-programming-page">
      <div className="competitive-programming-page-background">
        <Blob />
      </div>
      
      <div className="competitive-programming-page-content">
        <div className="competitive-programming-details">
          <h1 className="competitive-programming-title">
            Competitive Programming
          </h1>

          <div className="competitive-programming-stats">
            <Stats stats={cpStats} />
          </div>
        </div>
      </div>
    </div>
  </>);
}
