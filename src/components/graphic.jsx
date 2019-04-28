import React, { Component } from "react"
import image_mp4 from "../assets/villager.mp4"
import image_ogg from "../assets/villager.ogg"

class Graphic extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <h1>Received value: {this.props.counter}</h1>
        <video className="App-image" loop autoPlay muted>
          <source src={image_mp4} type="video/mp4" />
          <source src={image_ogg} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </React.Fragment>
    )
  }
}

export default Graphic
