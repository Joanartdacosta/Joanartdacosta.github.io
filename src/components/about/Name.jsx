// import React, { useState } from "react";
// import Greeting from "./Greeting";
// import { Link } from "react-router-dom";

// function Name() {
//   const [isMousedOver, setMouseOver] = useState("false"),
//     [name, setName] = useState("");

//   function handleMouseOver() {
//     setMouseOver(true);
//   }

//   function handleMouseOut() {
//     setMouseOver(false);
//   }

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <div>
//       <h2 className="about-greeting-title">
//         <Greeting /> {name}
//       </h2>
//       <p>(Please insert your name in the section below)</p>
//       <form onSubmit={handleChange}>
//         <input
//           className="about-placeholder"
//           onChange={handleChange}
//           type="text"
//           placeholder="What's your name?"
//           value={name}
//         />

//         <Link to="/contacts">
//           <button
//             className={isMousedOver ? "backgroundOver" : "backgroundNoOver"}
//             onMouseOver={handleMouseOver}
//             onMouseOut={handleMouseOut}
//           >
//             Let's talk!
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default Name;
