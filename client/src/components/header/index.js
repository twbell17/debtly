import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import connected from '../../state/setup/connect'
import { selector as users } from '../../state/entities/users/reducer'
import UserLinks from './user-links'
import DefaultLinks from './nav-links'

import {
  ActiveLink,
  HeaderContainer,
  LogoContainer
} from './styles'

const { object, string } = PropTypes

class Header extends Component {
  static propTypes = {
    pathname: string.isRequired,
    users: object.isRequired
  }

  render() {
    const user = this.props.users.active
    const logoLink = user && user.userHandle ? '/landing' : '/'

    return (
      <HeaderContainer>
        <Link to={logoLink}>
            <LogoContainer>
              Debtly
            </LogoContainer>
        </Link>
        <ActiveLink>
          {user.userHandle ? <UserLinks /> : <DefaultLinks />}
        </ActiveLink>
      </HeaderContainer>
    )
  }
}

export default withRouter(connected([users], [])(Header))
