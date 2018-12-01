import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import * as process from './process'
import connected from '../../../state/setup/connect'
import './index.css'

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
      <div styleName="Page">
        <div styleName="Content">
          <div styleName="Title">Check Your Email</div>
          <div styleName="Description">
            <div>We've sent an email to the entered email address.</div>
            <div>Follow the instructions to be able to login.</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CreateAccount))
