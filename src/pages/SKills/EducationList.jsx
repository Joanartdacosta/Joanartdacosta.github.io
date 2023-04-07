import schools from "./schools";
import React from "react";
import CardSchool from "./CardSchool";
import "../SKills/skills.css";

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
    <div className="skills-education-total">{schools.map(createCard)}</div>
  );
}

export default EducationList;
