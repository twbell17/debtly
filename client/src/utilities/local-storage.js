//TODO move this to an env variable
const config = {
    authLocalStorageKey: 'project-starter-dev-token'
}

const localStorage = {
    setItem(key, value) {
      window.localStorage.setItem(key, value)
    },
    getItem(key) {
      return window.localStorage.getItem(key)
    },
    removeItem(key) {
      window.localStorage.removeItem(key)
    }
}

export function isAvailable() {
  return !!localStorage.getItem(config.authLocalStorageKey)
}

export function get() {
  return isAvailable() ? localStorage.getItem(config.authLocalStorageKey) : null
}

export function set(val) {
  return localStorage.setItem(config.authLocalStorageKey, val)
}

export function remove() {
  return localStorage.removeItem(config.authLocalStorageKey)
}

export default { get, set, remove }
