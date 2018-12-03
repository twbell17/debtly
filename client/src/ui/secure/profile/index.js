import React, { Component } from 'react'
import { AutoLoginOrRedirect } from '../.././../state/processes/auth/login'

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

export default AutoLoginOrRedirect(ProfilePage)
