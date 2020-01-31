import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import AppMain from "./component/utility/AppMain";

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
              <AppMain onClick={this.handleOnClick} />
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
