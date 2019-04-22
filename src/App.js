import React, { Component } from "react"
import "./App.css"
import Timer from "./components/timer"
import Graphic from "./components/graphic"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>thymer</h1>
        <Graphic />
        <Timer />
      </React.Fragment>
    )
  }
}

export default App
