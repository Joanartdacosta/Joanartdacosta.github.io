import React from "react";
import CardVolunteer from "./CardVolunteer";
import VOLUNTEERS from "./volunteers";

function createCard(volunteer) {
  return <CardVolunteer name={volunteer.name} imgURL={volunteer.imgURL} />;
}

function VolunteerSlides() {
  return (
    <div className="volunteer-gallery">
      {VOLUNTEERS.map((volunteer) => createCard(volunteer))}
    </div>
  );
}

export default VolunteerSlides;
