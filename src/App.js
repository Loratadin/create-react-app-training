import React, { Component } from "react";
import UserList from "./UserList";
import Input from "./Input";
import ImageChangeOnMouseOver from "./ImageChangeOnMouseOver";
import "./App.css";

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <UserList />
        <Input />
        <ImageChangeOnMouseOver/>
      </div>
    );
  }
}
