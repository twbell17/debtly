import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import UserDropdown from './user-dropdown'
import './index.css'

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

export default withRouter(UserLinks)
