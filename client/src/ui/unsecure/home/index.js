import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import css from './index.css'

class Homepage extends Component {
  render() {
    return (
      <div styleName="page" >
        <div styleName="content">
          Welcome to Debtly.
        </div>
      </div>
    )
  }
}

export default CSSModules(Homepage, css)
