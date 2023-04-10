import React from "react";
import volunteers from "./volunteers";
import CardVolunteer from "./CardVolunteer";

function createCard(volunteer) {
  return <CardVolunteer name={volunteer.name} imgURL={volunteer.imgURL} />;
}

function VolunteerSlides() {
  return (
    <div className="volunteer-gallery">
      {volunteers.map((volunteer) => createCard(volunteer))}
    </div>
  );
}

export default VolunteerSlides;
