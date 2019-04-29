import React, { Component } from "react"
import image_mp4 from "../assets/villager.mp4"
import image_ogg from "../assets/villager.ogg"

class Graphic extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <h1>Percent value: {this.props.percent}</h1>
        <video id="graphic" className="App-image" loop autoPlay muted>
          <source src={image_mp4} type="video/mp4" />
          <source src={image_ogg} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </React.Fragment>
    )
  }

  componentDidMount() {
    var vid = document.getElementById("graphic")
    console.log(vid)
    vid.playbackRate = 0.5
    vid.oncontextmenu = false
  }
}

export default Graphic
