 import LoginProcess from './login-process'
 import AutoLoginOrRedirectProcess from './jwt-verification'

export const Login = LoginProcess
export const AutoLoginOrRedirect = AutoLoginOrRedirectProcess

export default {
  Login,
  AutoLoginOrRedirect
}