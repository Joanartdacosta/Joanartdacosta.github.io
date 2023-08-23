import React from "react";
import CardSchool from "./CardSchool";
import "../../..//pages/SKills/skills.css";
import SCHOOLS from "./schools";

function createCard(school) {
  return (
    <div class="skills-education-card">
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
  return (
    <div className="skills-education-total">{SCHOOLS.map(createCard)}</div>
  );
}

export default EducationList;
