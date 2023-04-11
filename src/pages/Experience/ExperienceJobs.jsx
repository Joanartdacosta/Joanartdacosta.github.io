import jobs from "./arrays/jobs";
import React from "react";
import createCardJob from "./CreateCardJob";

function ExperienceJob() {
  return (
    <div className="experience-jobs">
      <div>{jobs.map(createCardJob)}</div>
    </div>
  );
}

export default ExperienceJob;
