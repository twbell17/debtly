import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import { AutoLoginOrRedirect } from '../.././../state/processes/auth/login'
import { Page, Content } from './styles'

import Details from './details'
import Repayment from './repayment'
import Summary from './summary'
import Menu from './menu'

class LandingPage extends Component {
  render() {
    const { match } = this.props
    return (
      <Page>
        <Menu />
        <Content>
          <Route exact path={`${match.url}`} component={Summary} />
          <Route exact path={`${match.url}/details`} component={Details} />
          <Route exact path={`${match.url}/payment`} component={Repayment} />
        </Content>
      </Page>
    )
  }
}

export default AutoLoginOrRedirect(withRouter(LandingPage))
