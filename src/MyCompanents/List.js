export default function List(props) {
  return (
    <div className="list">
      {props.list.map((element) => {
        if (
          (props.all || props.completed === element.done)
        ) {
          return (
            <div key={element.id} className="listElment">
              <button
                id={element.id}
                className="completedBtn"
                onClick={props.onclickLB}
                style={element.done ? { color: "green" } : { color: "white" }}
              >
                &#10004;
              </button>
              <input
                type="button"
                id={element.id}
                value={element.value}
                className={`listBtn ${element.done ? "text" : ""}`}
              ></input>
              <button
                className="removeBtn fa fa-trash-o"
                id={element.id}
                onClick={props.onclickRM}
              ></button>
            </div>
          );
        }
      })}
    </div>
  );
}
