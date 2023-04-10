import React from "react";
import codingskills from "./codingskills";
import responsibilities from "./responsibilties";
import Card from "../../components/card/Card";

function createCard(codingskill) {
  return (
    <Card
      key={codingskill.id}
      name={codingskill.name}
      description={codingskill.description}
    />
  );
}

function createCardR(responsibility) {
  return (
    <Card key={responsibility.id} description={responsibility.description} />
  );
}

function ExperienceResponsibilities() {
  return (
    <div>
      <div className="experience-responsibilities">
        <div>
          <p>My responsibilities included:</p>

          {responsibilities.map(createCardR)}
          <p>{responsibilities.name}</p>
          <p>{responsibilities.description}</p>

          <h3>Now, you think - how can this could relate with coding?</h3>

          {codingskills.map(createCard)}
          <p>{codingskills.name}</p>
          <p>{codingskills.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceResponsibilities;
