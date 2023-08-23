import React from "react";
import CardJob from "./CardJob";

function createCardJob(job) {
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

export default createCardJob;
