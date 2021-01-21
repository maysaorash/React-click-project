import React from 'react';

class AppClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Get current state
    let currCount = this.state.count;
    // Increase the number
    currCount += 1;
    // Set state
    this.setState({
      count: currCount
    })
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>You have clicked { this.state.count } times.</h1>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    )
  }
}

export default AppClass;