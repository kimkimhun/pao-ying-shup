import React, { Component } from 'react'
import './GameList.css'

const rock = require('../../rock.svg')
const paper = require('../../paper.svg')
const scissors = require('../../scissors.svg')
const listImage = [rock, paper, scissors]
export default class GameList extends Component {
  render() {
    const { choices, onChoiceClick, answerLoading } = this.props
    const isLoading = answerLoading
      ? 'GameList-card GameList-card-discabled '
      : 'GameList-card '
    return (
      <div className="GameList-container">
        {choices.map((choice, index) => (
          <div
            className={isLoading}
            key={index}
            onClick={onChoiceClick.bind(this, choice)}
          >
            <h1 className="GameList-card-title">{choice}</h1>
            <img
              className="GameList-card-image"
              src={listImage[index]}
              alt={choice}
            />
          </div>
        ))}
      </div>
    )
  }
}
