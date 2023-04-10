import React from "react";
import volunteers from "./volunteers";
import CardVolunteer from "./CardVolunteer";

function createCard(volunteer) {
  return <CardVolunteer key={volunteer.id} img={volunteer.imgURL} />;
}

function VolunteerSlides() {
  return <div className="volunteer-gallery">{volunteers.map(createCard)}</div>;
}

//           src="../images/volunteer/1.png"
//           alt=""
//         ></img>
//       </div>
//       <div className="column">
//         <img
//           className="demo cursor volunteer-image"
//           src="../images/volunteer/2.jpg"
//           alt=""
//         ></img>
//       </div>
//       <div className="column">
//         <img
//           className="demo cursor volunteer-image"
//           src="../images/volunteer/3.jpg"
//           alt=""
//         ></img>
//       </div>
//       <div className="column">
//         <img
//           className="demo cursor volunteer-image"
//           src="../images/volunteer/4.jpg"
//           alt=""
//         ></img>
//       </div>
//       <div className="column">
//         <img
//           className="demo cursor volunteer-image"
//           src="../images/volunteer/5.jpg"
//           alt=""
//         ></img>
//       </div>
//       <div className="column">
//         <img
//           className="demo cursor volunteer-image"
//           src="../images/volunteer/6.png"
//           alt=""
//         ></img>
//       </div>
//     </>
//   );
// }

export default VolunteerSlides;
