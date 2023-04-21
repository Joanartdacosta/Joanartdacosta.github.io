import React from "react";
import codingskills from "./arrays/codingskills";
import createCardSkills from "./CreateCardSkills";

function ExperienceCodingSkills() {
  return (
    <div>
      <h3>Now, you think - how can this could relate with coding?</h3>
      <div className="description-font">
        {codingskills.map(createCardSkills)}
        {codingskills.description}{" "}
      </div>
    </div>
  );
}

export default ExperienceCodingSkills;
