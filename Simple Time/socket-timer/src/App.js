import React, { Component } from "react";
import { subscribeToTimer } from "./api";
import moment from "moment";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: '',
      ready: false
    };

    setTimeout(() => {
      this.setState({ ready: true });
    }, 1200);
    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Timer Value:
          <br />
          {this.state.ready
            ? moment(this.state.timestamp).format("h:mm:ss a")
            : "No timestamp yet"}
        </p>
      </div>
    );
  }
}

export default App;

