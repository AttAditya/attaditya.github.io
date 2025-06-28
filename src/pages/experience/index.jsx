import { useCallback, useEffect, useState } from "react";

import { supabase } from "../../api";

import { Blob } from "../../components/blob";
import { Stats } from "../../components/stats";
import { ExperienceCard } from "./card";


import "./style.css";

export function ExperiencePage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [experienceMonths, setExperienceMonths] = useState(null);
  const [experienceDomains, setExperienceDomains] = useState(null);
  const [companyCount, setCompanyCount] = useState(null);

  const findMonths = useCallback((exp) => {
    const { start, end, professional } = exp;
    if (!professional) return 0;
    
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();

    const months = (
      endDate.getFullYear() - startDate.getFullYear()
    ) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
    
    return months;
  }, []);

  const setPageData = useCallback((data, xpM, xpD, xpC) => {
    setExperienceMonths(xpM);
    setExperienceDomains(xpD);
    setCompanyCount(xpC);
    setData(data);
    setLoading(false);
  }, []);

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
      let fetchedData = await supabase.from("experience").select("*");
      const stats = fetchedData.data || [];

      stats.sort((a, b) => {
        return new Date(b.start) - new Date(a.start);
      });

      const xpM = stats.reduce(
        (acc, exp) => findMonths(exp) + acc, 0
      );

      const xpD = new Set(stats.reduce(
        (acc, exp) => ([
          ...exp.tags.domains,
          ...acc,
        ]), []
      )).size;

      const xpC = new Set(stats.reduce(
        (acc, exp) => ([
          exp.company,
          ...acc,
        ]), []
      )).size;

      setPageData(stats, xpM, xpD, xpC);
    };

    fetchData();
  }, [loading, findMonths, setPageData]);

  if (loading || data === null) return null;

  const statsData = {
    cols: [
      {
        rows: [
          {
            element: {
              stat: experienceMonths > 12
                ? (experienceMonths / 12).toFixed(1)
                : experienceMonths,
              desc: experienceMonths > 12
                ? "years of experience"
                : "months of experience"
            }
          }
        ],
      },
      {
        rows: [
          {
            element: {
              stat: experienceDomains,
              desc: "domains"
            }
          },
          {
            element: {
              stat: companyCount,
              desc: "companies"
            }
          }
        ]
      }
    ]
  };

  return (<>
    <div className="experience-page">
      <div className="experience-page-background">
        <Blob />
      </div>
      <div className="experience-page-content">
        <div className="experience-details">
          <h1 className="experience-page-title">
            Experience
          </h1>

          <div className="experience-content">
            <Stats stats={statsData} />

            <div className="experience-list">
              {
                data.map(experience => <ExperienceCard
                  key={experience.id}
                  experience={experience}
                />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}
