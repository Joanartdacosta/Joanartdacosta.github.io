import React from "react";
import createCardJob from "./CreateCardJob";
import JOBS from "./jobs";

function ExperienceJob() {
  return (
    <div>
      <div>{JOBS.map(createCardJob)}</div>
    </div>
  );
}

export default ExperienceJob;
