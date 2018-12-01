import React from 'react'
import jwt from 'jsonwebtoken'

import * as actions from './login/actions'
import connected from '../../setup/connect'
import { selector as users } from '../../entities/users/reducer'
import authToken from '../../../utilities/local-storage'

const JwtProcess = WrappedComponent => {
  class JWTVerify extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        fetching: false
      }
    }
    componentWillMount() {
      const token = authToken.get()
      const { active } = this.props.users

      if (token && !active) {
        const decoded = jwt.decode(token)
        const currentTime = (new Date().getTime()) / 1000
        if (decoded.exp < currentTime) {
          authToken.remove()
        } else {
          this.setState({ fetching: true }, () => {
            this.props.loginActions.fetchUserByJWT()
          })
        }
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.users && nextProps.users.active) {
        this.setState({ fetching: false })
      }
    }

    render() {
      if (this.state.fetching) return null
      return <WrappedComponent {...this.props} />
    }
  }

  return connected([users], [actions])(JWTVerify)
}

export default JwtProcess
