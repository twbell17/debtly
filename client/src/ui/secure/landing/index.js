import React, { Component } from 'react'
import { protectedRoute } from '../.././../state/processes/auth/login'
import './index.css'

class LandingPage extends Component {
  render() {
    return (
      <div styleName="page">
        Landing Page
      </div>
    )
  }
}

export default protectedRoute(LandingPage)
