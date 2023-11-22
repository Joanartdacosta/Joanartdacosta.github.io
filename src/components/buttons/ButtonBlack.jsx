import { HashLink } from "react-router-hash-link";

export default function ButtonBlack(props) {
  if (props.href) {
    return (
      <HashLink to={props.href} key={props.id}>
        <button className="button-black cursor-pointer md:button-width">
          {" "}
          {props.label}
        </button>
      </HashLink>
    );
  }

  return (
    <button onClick={props.onClick} className="button-black cursor-pointer ">
      {props.label}
    </button>
  );
}
