/* eslint-disable no-console */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import isEmpty from 'lodash'

import { selector as users } from '../../state/entities/users/reducer'
import connected from '../../state/setup/connect'
import './index.css'

const { object, string } = PropTypes

class Footer extends Component {
  static propTypes = {
    pathname: string.isRequired,
    users: object.isRequired
  }

  render() {
    const { users: { active }, pathname } = this.props
    const showLinks = !isEmpty(this.props.users) || !active
    return (
      <div styleName="FooterContainer">
        <div className="copyright">
          <Icon name="copyright" />Debtly 2018. All rights resevered
        </div>
      </div>
    )
  }
}

export default connected([users], [])(Footer)
