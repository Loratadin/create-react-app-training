import React, { Component } from "react";
import UserList from "./UserList";
import Input from "./Input";
import "./App.css";

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <UserList />
        <Input/>
      </div>
    );
  }
}
