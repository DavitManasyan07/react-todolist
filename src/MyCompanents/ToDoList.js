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
      searchValue: "",
      all: true,
      completed: false,
    };
  }

  onClickAdd = () => {
    if (this.state.value !== "") {
      this.state.list.push({
        value: this.state.value,
        select: false,
        dontSearch: true,
        edit: false,
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
      this.state.list[num - 1].select = false;
    } else {
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

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
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

  onDbCLick = (el) => {
    this.editF();
    let num = Number(el.target.id.slice(2, el.target.id.length));
    this.state.list[num - 1].edit = true;
    this.setState({
      list: [...this.state.list],
    });
  };

  onListElemInp = (el) => {
    let num = Number(el.target.id.slice(2, el.target.id.length));
    this.state.list[num - 1].value = el.target.value;
    this.setState({
      list: [...this.state.list],
    });
  };

  search = (el) => {
    if (!el.target.value) {
      this.state.list.map((listEl) => {
        listEl.dontSearch = true;
      });
      this.setState({
        list: [...this.state.list],
      });
    }
    this.state.list.map((listEl) => {
      for (let i = 0; i < el.target.value.length; i++) {
        if (el.target.value[i] === listEl.value[i]) {
          listEl.dontSearch = true;
        } else {
          listEl.dontSearch = false;
        }
      }
    });

    this.setState({
      searchValue: el.target.value,
      list: [...this.state.list],
    });
  };

  editF = () => {
    this.state.list.forEach((el) => {
      el.edit = false;
    });
    this.setState({
      list: [...this.state.list],
    });
  };

  render() {
    return (
      <>
        <div className="todo">
          <Clear onclick={this.onClickClear} />
          <Input
            onchange={this.onChange}
            inpValue={this.state.value}
            onClickAdd={this.onClickAdd}
          />
          <Add onClickAdd={this.onClickAdd} />
          <Select onSelect={this.onChangeSelect} />
          <input
            className="search"
            placeholder="Search"
            onInput={this.search}
          ></input>
        </div>
        <List
          onEditF={this.editF}
          onclickLB={this.onClickListBtn}
          onclickRM={this.onClickRemove}
          list={this.state.list}
          all={this.state.all}
          completed={this.state.completed}
          onDbClk={this.onDbCLick}
          onchange={this.onListElemInp}
        />
      </>
    );
  }
}
