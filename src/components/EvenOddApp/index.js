// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {random: 0}

  onIcrement = () => {
    const randomValue = Math.floor(Math.random() * 101)
    const {random} = this.state
    this.setState(eachNum => ({random: {randomValue}}))
  }

  EvenOddStatus = value => {
    if (value.random.randomValue % 2 === 0) {
      return <p className="paragraph">Count is Even</p>
    }
    return <p className="paragraph">Count is Odd</p>
  }

  render() {
    const {random} = this.state
    return (
      <div className="container">
        <div className="cardcontainer">
          <h1 className="heading">Count{random.randomValue}</h1>
          {this.EvenOddStatus({random})}
          <button className="button" type="button" onClick={this.onIcrement}>
            Increment
          </button>
          <p>*Increment by Random number between 0 to 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
