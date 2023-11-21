import React from "react";
import CardSchool from "./CardSchool";
import "../skills.css";
import SCHOOLS from "./schools";

function createCard(school) {
  return (
    <div className="skills-education-card">
      <CardSchool
        key={school.id}
        imgURL={school.imgURL}
        course={school.course}
        school={school.school}
        year={school.year}
      />
    </div>
  );
}

function EducationList() {
  return <div className="education-list w-full">{SCHOOLS.map(createCard)}</div>;
}

export default EducationList;
