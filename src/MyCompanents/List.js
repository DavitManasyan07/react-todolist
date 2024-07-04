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
          if (this.props.all || this.props.completed === element.select) {
            return (
              <div key={`b0${cout}`} className="listElment">
                <button
                  id={`b1${cout}`}
                  className={`listBtn ${element.select ? "text" : ""}`}
                  onClick={this.props.onclickLB}
                >
                  {element.value}
                </button>
                <button
                  className="removeBtn fa fa-trash-o"
                  id={`b2${cout}`}
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
