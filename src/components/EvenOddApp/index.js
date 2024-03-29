// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  isClicked = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(() => ({number: randomNumber}))
  }

  checkNumber = () => {
    const {number} = this.state
    return number % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const text = this.checkNumber()
    const {number} = this.state
    return (
      <div className="container">
        <div className="bg-container">
          <h1 className="count">Count {number}</h1>
          <p className="count-even-or-odd">Count is {text}</p>
          <button type="button" className="button" onClick={this.isClicked}>
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
