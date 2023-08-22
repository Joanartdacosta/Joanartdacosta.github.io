import React from "react";
import Card from "../../card/Card";

function createCardSkills(codingskill) {
  return (
    <div className="coding-skill">
      <Card
        key={codingskill.id}
        name={codingskill.name}
        description={codingskill.description}
      />
    </div>
  );
}

export default createCardSkills;
