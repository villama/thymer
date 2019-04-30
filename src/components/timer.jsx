import React, { Component } from "react"
import image_mp4 from "../assets/villager.mp4"
import image_ogg from "../assets/villager.ogg"

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startTime: 60000,
      timeLeft: 60000,
      buttonLabel: "Start"
    }
    this.updateThreadID = null
    this.lastUpdate = null
    this.timerState = 0
  }

  render() {
    return (
      <div className="Timer">
        <video id="graphic" className="Graphic" muted>
          <source src={image_mp4} type="video/mp4" />
          <source src={image_ogg} type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        <h2>
          timeLeft:
          <div name="timeLeft">{(this.state.timeLeft / 1000).toFixed(1)}</div>
        </h2>

        <button onClick={this.timerButtonClicked} name="timer-button">
          {this.state.buttonLabel}
        </button>
      </div>
    )
  }

  // Handles button clicks
  timerButtonClicked = () => {
    if (this.timerState === 0) {
      // Start the timer
      this.updateTimeLeft()
      this.updateThreadID = setInterval(this.updateTimeLeft, 100)
      this.timerState = 1
      this.setState({
        buttonLabel: "Stop"
      })
      this.vid.play()
    } else {
      // Pause the timer
      clearInterval(this.updateThreadID)
      this.lastUpdate = null
      this.timerState = 0
      this.setState({
        buttonLabel: "Start"
      })
      this.vid.pause()
    }
  }

  // This is called every 100 ms when the button is clicked
  updateTimeLeft = () => {
    const currentTime = Date.now()
    const elapsed = this.lastUpdate == null ? 0 : currentTime - this.lastUpdate
    this.lastUpdate = currentTime
    this.setState({
      timeLeft: this.state.timeLeft - elapsed
    })
  }

  componentDidMount() {
    this.vid = document.getElementById("graphic")
    console.log(this.vid)
    this.vid.playbackRate = 0.5
    this.vid.oncontextmenu = false
  }
}

export default Timer
