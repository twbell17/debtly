import React from 'react'

import * as loginActions from './actions'
import connected from '../../../setup/connect'

export const loginWrapper = WrappedComponent => {
    class LoginProcess extends React.Component {
      handleClick = (email, password) => {
        this.props.loginActions.fetch(email, password)
      }
  
      render() {
        return <WrappedComponent login={this.handleClick} {...this.props} />
      }
    }
  
    return connected([], [loginActions])(LoginProcess)
}

export default loginWrapper