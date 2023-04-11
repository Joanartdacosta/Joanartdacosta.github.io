import React from "react";
import Card from "../../components/card/Card";

function CreateCardResponsibility(responsibility) {
  return (
    <div className="experience-responsibilities">
      <div className="experience-responsibility">
        <Card
          key={responsibility.id}
          description={responsibility.description}
        />
      </div>
    </div>
  );
}

export default CreateCardResponsibility;
