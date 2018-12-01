import React, { Component } from 'react'
import { protectedRoute } from '../.././../state/processes/auth/login'

import './index.css'

class ProfilePage extends Component {
  render() {
    return (
      <div styleName="page">
        Profile Page
      </div>
    )
  }
}

export default protectedRoute(ProfilePage)
