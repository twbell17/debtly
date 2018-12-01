import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import connected from '../../state/setup/connect'
import { selector as users } from '../../state/entities/users/reducer'
import UserLinks from './user-links'
import DefaultLinks from './nav-links'

import './index.css'

const { object, string } = PropTypes

class Header extends Component {
  static propTypes = {
    pathname: string.isRequired,
    users: object.isRequired
  }

  render() {
    const { active } = this.props.users
    const logoLink = active ? '/landing' : '/'

    return (
      <div styleName="HeaderContainer">
        <Link to={logoLink}>
            <div styleName="LogoContainer">
              Debtly
            </div>
        </Link>
        <div styleName="ActiveLink">
          {active ? <UserLinks pathname={this.props.pathname} /> : <DefaultLinks />}
        </div>
      </div>
    )
  }
}

export default connected([users], [])(Header)
