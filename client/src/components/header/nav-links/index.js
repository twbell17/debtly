import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import './index.css'

class HeaderDefaultLinks extends Component {
  render() {
    return [
      <Link key="login" to="/login">
        <div styleName="StyledButton">
          <Button basic>Login</Button>
        </div>
      </Link>,
      <Link key="create-account" to="/create-account">
        <div styleName="StyledButton">
          <Button basic>Sign Up</Button>
        </div>
      </Link>
    ]
  }
}

export default HeaderDefaultLinks
