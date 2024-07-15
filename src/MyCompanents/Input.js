import React from "react";

export default class Input extends React.Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    return (
      <input
        className="todoInp"
        value={this.props.inpValue}
        onKeyDown={(el) => {
          if (el.code === "Enter") {
            this.props.onClickAdd();
          }
        }}
        onChange={this.props.onchange}
      ></input>
    );
  }
}
