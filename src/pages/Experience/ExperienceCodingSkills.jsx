import React from "react";
import codingskills from "./arrays/codingskills";
import createCardSkills from "./CreateCardSkills";

function ExperienceCodingSkills() {
  return (
    <div>
      <h3>Now, you think - how can this could relate with coding?</h3>
      <p>{codingskills.map(createCardSkills)}</p>
      {codingskills.description}
    </div>
  );
}

export default ExperienceCodingSkills;
