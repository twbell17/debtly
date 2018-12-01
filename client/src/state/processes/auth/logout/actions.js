import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import LocalStorage from '../../../../utilities/local-storage'
import TYPES from './types'

export const name = 'logoutActions'

export function logoutUser() {
  return {
    type: TYPES.LOGOUT_USER_REQUEST
  }
}

export function* executeLogoutUser() {
  const url = api.logout.formatUrl()
  try {
    yield call(api.logout.request, url)
    LocalStorage.remove()
    yield put(logoutUserSuccess())
  } catch (err) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', err)
  }  
}

export function logoutUserSuccess(data) {
  return {
    type: TYPES.LOGOUT_USER_SUCCESS
  }
}

const sagas = [
  takeLatest(TYPES.LOGOUT_USER_REQUEST, executeLogoutUser)
]

export default sagas

