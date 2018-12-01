import React from 'react'
import { Redirect } from 'react-router-dom'

import * as actions from './actions'
import connected from '../../../setup/connect'
import { selector as users } from '../../../entities/users/reducer'

export const recoverProcess = WrappedComponent => {
  class Login extends React.Component {
    handleClick = (email, password) => {
      this.props.userAuthActions.recover(email)
    }

    render() {
      const { recover } = this.props.users
      if (recover)
        return <Redirect to={{ pathname: '/password-reset', state: { from: this.props.location } }} />

      return <WrappedComponent recoverProcess={this.handleClick} {...this.props} />
    }
  }

  return connected([users], [actions])(Login)
}

export default recoverProcess
