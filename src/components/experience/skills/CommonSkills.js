import React from "react";

import createCardSkills from "./CreateCardSkills";
import CODING_SKILLS from "./codingskills";

export default function CommonSkills() {
  return (
    <div className="common-coding-skills-margin">
      {CODING_SKILLS.map(createCardSkills)}
      {CODING_SKILLS.description}
    </div>
  );
}
