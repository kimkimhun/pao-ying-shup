import React, { Component } from 'react'

export default class GameList extends Component {
  render() {
    const { choices, onChoiceClick } = this.props
    return (
      <div>
        {choices.map(({ choice, name }, index) => (
          <div key={index}>
            <h1>{name}</h1>
            <button onClick={onChoiceClick.bind(this, choice)}>{name}</button>
          </div>
        ))}
      </div>
    )
  }
}
