import React, { Component } from "react"
import Graphic from "./graphic"

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
        <Graphic percent={this.state.timeLeft / this.state.startTime} />
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

  timerButtonClicked = () => {
    if (this.timerState === 0) {
      // Start the timer
      this.updateTimeLeft()
      this.updateThreadID = setInterval(this.updateTimeLeft, 100)
      this.timerState = 1
      this.setState({
        buttonLabel: "Stop"
      })
    } else {
      // Pause the timer
      clearInterval(this.updateThreadID)
      this.lastUpdate = null
      this.timerState = 0
      this.setState({
        buttonLabel: "Start"
      })
    }
  }

  updateTimeLeft = () => {
    const currentTime = Date.now()
    const elapsed = this.lastUpdate == null ? 0 : currentTime - this.lastUpdate
    this.lastUpdate = currentTime
    this.setState({
      timeLeft: this.state.timeLeft - elapsed
    })
  }
}

export default Timer
