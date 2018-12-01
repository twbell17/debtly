const recoverPassword = (state, action) => ({
    ...state,
    recover: true
})
  

const handlers = {
    [TYPES.RECOVER_USER_PASSWORD_SUCCESS]: recoverPassword
}

const handlers = {
    [TYPES.RECOVER_USER_PASSWORD_SUCCESS]: recoverPassword
  }
  
  export default function(state = initialState, action = {}) {
    return handlers[action.type]
      ? handlers[action.type](state, action)
      : state
  }
  
  export const selector = {
    name: 'recovery',
    select(state) {
      return state.recovery
    }
  }