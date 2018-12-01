import * as axiosWrapper from '../../../../utilities/axios-utils'

export const recover = {
  formatUrl: () => `/auth/recover`,
  request: (url, body) => axiosWrapper.post(url, body),
  serialize: (email, password) => ({ email, password })
}
