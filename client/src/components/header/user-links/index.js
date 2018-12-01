import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import UserDropdown from './user-dropdown'
import { Content, DropdownContainer } from './styles'

const { string } = PropTypes

class UserLinks extends Component {
  static propTypes = {
    pathname: string.isRequired
  }

  render() {
    const { pathname } = this.props
    return (
      <Content>
        {pathname === '/landing' ? <Link to="/evaluation">New Evaluation</Link> : null}
        <DropdownContainer>
          <UserDropdown />
        </DropdownContainer>
      </Content>
    )
  }
}

export default withRouter(UserLinks)
