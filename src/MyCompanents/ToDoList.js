import React from "react";
import List from "./List";
import Add from "./AddBtn";
import Input from "./Input";
import Select from "./Select";
import Clear from "./ClearBtn";

export default class ToDoList extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      list: [],
      value: "",
      all: true,
      completed: false,
    };
  }

  onClickAdd = () => {
    if (this.state.value !== "") {
      this.state.list.push({
        value: this.state.value,
        select: false,
      });
      this.setState({
        list: [...this.state.list],
        value: "",
      });
    }
  };

  onClickSelect = (b1, b2) => {
    this.setState({
      all: b1,
      completed: b2,
    });
  };

  onClickRemove = (el) => {
    let num = Number(el.target.id.slice(2, el.target.id.length));
    this.state.list.splice(num - 1, 1);
    this.setState({
      list: [...this.state.list],
    });
  };

  onClickListBtn = (el) => {
    let num = Number(el.target.id.slice(2, el.target.id.length));
    if (this.state.list[num - 1].select) {
      el.target.className = "listBtn";
      this.state.list[num - 1].select = false;
    } else {
      el.target.className += " text";
      this.state.list[num - 1].select = true;
    }
    this.setState({
      list: [...this.state.list],
    });
  };
  onClickClear = () => {
    this.setState({
      list: [],
    });
  };
  onInp = (el) => {
    if (el.nativeEvent.data !== null) {
      this.setState({
        value: (this.state.value += el.nativeEvent.data),
      });
    } else {
      this.setState({
        value: this.state.value.slice(0, this.state.value.length - 1),
      });
    }
  };
  onChangeSelect = (el) => {
    if (el.target.value === "all") {
      this.onClickSelect(true, false);
    } else if (el.target.value === "completed") {
      this.onClickSelect(false, true);
    } else if (el.target.value === "uncompleted") {
      this.onClickSelect(false, false);
    }
  };

  render() {
    return (
      <>
        <div className="todo">
          <Clear onclick={this.onClickClear} />
          <Input
            oninput={this.onInp}
            inpValue={this.state.value}
            onClickAdd={this.onClickAdd}
          />
          <Add onClickAdd={this.onClickAdd} />
          <Select onSelect={this.onChangeSelect}/>
        </div>
        <List
          onclickLB={this.onClickListBtn}
          onclickRM={this.onClickRemove}
          list={this.state.list}
          all={this.state.all}
          completed={this.state.completed}
        />
      </>
    );
  }
}
