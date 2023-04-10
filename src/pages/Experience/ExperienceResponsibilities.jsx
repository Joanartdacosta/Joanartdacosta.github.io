import React from "react";
import codingskills from "./arrays/codingskills";
import responsibilities from "./arrays/responsibilties";
import CreateCardResponsibility from "./CreateCardResponsibility";
import createCardSkills from "./CreateCardSkills";

function ExperienceResponsibilities() {
  return (
    <div>
      <p>My responsibilities included:</p>
      <div className="experience-responsibilities">
        {responsibilities.map(CreateCardResponsibility)}
        {responsibilities.name} - {responsibilities.description}
      </div>

      <h3>Now, you think - how can this could relate with coding?</h3>

      {codingskills.map(createCardSkills)}
      {codingskills.name}
      {codingskills.description}
    </div>
  );
}

export default ExperienceResponsibilities;
