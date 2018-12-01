import React, { Component } from 'react'
import { Button, Icon, Input } from 'semantic-ui-react'

import { recoverProcess } from '../../../state/processes/auth/recover'
import './index.css'

class Recover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      error: false
    }
  }

  handleInputEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handleClick = () => {
    const { email } = this.state
    // TODO maybe add some more frontend validation
    if (!email) {
      this.setState({ error: true })
      return
    }
    this.setState({ error: false })
    this.props.recoverProcess(email)
  }

  render() {
    return (
      <div styleName="Page">
        <div styleName="Content">
          <div styleName="Title">Forgot Password?</div>
          <div styleName="Description">We'll send you a recovery email</div>
          <form styleName="Form">
            <Input icon="user circle" iconPosition="left" size="big" placeholder="Your Email" type="text"
              value={this.state.email} onChange={this.handleInputEmail} />
            <Button type="button" animated color="green" onClick={this.handleClick}>
              <Button.Content visible>REMIND ME</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
          </form>
          {this.state.error ? <div styleName="Error">Please provide an email</div> : null}
        </div>
      </div>
    )
  }
}

export default recoverProcess(Recover)
