import React from "react";

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

  render() {
    let cout = 0;

    return (
      <>
        <div className="todo">
          <button
            className="clearBtn"
            onClick={() => {
              this.setState({
                list: [],
              });
            }}
          >
            C
          </button>
          <input
            className="todoInp"
            value={this.state.value}
            onKeyDown={(el) => {
              if (el.code === "Enter") {
                this.onClickAdd();
              }
            }}
            onInput={(el) => {
              if (el.nativeEvent.data !== null) {
                this.setState({
                  value: (this.state.value += el.nativeEvent.data),
                });
              } else {
                this.setState({
                  value: this.state.value.slice(0, this.state.value.length - 1),
                });
              }
            }}
          ></input>
          <button
            className="addBtn"
            onClick={() => {
              this.onClickAdd();
            }}
          >
            Add
          </button>
          <select
            className="selectNav"
            onChange={(el) => {
              if (el.target.value === "all") {
                this.onClickSelect(true, false);
              } else if (el.target.value === "completed") {
                this.onClickSelect(false, true);
              } else if (el.target.value === "uncompleted") {
                this.onClickSelect(false, false);
              }
            }}
          >
            <option value="all">ALL</option>
            <option value="completed">COMPLETED</option>
            <option value="uncompleted">UNCOMPLETED</option>
          </select>
        </div>

        <div className="list">
          {this.state.list.map((element) => {
            cout++;
            if (this.state.all || this.state.completed === element.select) {
              return (
                <div key={`b0${cout}`} className="listElment">
                  <button
                    id={`b1${cout}`}
                    className={`listBtn ${element.select ? "text" : ""}`}
                    onClick={(el) => {
                      let num = Number(
                        el.target.id.slice(2, el.target.id.length)
                      );
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
                    }}
                  >
                    {element.value}
                  </button>
                  <button
                    className="removeBtn fa fa-trash-o"
                    id={`b2${cout}`}
                    onClick={(el) => {
                      let num = Number(
                        el.target.id.slice(2, el.target.id.length)
                      );
                      this.state.list.splice(num - 1, 1);
                      this.setState({
                        list: [...this.state.list],
                      });
                    }}
                  ></button>
                </div>
              );
            }
          })}
        </div>
      </>
    );
  }
}
