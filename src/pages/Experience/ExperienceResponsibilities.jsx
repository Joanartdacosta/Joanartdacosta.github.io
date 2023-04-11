import React from "react";
import codingskills from "./arrays/codingskills";
import responsibilities from "./arrays/responsibilties";
import CreateCardResponsibility from "./CreateCardResponsibility";
import createCardSkills from "./CreateCardSkills";

function ExperienceResponsibilities() {
  return (
    <>
      <p>My responsibilities included:</p>
      {responsibilities.map(CreateCardResponsibility)}
      <p>
        {" "}
        {responsibilities.name} - {responsibilities.description}
      </p>
      <h3>Now, you think - how can this could relate with coding?</h3>
      {codingskills.map(createCardSkills)}
      {codingskills.name}
      {codingskills.description}
    </>
  );
}

export default ExperienceResponsibilities;
