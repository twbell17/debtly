import * as axiosWrapper from '../../../../utilities/axios-utils'

export const logout = {
  formatUrl: () => `/auth/logout`,
  request: (url) => axiosWrapper.put(url)
}
