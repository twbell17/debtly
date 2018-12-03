/* eslint-disable no-console */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

import { FooterContainer } from './styles.js'


class Footer extends Component {
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
