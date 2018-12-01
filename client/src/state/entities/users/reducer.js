import TYPES from '../../processes/auth/login/types'

export const initialState = {
  active: {
    admin: false
  },
  entities: []  
}

const loginUser = (state, { admin, user }) => ({
  ...state,
  active: {
    ...user,
    admin
  }
})


const handlers = {
  [TYPES.FETCH_USER_TOKEN_SUCCESS]: loginUser,
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'users',
  select(state) {
    return state.users
  }
}