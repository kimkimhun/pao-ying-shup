import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h2>veckenz {new Date().getFullYear()} </h2>
      </div>
    )
  }
}
