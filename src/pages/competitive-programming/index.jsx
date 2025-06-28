import { useEffect, useState } from "react";
import { leetstats } from "../../api";

import { Blob } from "../../components/blob";
import { Stats } from "../../components/stats";
import { HistogramCard } from "../../components/cards/histogram/indes";
import { Glass } from "../../components/glass";

import "./style.css";
import { ExternalLink } from "lucide-react";

export function CompetitiveProgrammingPage() {
  const leetcodeUrl = "https://leetcode.com/attaditya/";

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

  const contestData = data.userContestRanking || {};
  const contestRating = contestData?.rating ?? 0;
  const contestRatingBadge = contestData?.badge?.name || "Unranked";
  const globalRanking = contestData?.globalRanking || 0;
  const ratingGraph = data.contestRatingHistogram || [];
  const topPercentage = contestData?.topPercentage || 0;
  const totalParticipants = contestData?.totalParticipants || 0;

  const cpStats = {
    cols: [
      {
        rows: [
          {
            element: {
              stat: <HistogramCard data={
                ratingGraph.map(bin => ({
                  count: bin.userCount,
                  start: bin.ratingStart,
                  end: bin.ratingEnd,
                  highlight: contestRating
                }))
              } />,
              desc: "Ranking Graph",
            }
          }
        ]
      },
      {
        rows: [
          {
            element: {
              stat: contestRating.toFixed(0),
              desc: "LeetCode Rating"
            }
          },
          {
            element: {
              stat: <img
                src={[
                  "https://assets.leetcode.com/static_assets/others/",
                  contestRatingBadge,
                  ".gif"
                ].join("")}
                alt={contestRatingBadge}
                width={"30%"}
              />,
              desc: `${contestRatingBadge} Level`
            }
          },
        ]
      },
      {
        rows: [
          {
            element: {
              stat: globalRanking ?? 0,
              substat: `/ ${totalParticipants}`,
              desc: "Global Ranking"
            }
          },
          {
            element: {
              stat: `${topPercentage.toFixed(2)}%`,
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
            LeetCode
          </h1>

          <a
            href={leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Glass className="competitive-programming-link">
              <span>
                View Profile on LeetCode
              </span>
              <ExternalLink className="icon" />
            </Glass>
          </a>

          <div className="competitive-programming-stats">
            <Stats stats={cpStats} />
          </div>
        </div>
      </div>
    </div>
  </>);
}
