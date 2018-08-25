import React, { Component } from 'react'
import './Game.css'

import GameList from './GameList'

const message = {
  tie: "Yawn it's a tie!",
  won: 'Yay you won!',
  lost: 'Aww you lost!',
}

const options = ['ROCK', 'PAPER', 'SCISSORS']

function playRPS(userChoice) {
  const computerChoice = options[Math.floor(Math.random() * 3)]
  if (userChoice === computerChoice) {
    return message.tie
  } else if (userChoice === options[0] && computerChoice === options[2]) {
    return message.won
  } else if (userChoice === options[1] && computerChoice === options[0]) {
    return message.won
  } else if (userChoice === options[2] && computerChoice === options[1]) {
    return message.won
  } else {
    return message.lost
  }
}

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choices: ['Rock', 'Paper', 'Scissors'],
      message: '',
    }
  }

  onChoiceClick(choice) {
    this.setState(prevState => {
      return {
        ...prevState,
        message: playRPS(choice.toUpperCase()),
      }
    })
  }

  render() {
    const { choices, message } = this.state
    return (
      <div>
        <h1>Choose you choice</h1>
        <div>
          <GameList
            choices={choices}
            onChoiceClick={this.onChoiceClick.bind(this)}
          />
          <br/>
          <hr/>
          {message}
        </div>
      </div>
    )
  }
}
