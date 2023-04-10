import jobs from "./jobs";
import React from "react";
import CardJob from "./CardJob";

function createCard(job) {
  return (
    <CardJob
      key={job.id}
      imgURL={job.imgURL}
      position={job.position}
      name={job.name}
      time={job.time}
    />
  );
}

function ExperienceJob() {
  return (
    <div>
      <div>{jobs.map(createCard)}</div>
    </div>
  );
}

export default ExperienceJob;
