import { useEffect, useState } from "react";
import List from "./List";
import Add from "./AddBtn";
import Input from "./Input";
import Select from "./Select";
import Clear from "./ClearBtn";
import { useDispatch, useSelector } from "react-redux";
import { addItem, done, remove, removeAll } from "./ToDoSlice";

export default function ToDoList() {
  const todo = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const [list, setList] =  useState([]) 
  const [value, setValue] = useState("");
  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(false);

useEffect(() => {
setList(todo)
},[todo])
  
  const onClickAdd = () => {
    if (value !== "") {
      dispatch(addItem(value));
      setValue("")
    }
  };

  const onClickSelect = (b1, b2) => {
    setAll(b1);
    setCompleted(b2);
  };

  const onClickRemove = (el) => {
    dispatch(remove(el.target.id));
  };

  const onClickListBtn = (el) => {
    dispatch(done(el.target.id));
  };

  const onClickClear = () => {
    dispatch(removeAll());
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

  return (
    <>
      <div className="todo">
        <Clear onclick={onClickClear} />
        <Input onchange={onChange} inpValue={value} onClickAdd={onClickAdd} />
        <Add onClickAdd={onClickAdd} />
        <Select onSelect={onChangeSelect} />
      </div>
      <List
        onclickLB={onClickListBtn}
        onclickRM={onClickRemove}
        list={list}
        all={all}
        completed={completed}
      />
    </>
  );
}
