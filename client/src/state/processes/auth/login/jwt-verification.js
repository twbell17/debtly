import React from 'react'
import jwt from 'jsonwebtoken'
import { Redirect, withRouter } from 'react-router-dom'

import * as loginActions from './actions'
import connected from '../../../setup/connect'
import { selector as users } from '../../../entities/users/reducer'
import authToken from '../../../../utilities/local-storage'
import { unsecuredRoutes } from '../../../../ui'


const AutoLoginOrRedirect = WrappedComponent => {
  class JWTVerify extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        fetching: true,
        loaded: false
      }
    }

    componentDidMount() {
      const token = authToken.get()
      const user = this.props.users.active
      if (token && !user.userHandle) {
        const decoded = jwt.decode(token)
        const currentTime = (new Date().getTime()) / 1000
        if (decoded.exp < currentTime) {
          authToken.remove()
          this.setState({ fetching: false, loaded: true })
        } else {
            this.props.loginActions.fetchUserByJWT()
        }
      } else {
        this.setState({ fetching: false, loaded: true })
      }
    }

    componentWillReceiveProps(nextProps) {
      if (this.state.fetching && !nextProps.users.loading) {
        this.setState({ fetching: false, loaded: true })
      }
    }

    render() {
      const user = this.props.users.active
      if (this.state.fetching) {
        return null
      }      
      
      if(this.state.loaded) {
        const { pathname } = this.props.location
        const unsecured = unsecuredRoutes.indexOf(pathname) >-1
        const { history, location, loginActions, match, users, ...originalProps } = this.props
        
        if(typeof user.userHandle === 'undefined') {
          if(unsecured) { return <WrappedComponent {...originalProps} /> } 

          return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
        }

        if(user.userHandle) {
          if(unsecured){
            return <Redirect to={{ pathname: '/landing', state: { from: this.props.location } }} />  
          } 
          return <WrappedComponent {...originalProps} />
        }
      }
    }
  }

  return withRouter(connected([users], [loginActions])(JWTVerify))
}

export default AutoLoginOrRedirect
