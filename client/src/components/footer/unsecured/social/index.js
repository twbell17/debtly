/* eslint-disable no-console */
import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './index.css'

class Social extends Component {
  handleFacebook = () => {
    console.log('The user has interest in FB')
  }
  handleLinkedIn = () => {
    console.log('The user has interest in LinkedIn')
  }
  handleTwitter = () => {
    console.log('The user has interest in Twitter')
  }

  render() {
    return (
      <div styleName="Container">
        <div>Social</div>
        <div styleName="SocialLinks">
          <Button basic icon onClick={this.handleFacebook}>
            <Icon name="facebook f" color="green" />
          </Button>
          <Button basic icon onClick={this.handleTwitter}>
            <Icon name="twitter" color="green" />
          </Button>
          <Button basic icon onClick={this.handleLinkedIn}>
            <Icon name="linkedin" color="green" />
          </Button>
        </div>
      </div>
    )
  }
}

export default Social
