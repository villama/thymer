import React, { Component } from "react"
import "./App.css"
import Timer from "./components/timer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>thymer</h1>
        <Timer />
      </React.Fragment>
    )
  }
}

export default App
