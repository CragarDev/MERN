import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    const { ...card } = this.props;
    return (
      <div class="main">
        <ul>
          <li>
            <h1>
              {card.lastName}, {card.firstName}
            </h1>
          </li>
          <li>
            <h3>Age: {card.age}</h3>
          </li>
          <li>
            <h3>Hair Color: {card.hairColor}</h3>
          </li>
          <br />
        </ul>
      </div>
    );
  }
}

export default PersonCard;
