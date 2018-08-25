import React, { Component } from 'react'
import './Game.css'

import GameList from './GameList'

const message = {
  
}

function playRPS(userinput) {

}

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choices: [
        {choice: 0, name: 'Rock'},
        {choice: 1, name: 'Paper'},
        {choice: 2, name: 'Scissors'},
      ],
    }
  }

  onChoiceClick (item) {
    console.log(item)
  }

  render() {
    const { choices } = this.state
    return (
      <div>
        <h1>Choose you choice</h1>
        <div>
          <GameList choices={choices} onChoiceClick={this.onChoiceClick.bind(this)} />
        </div>
      </div>
    )
  }
}
