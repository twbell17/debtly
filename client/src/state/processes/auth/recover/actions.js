import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import TYPES from './types'

export const name = 'recoveryActions'

export function recover(email) {
    return {
      type: TYPES.RECOVER_USER_PASSWORD_REQUEST,
      email
    }
  }
  
  export function* executeRecover({ email }) {
    const url = api.recover.formatUrl()
    const body = api.recover.serialize(email)
    try {
      yield call(api.recover.request, url, body)
      yield put(recoverSuccess())
    } catch (res) {
      // eslint-disable-next-line noconsole
      console.error('Request failed with', res.error)
      // TODO add the IP address to a logger and set up something for multiple attempts DOS attack
      yield put(recoverSuccess())
    }
  }
  
  export function recoverSuccess() {
    return {
      type: TYPES.RECOVER_USER_PASSWORD_SUCCESS
    }
  }
  
  const sagas = [
    takeLatest(TYPES.RECOVER_USER_PASSWORD_REQUEST, executeRecover)
  ]
  
  export default sagas