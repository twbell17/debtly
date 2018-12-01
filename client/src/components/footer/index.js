/* eslint-disable no-console */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

import { FooterContainer, Copyright } from './styles.js'

const { object, string } = PropTypes

class Footer extends Component {
  static propTypes = {
    pathname: string.isRequired,
    users: object.isRequired
  }

  render() {
    return (
      <FooterContainer>
        <div className="copyright">
          <Icon name="copyright" />Debtly 2018. All rights resevered
        </div>
      </FooterContainer>
    )
  }
}

export default Footer
