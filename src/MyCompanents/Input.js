export default function Input(props) {
  return (
    <input
      className="todoInp"
      value={props.inpValue}
      onKeyDown={(el) => {
        if (el.code === "Enter") {
          props.onClickAdd();
        }
      }}
      onChange={props.onchange}
    ></input>
  );
}

 