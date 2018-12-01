import React from 'react'
import { Redirect } from 'react-router-dom'

import * as loginActions from './actions'
import connected from '../../../setup/connect'
import { selector as users } from '../../../entities/users/reducer'
import JWTVerify from '../jwt-verification'

export const login = WrappedComponent => {
    class Login extends React.Component {
      handleClick = (email, password) => {
        this.props.userAuthActions.fetch(email, password)
      }
  
      render() {
        return <WrappedComponent login={this.handleClick} {...this.props} />
      }
    }
  
    return connected([], [loginActions])(autoLogin(Login))
}

export const autoLogin = WrappedComponent => {
  class AutoLogin extends React.Component {
    render() {
      const user = this.props.users.active
      if (user.userHandle)
        return <Redirect to={{ pathname: '/landing', state: { from: this.props.location } }} />

      return <WrappedComponent {...this.props}/>
    }
  }

  return connected([users], [loginActions])(JWTVerify(AutoLogin))
}

export const protectedRoute = WrappedComponent => {
  class PrivateRoute extends React.Component {
    render() {
      const user = this.props.users.active
      if (!user.userHandle)
        return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />

      return <WrappedComponent {...this.props} />
    }
  }

  return connected([users], [])(JWTVerify(PrivateRoute))
}

export default protectedRoute
