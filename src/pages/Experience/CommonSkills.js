import React from "react";
import codingskills from "./arrays/codingskills";
import createCardSkills from "./CreateCardSkills";

export default function CommonSkills() {
  return (
    <div>
      {codingskills.map(createCardSkills)}
      {codingskills.description}
    </div>
  );
}
