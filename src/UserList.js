import React, { Component } from "react";
import "./UserList.css";

export default class UserList extends Component {
  state = {
    userList: [],
    error: false
  };

  componentDidMount() {
    this.getUserList();
  }

  getUserList = async () => {
    try { //try to get data
      const response = await fetch("https://randomuser.me/api/");
      if (response.ok) { // ckeck if status code is 200
        const data = await response.json();
        this.setState({ userList: data.results});
      } else { this.setState({ error: true }) }
    } catch (e) { //code will jump here if there is a network problem
      this.setState({ error: true });
    }
  };

    render() {
        const { userList, error } = this.state
        console.log("list", userList)
        return (
            <div className="list__container">
                {userList.length > 0 && userList.map(user => (
                    <div className="list__item" key={user}>
                        <img src={user.picture.medium} className="list-item__photo" alt="user"/>
                        <div className="list-item__info-wrap">
                            <div className="list-item__name">{user.name.first} {user.name.last}</div>
                            <div className="list-item__phone">{user.phone}</div>
                            <div className="list-item__email">{user.email}</div>
                        </div>
                    </div>
                ))}
                {error && <div>Sorry, can not display the data</div>}
            </div>
        )
  }
}
