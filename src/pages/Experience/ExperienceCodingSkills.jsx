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
      <div className="common-coding-skills">
        <h3>Now, you think - how can this could relate with coding?</h3>
        <div className="common-coding-list">
          <img
            className="coding-icon"
            src="https://joana-personal-website.s3.eu-central-1.amazonaws.com/icons/352330_expand_more_icon.png"
            alt="more-info"
            onClick={handleSeeMore}
          />
          {modalIsOpen && <CommonSkills onClose={handleClose} />}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCodingSkills;
