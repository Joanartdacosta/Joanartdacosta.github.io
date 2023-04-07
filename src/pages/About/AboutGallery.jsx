import React from "react";
import urls from "./urls";

function AboutGallery() {
  return (
    <div>
      <div class="about-gallery">
        {/* <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/theatre.png)",
          }}
        >
          Acting
        </div> */}

        {urls.map((url) => (
          <div
            className="about-hobbies-category"
            style={{
              backgroundImage: url,
            }}
          >
            Acting
          </div>
        ))}

        {/* <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/dance.png)",
          }}
        >
          Dance
        </div>

        <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/cook.jpg)",
          }}
        >
          Cooking
        </div>

        <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/painting.jpg)",
          }}
        >
          Paiting
        </div>

        <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/travel.jpg)",
          }}
        >
          Travelling
        </div>

        <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/hiking.jpg)",
          }}
        >
          Hiking
        </div>

        <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/workout.png)",
          }}
        >
          Workout
        </div>

        <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/podcasts.png)",
          }}
        >
          Podcasts
        </div>

        <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/write.jpg)",
          }}
        >
          Writing
        </div>

        <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/gameboard.jpg)",
          }}
        >
          Gameboard
        </div>

        <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/standup.jpg)",
          }}
        ></div>

        <div
          className="about-hobbies-category"
          style={{
            backgroundImage: "url(../images/gallery/chocolate.jpg)",
          }}
        >
          Chocolate Lover
        </div> */}
      </div>
    </div>
  );
}

export default AboutGallery;
