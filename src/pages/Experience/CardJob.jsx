import React from "react";

function CardJob(props) {
  return (
    <div className="experience-job-card">
      <img className="experience-job-img" src={props.imgURL} alt="icons" />
      <div className="experience-job-infos">
        <p className="experience-job-info">{props.position}</p>
        <p className="experience-job-info">{props.name}</p>
        <p className="experience-job-info">{props.time}</p>
      </div>
    </div>
  );
}

export default CardJob;
