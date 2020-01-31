import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import everyday from "../src/assets/everyday.gif";
import Home from "./component/Home";

class App extends Component {
  state = {
    showApp: true,
    showHome: false
  };

  handleOnClick = () => {
    this.setState({
      showApp: false,
      showHome: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header text-center">
            {this.state.showApp ? (
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
                      onClick={this.handleOnClick}
                    >
                      START
                    </button>
                  </div>
                </div>
              </div>
            ) : this.state.showHome ? (
              <Home />
            ) : null}
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
