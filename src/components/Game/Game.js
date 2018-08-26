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
    return { computerChoice, message: message.tie }
  } else if (userChoice === options[0] && computerChoice === options[2]) {
    return { computerChoice, message: message.won }
  } else if (userChoice === options[1] && computerChoice === options[0]) {
    return { computerChoice, message: message.won }
  } else if (userChoice === options[2] && computerChoice === options[1]) {
    return { computerChoice, message: message.won }
  } else {
    return { computerChoice, message: message.lost }
  }
}

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choices: ['ROCK', 'PAPER', 'SCISSORS'],
      message: '',
      answerLoading: false,
      userChoice: '',
      computerChoice: ''
    }
  }

  onChoiceClick(choice) {
    if (!this.state.answerLoading) {
      this.setState(prevState => {
        return {
          ...prevState,
          answerLoading: true,
        }
      })
      setTimeout(() => {
        const answer = playRPS(choice)
        this.setState(prevState => {
          return {
            ...prevState,
            answerLoading: false,
            message: answer.message,
            userChoice: choice,
            computerChoice: answer.computerChoice
          }
        })
      }, 3000)
    }
  }

  render() {
    const { choices, message, answerLoading, userChoice, computerChoice } = this.state
    return (
      <div className="Game-container">
        <h1>Choose you choice</h1>
        <div>
          <GameList
            choices={choices}
            answerLoading={answerLoading}
            onChoiceClick={this.onChoiceClick.bind(this)}
          />
          <div className="Game-result">
            {answerLoading ? (
              <div className="lds-ellipsis">
                <div />
                <div />
                <div />
                <div />
              </div>
            ) : (
              <div>
                <h2>Game Result {message}</h2>
                <h2>you choice {userChoice}</h2>
                <h2>computer choice {computerChoice}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
