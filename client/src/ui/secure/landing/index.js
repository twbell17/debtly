import React, { Component } from 'react'
import { protectedRoute } from '../.././../state/processes/auth/login'
import CSSModules from 'react-css-modules'
import css from './index.css'

class LandingPage extends Component {
  render() {
    return (
      <div styleName="page">
        Landing Page
      </div>
    )
  }
}

export default protectedRoute(CSSModules(LandingPage, css))
