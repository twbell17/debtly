import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Icon, Input } from 'semantic-ui-react'
// import * as process from './process'
import connected from '../../../state/setup/connect'
import { Page, Content, Form, Row } from './styles'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmedPassword: '',
      email: ''
    }
  }

  handleInput = field => event => {
    // eslint-disable-next-line no-console
    this.setState({ [field]: event.target.value })
  }

  handleSubmit = () => {
    const { username, password } = this.state
    this.props.login.fetch(username, password)
  }

  render() {
    return (
      <Page>
        <Content>
          <Form>
            <Row>
              <Input placeholder="First name" type="text" onChange={this.handleInput('firstName')} />
              <Input placeholder="Last name" type="text" onChange={this.handleInput('lastName')} />
            </Row>
            <Row>
              <Input icon="user" placeholder="Username" type="text" onChange={this.handleInput('username')} />
            </Row>
            <Row>
              <Input icon="mail" placeholder="Email" type="text" onChange={this.handleInput('email')} />
            </Row>
            <Row>
              <Input icon="lock" placeholder="Password" type="password" onChange={this.handleInput('password')} />
            </Row>
            <Row>
              <Input icon="lock" placeholder="Confirm password" type="password" onChange={this.handleInput('confirmedPassword')} />
            </Row>
            <Button type="button" animated color="green" onClick={this.handleSubmit}>
              <Button.Content visible>Create Account</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
          </Form>
        </Content>
      </Page>
    )
  }
}

export default withRouter(connected([], [])(CreateAccount))
