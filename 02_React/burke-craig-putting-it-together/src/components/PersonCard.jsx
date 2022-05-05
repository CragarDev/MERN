import React, { Component } from 'react'

class PersonCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      age: this.props.age
    }
  }

  render () {
    const { ...card } = this.props

    const increaseBirthday = () => {
      this.setState({
        age: this.state.age + 1
      })
    }

    return (
      <div className='main'>
        <ul>
          <li>
            <h1>
              {card.lastName}, {card.firstName}
            </h1>
          </li>
          <li>
            <h3>Age: {this.state.age}</h3>
          </li>
          <li>
            <h3>Hair Color: {card.hairColor}</h3>
          </li>
        </ul>
        <br />
        <button onClick={increaseBirthday}>
          <span>
            Birthday for {card.firstName} {card.lastName}
          </span>
        </button>
        <hr />
      </div>
    )
  }
}

export default PersonCard
