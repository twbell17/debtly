import React, { Component } from 'react'
import { Button, Icon, Input } from 'semantic-ui-react'

import { recoverProcess } from '../../../state/processes/auth/recover'
import { Content, Description, Title, Error, Form, Page} from './styles.js'

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

  handleSubmit= (event) => {
    event.preventDefault()
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
      <Page>
        <Content>
          <Title>Forgot Password?</Title>
          <Description>We'll send you a recovery email</Description>
          <Form onSubmit={this.handleSubmit}>
            <Input icon="user circle" iconPosition="left" size="big" placeholder="Your Email" type="text"
              value={this.state.email} onChange={this.handleInputEmail} />
            <Button type="submit" animated color="green">
              <Button.Content visible>REMIND ME</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
          </Form>
          {this.state.error ? <Error>Please provide an email</Error> : null}
        </Content>
      </Page>
    )
  }
}

export default recoverProcess(Recover)
