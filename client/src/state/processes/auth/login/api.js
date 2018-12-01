import * as axiosWrapper from '../../../../utilities/axios-utils'

export const fetch = {
  formatUrl: () => `/auth/login`,
  request: (url, body) => axiosWrapper.post(url, body),
  serialize: (email, password) => ({ email, password })
}

export const fetchByJWT = {
  formatUrl: () => `/auth/jwt/login`,
  request: (url) => axiosWrapper.get(url)
}