import { useEffect, useState } from "react";
import { leetstats } from "../../api";

import { Blob } from "../../components/blob";
import { Stats } from "../../components/stats";

import "./style.css";
import { Glass } from "../../components/glass";

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
              stat: (
                <div key={"Rating Histogram"} style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                  gap: "0.5vw",
                }}>
                  {
                    data.contestRatingHistogram.map(
                      (bin) => (
                        <Glass
                          key={bin.ratingStart}
                          style={{
                            width: `${(
                              40 / (
                                data.contestRatingHistogram.length
                              )
                            )}vw`,
                            height:
                            `${15 * (bin.userCount / (
                              data.contestRatingHistogram.reduce(
                                (a, b) => Math.max(
                                  a,
                                  b.userCount
                                ), 0
                              ))
                            )}rem`,
                            color:
                              (
                                bin.ratingEnd > data.userContestRanking.rating
                                && bin.ratingStart < data.userContestRanking.rating
                              )
                                ? "var(--accent-green)"
                                : undefined,
                            backgroundColor: "currentColor",
                            borderRadius: "0.5vw",
                            boxShadow: "none",
                            marginTop: "1rem",
                            opacity: (
                              bin.ratingEnd > data.userContestRanking.rating
                              && bin.ratingStart < data.userContestRanking.rating
                            )
                              ? "100%"
                              : "40%",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.opacity = "100%";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.opacity = (
                              bin.ratingEnd > data.userContestRanking.rating
                              && bin.ratingStart < data.userContestRanking.rating
                            )
                              ? "100%"
                              : "50%";
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              bottom: "calc(100% + 1rem)",
                              left: "50%",
                              transform: "translateX(-50%) rotate(-30deg)",
                              fontSize: "0.75rem",
                              color: "inherit",
                              textShadow: "0 0 0.5rem black",
                              fontWeight: (
                                bin.ratingEnd > data.userContestRanking.rating
                                && bin.ratingStart < data.userContestRanking.rating
                              )
                                ? "800"
                                : undefined,
                              zIndex: (
                                bin.ratingEnd > data.userContestRanking.rating
                                && bin.ratingStart < data.userContestRanking.rating
                              )
                                ? 5
                                : undefined,
                            }}
                          >
                            {bin.ratingStart}
                          </span>
                        </Glass>
                      )
                    )
                  }
                </div>
              ),
              desc: "Ranking Graph",
            }
          }
        ]
      },
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
            LeetCode
          </h1>

          <div className="competitive-programming-stats">
            <Stats stats={cpStats} />
          </div>
        </div>
      </div>
    </div>
  </>);
}
