import React from "react";
import codingskills from "./arrays/codingskills";
import responsibilities from "./arrays/responsibilties";
import CreateCardResponsibility from "./CreateCardExperience";
import createCardSkills from "./CreateCardSkills";

function ExperienceResponsibilities() {
  return (
    <div>
      <p>My responsibilities included:</p>
      <div className="experience-responsibilities">
        {responsibilities.map(CreateCardResponsibility)}
        <h3>{responsibilities.name}</h3>
        <p>{responsibilities.description}</p>
      </div>

      <h3>Now, you think - how can this could relate with coding?</h3>

      <div className="coding-skills">
        {codingskills.map(createCardSkills)}
        <p>{codingskills.name}</p>
        <br />
        <p>{codingskills.description}</p>
      </div>
    </div>
  );
}

export default ExperienceResponsibilities;
