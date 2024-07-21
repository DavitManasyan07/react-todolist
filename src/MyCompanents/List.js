export default function List(props) {
  let cout = 0;
  return (
    <div className="list">
      {props.list.map((element) => {
        cout++;
        if (
          (props.all || props.completed === element.select) &&
          element.dontSearch
        ) {
          return (
            <div key={`b0${cout}`} className="listElment">
              <button
                id={`b1${cout}`}
                className="completedBtn"
                onClick={props.onclickLB}
                style={element.select ? { color: "green" } : { color: "white" }}
              >
                &#10004;
              </button>
              <input
                onKeyDown={(el) => {
                  if (el.code === "Enter") {
                    props.onEditF();
                  }
                }}
                onChange={props.onchange}
                type="text"
                readOnly={!element.edit}
                id={`b2${cout}`}
                value={element.value}
                className={`listBtn ${element.select ? "text" : ""}`}
                onDoubleClick={props.onDbClk}
              ></input>
              <button
                className="removeBtn fa fa-trash-o"
                id={`b3${cout}`}
                onClick={props.onclickRM}
              ></button>
            </div>
          );
        }
      })}
    </div>
  );
}
