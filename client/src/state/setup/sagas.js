import LoginSagas from '../processes/auth/login/actions'
import LogoutSagas from '../processes/auth/logout/actions'

import { all } from 'redux-saga/effects'

export default function* root() {
  let sagas = []
    .concat(LoginSagas)
    .concat(LogoutSagas)
  yield all(sagas)
}
