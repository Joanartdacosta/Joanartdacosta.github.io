import React from "react";
import { useState } from "react";
import CommonSkills from "./CommonSkills";

function ExperienceCodingSkills() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleSeeMore() {
    setModalIsOpen(true);
  }

  function handleClose() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className="coding-skills">
        <h3 className="coding-question">
          Now, you think - how can this could relate with coding?
        </h3>
        <img
          className="coding-icon"
          src="https://joana-personal-website.s3.eu-central-1.amazonaws.com/icons/352330_expand_more_icon.png"
          alt="more-info"
          onClick={handleSeeMore}
        />{" "}
      </div>
      {modalIsOpen && (
        <CommonSkills
          className="common-coding-skills-list"
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default ExperienceCodingSkills;
