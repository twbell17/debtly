import React, { Component } from 'react'

import UserDropdown from './user-dropdown'
import { Content, DropdownContainer } from './styles'


class UserLinks extends Component {
  render() {
    return (
      <Content>
        <DropdownContainer>
          <UserDropdown />
        </DropdownContainer>
      </Content>
    )
  }
}

export default UserLinks
