import React from "react";
import codingskills from "./arrays/codingskills";
import responsibilities from "./arrays/responsibilties";
import CreateCardResponsibility from "./CreateCardResponsibility";
import createCardSkills from "./CreateCardSkills";

function ExperienceResponsibilities() {
  return (
    <>
      <div>
        <p>
          <strong>My responsibilities included:</strong>
        </p>
        <p>{responsibilities.map(CreateCardResponsibility)}</p>
        {responsibilities.description}
        <br />
      </div>
      <div>
        <h3>Now, you think - how can this could relate with coding?</h3>
        <p>{codingskills.map(createCardSkills)}</p>
        {codingskills.description}
      </div>
    </>
  );
}

export default ExperienceResponsibilities;
