import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

class LandingMenu extends Component {
  render() {
    return (
      <Container>
        <Link to="/landing">Account Summary</Link>
        <Link to="/landing/details">Debt Details</Link>
        <Link to="/landing/payment">Repayment Options</Link>
      </Container>
    )
  }
}

export default LandingMenu
