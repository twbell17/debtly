export function wrapAsyncFunc (asyncRoute) {
  return function routeWrapper(req, res, next) {
    return asyncRoute(req, res, next).catch(next)
  }
}

export default wrapAsyncFunc
