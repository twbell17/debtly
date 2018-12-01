import React, { Component } from 'react'
import { protectedRoute } from '../.././../state/processes/auth/login'

import { Page } from './styles'

class ProfilePage extends Component {
  render() {
    return (
      <Page>
        Profile Page
      </Page>
    )
  }
}

export default protectedRoute(ProfilePage)
