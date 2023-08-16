import jobs from "./jobs";
import React from "react";
import createCardJob from "./CreateCardJob";

function ExperienceJob() {
  return (
    <div>
      <div>{jobs.map(createCardJob)}</div>
    </div>
  );
}

export default ExperienceJob;
