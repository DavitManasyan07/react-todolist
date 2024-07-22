import { useState } from "react";
import List from "./List";
import Add from "./AddBtn";
import Input from "./Input";
import Select from "./Select";
import Clear from "./ClearBtn";

export default function ToDoList() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(false);

  const onClickAdd = () => {
    if (value !== "") {
      list.push({
        value: value,
        select: false,
        dontSearch: true,
        edit: false,
      });
      setList(list);
      setValue("");
    }
  };

  const onClickSelect = (b1, b2) => {
    setAll(b1);
    setCompleted(b2);
  };

  const onClickRemove = (el) => {
    let num = Number(el.target.id.slice(2, el.target.id.length));
    list.splice(num - 1, 1);
    setList([...list]);
  };

  const onClickListBtn = (el) => {
    let num = Number(el.target.id.slice(2, el.target.id.length));
    if (list[num - 1].select) {
      list[num - 1].select = false;
    } else {
      list[num - 1].select = true;
    }
    setList([...list]);
  };

  const onClickClear = () => {
    setList([]);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onChangeSelect = (el) => {
    if (el.target.value === "all") {
      onClickSelect(true, false);
    } else if (el.target.value === "completed") {
      onClickSelect(false, true);
    } else if (el.target.value === "uncompleted") {
      onClickSelect(false, false);
    }
  };

  const onDbCLick = (el) => {
    editF();
    let num = Number(el.target.id.slice(2, el.target.id.length));
    list[num - 1].edit = true;
    setList([...list]);
  };

  const onListElemInp = (el) => {
    let num = Number(el.target.id.slice(2, el.target.id.length));
    list[num - 1].value = el.target.value;
    setList([...list]);
  };

  const search = (el) => {
    if (!el.target.value) {
      list.map((listEl) => {
        listEl.dontSearch = true;
      });
      setList([...list]);
    }
    list.map((listEl) => {
      for (let i = 0; i < el.target.value.length; i++) {
        if (el.target.value[i] === listEl.value[i]) {
          listEl.dontSearch = true;
        } else {
          listEl.dontSearch = false;
        }
      }
    });
    setList([...list]);
  };

  const editF = () => {
    list.forEach((el) => {
      el.edit = false;
    });
    setList([...list]);
  };

  console.log(23);

  return (
    <>
      <div className="todo">
        <Clear onclick={onClickClear} />
        <Input onchange={onChange} inpValue={value} onClickAdd={onClickAdd} />
        <Add onClickAdd={onClickAdd} />
        <Select onSelect={onChangeSelect} />
        <input className="search" placeholder="Search" onInput={search}></input>
      </div>
      <List
        onEditF={editF}
        onclickLB={onClickListBtn}
        onclickRM={onClickRemove}
        list={list}
        all={all}
        completed={completed}
        onDbClk={onDbCLick}
        onchange={onListElemInp}
      />
    </>
  );
}
