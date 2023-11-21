export default function ButtonBlack(props) {
  if (props.href) {
    return (
      <button href={props.href} className="button-black">
        {props.label}
      </button>
    );
  }

  return (
    <button onClick={props.onClick} className="button-black">
      {props.label}
    </button>
  );
}
