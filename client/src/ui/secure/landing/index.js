import React, { Component } from 'react'
import { AutoLoginOrRedirect } from '../.././../state/processes/auth/login'
import { Page } from './styles'

class LandingPage extends Component {
  render() {
    return (
      <Page>
        Landing Page
      </Page>
    )
  }
}

export default AutoLoginOrRedirect(LandingPage)
