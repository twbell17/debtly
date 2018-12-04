import React, { Component } from 'react'

import UserDropdown from './user-dropdown'
import { Content, DropdownContainer, DisplayName } from './styles'


class UserLinks extends Component {
  render() {
    return (
      <Content>
        <DropdownContainer>
          <DisplayName>
            {`${this.props.firstName} ${this.props.lastName}`}
          </DisplayName>
          <UserDropdown />
        </DropdownContainer>
      </Content>
    )
  }
}

export default UserLinks
