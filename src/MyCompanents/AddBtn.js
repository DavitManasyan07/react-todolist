export default function Add(props) {
  return (
    <button
      className="addBtn"
      onClick={() => {
        props.onClickAdd();
      }}
    >
      Add
    </button>
  );
}
