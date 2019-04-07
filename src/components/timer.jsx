import React, { Component } from "react"

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 100,
      buttonLabel: "Start"
    }
  }

  render() {
    const { count, buttonLabel } = this.state
    return (
      <div>
        <h1>Current count: {count}</h1>
        <button onClick={this.timerButtonClicked}>{buttonLabel}</button>
      </div>
    )
  }

  timerButtonClicked = () => {
    if (this.state.buttonLabel === "Start") {
      this.setState({
        intervalID: setInterval(() => {
          this.setState(prevState => ({
            count: prevState.count - 1
          }))
        }, 1000)
      })
      this.setState({
        buttonLabel: "Stop"
      })
    } else {
      clearInterval(this.state.intervalID)
      this.setState({
        buttonLabel: "Start"
      })
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}
}

export default Timer
