import React from "react";
import "./App.css";
import ToDoList from "./MyCompanents/ToDoList";


class App extends React.Component{
  constructor(...props){
    super(...props)
  }

  render(){

    return <ToDoList />
  }
}
export default App;
