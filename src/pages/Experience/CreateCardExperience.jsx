import React from "react";
import Card from "../../components/card/Card";

function CreateCardResponsibility(responsibility) {
  return (
    <Card key={responsibility.id} description={responsibility.description} />
  );
}

export default CreateCardResponsibility;
