import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { StyledButton } from './styles'

class HeaderDefaultLinks extends Component {
  render() {
    return [
      <Link key="login" to="/login">
        <StyledButton>
          <Button basic>Login</Button>
        </StyledButton>
      </Link>,
      <Link key="create-account" to="/create-account">
        <StyledButton>
          <Button basic>Sign Up</Button>
        </StyledButton>
      </Link>
    ]
  }
}

export default HeaderDefaultLinks
