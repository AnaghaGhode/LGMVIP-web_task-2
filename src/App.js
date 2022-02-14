import Users from "./component/team";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2500
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
            <h1> AstralSpec </h1>


            <button className="fetchbutton" onClick={this.updateState}>
              Get User Data
            </button>
          </div>
        </nav>
        <div className="heading">
          <h1>Users</h1>
        </div>
        <div className="fetchuser">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>

      </>
    );
  }
}


export default App;
