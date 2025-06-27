import { useEffect, useState } from "react";

import { supabase } from "../../api";

import { Blob } from "../../components/blob";
import { ExperienceCard } from "./card";
import { ExperienceStats } from "./stats";

import "./style.css";

export function ExperiencePage() {
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
      let fetchedData = await supabase.from("experience").select("*");
      fetchedData = fetchedData.data || [];
      fetchedData.sort((a, b) => {
        return new Date(b.start) - new Date(a.start);
      });

      setData(fetchedData);
      setLoading(false);
    };

    fetchData();
  }, [loading]);

  if (loading || data === null) return null;

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
            <ExperienceStats stats={data} />

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
