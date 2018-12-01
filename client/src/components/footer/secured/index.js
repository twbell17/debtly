/* eslint-disable no-console */
import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './index.css'

class SecuredLinks extends Component {
  handleClear = () => {
    console.log('clear clicked')
  }

  handleSubmit = () => {
    console.log('submit clicked')
  }

  render() {
    const { pathname } = this.props

    if (pathname !== '/evaluation')
      return null

    return (
      <div styleName="Content">
        <Button type="button" basic onClick={this.handleClear}>Clear</Button>
        <Button type="button" animated color="grey" onClick={this.handleSubmit}>
          <Button.Content visible>Evaluate</Button.Content>
          <Button.Content hidden>
            <Icon name="checkmark" />
          </Button.Content>
        </Button>
      </div>
    )
  }
}

export default SecuredLinks
