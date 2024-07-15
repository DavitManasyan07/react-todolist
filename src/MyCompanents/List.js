import React from "react";

export default class List extends React.Component {
  constructor(...props) {
    super(...props);
  }
  render() {
    let cout = 0;
    return (
      <div className="list">
        {this.props.list.map((element) => {
          cout++;
          if (
            (this.props.all || this.props.completed === element.select) &&
            element.dontSearch
          ) {
            return (
              <div key={`b0${cout}`} className="listElment">
                <button
                  id={`b1${cout}`}
                  className="completedBtn"
                  onClick={this.props.onclickLB}
                  style={
                    element.select ? { color: "green" } : { color: "white" }
                  }
                >
                  &#10004;
                </button>
                <input
                  onKeyDown={(el) => {
                    if (el.code === "Enter") {
                      this.props.onEditF();
                    }
                  }}
                  onChange={this.props.onchange}
                  type={element.edit ? "text" : "button"}
                  id={`b2${cout}`}
                  value={element.value}
                  className={`listBtn ${element.select ? "text" : ""}`}
                  onDoubleClick={this.props.onDbClk}
                ></input>
                <button
                  className="removeBtn fa fa-trash-o"
                  id={`b3${cout}`}
                  onClick={this.props.onclickRM}
                ></button>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
