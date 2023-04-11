import React from "react";
import Card from "../../components/card/Card";

function createCardSkills(codingskill) {
  return (
    <div className="coding-skills">
      <div className="coding-skill">
        <Card
          key={codingskill.id}
          name={codingskill.name}
          description={codingskill.description}
        />
      </div>
    </div>
  );
}

export default createCardSkills;
