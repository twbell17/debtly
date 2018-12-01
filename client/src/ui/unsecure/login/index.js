import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Input } from 'semantic-ui-react'
import CSSModules from 'react-css-modules'
import css from './index.css'
import { login, autoLogin } from '../../../state/processes/auth/login'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: false
    }
  }

  handleInputEmail = (event) => {
    event.preventDefault()
    this.setState({ email: event.target.value })
  }

  handleInputPassword = (event) => {
    event.preventDefault()
    this.setState({ password: event.target.value })
  }

  handleClick = () => {
    const { email, password } = this.state
    this.props.login(email, password)
  }

  render() {
    return (
      <div>
        <div styleName="title">Welcome to Debtly</div>
        <div styleName="description"> Sign in with your information below</div>
        
        {this.state.loading ? <div styleName="loading" /> : null}
        {this.state.error ? <div>Please provide a correct email</div> : null}

        <form styleName="form">
          <Input icon="user circle" iconPosition="left" size="big" placeholder="Your Email" type="text"
            value={this.state.email} onChange={this.handleInputEmail} />
          <Input icon="user circle" iconPosition="left" size="big" placeholder="Enter Password" type="password"
            value={this.state.password} onChange={this.handleInputPassword} />
          <Button type="button" animated color="green" onClick={this.handleClick}>
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        </form>
        <Link to="/forgotten-password">Forgot Password?</Link>
      </div>
    )
  }
}

export default login(autoLogin(CSSModules(LoginPage, css)))
