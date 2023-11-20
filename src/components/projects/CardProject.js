import React from "react";

export default function CardProject(props) {
  return (
    <div className="card-project m-t-2">
      <div key={props.id}>
        <img
          className="card-project-image"
          src={props.imgUrl}
          alt={props.title}
        />
      </div>

      <div>
        <div className="m-b-5 m-t-5">
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
        <div>
          <a href={props.href}>
            {" "}
            <button className="button-black-2 float-right m-t-5">
              Website
            </button>
          </a>
          />
        </div>
      </div>
    </div>
  );
}
