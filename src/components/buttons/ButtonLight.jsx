export default function ButtonLight(props) {
  if (props.href) {
    return (
      <button href={props.href} className="button button-light cursor-pointer">
        {props.label}
      </button>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className="button button-light cursor-pointer"
    >
      {props.label}
    </button>
  );
}
