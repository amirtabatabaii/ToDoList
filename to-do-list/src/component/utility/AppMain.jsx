import React, { Component } from "react";
import everyday from "../../assets/everyday.gif";

class AppMain extends Component {
  state = {};
  render() {
    return (
      <div className="container p-5">
        <div className="row shadow">
          <div className="col-md-6">
            <img src={everyday} alt="" width="400" height="400" />
          </div>
          <div className="col-md-6">
            <h1 className="font-weight-bold py-5">
              <br />
              Organize it all with ToDoList
            </h1>
            <button
              className="btn btn-wrap btn-success btn-lg px-5 m-5"
              onClick={this.props.onClick}
            >
              Forward &#62;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppMain;
