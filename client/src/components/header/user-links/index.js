import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import UserDropdown from './user-dropdown'
import css from './index.css'

const { string } = PropTypes

class UserLinks extends Component {
  static propTypes = {
    pathname: string.isRequired
  }

  render() {
    const { pathname } = this.props
    return (
      <div styleName="Content">
        {pathname === '/landing' ? <Link to="/evaluation">New Evaluation</Link> : null}
        <div styleName="DropdownContainer">
          <UserDropdown />
        </div>
      </div>
    )
  }
}

export default withRouter(CSSModules(UserLinks, css))
