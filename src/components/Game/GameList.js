import React, { Component } from 'react'

export default class GameList extends Component {
  render() {
    const { choices, onChoiceClick } = this.props
    return (
      <div>
        {choices.map((choice, index) => (
          <div key={index}>
            <h1>{choice}</h1>
            <button onClick={onChoiceClick.bind(this, choice)}>{choice}</button>
          </div>
        ))}
      </div>
    )
  }
}
