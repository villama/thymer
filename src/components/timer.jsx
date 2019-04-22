import React, { Component } from "react"

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeLeft: 60000,
      buttonLabel: "Start"
    }
    this.updateThreadID = null
    this.lastUpdate = null
    this.timerState = 0
  }

  render() {
    return (
      <div>
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

  componentDidMount() {}

  componentWillUnmount() {}
}

export default Timer
