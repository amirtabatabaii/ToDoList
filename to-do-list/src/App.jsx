import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import { Link, router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className=" font-weight-bold">
                Trello lets you work more collaboratively and get more done.
              </h1>
            </div>
            <div className="col-6">
              <img
                src={logo}
                className="App-logo"
                alt="logo"
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
