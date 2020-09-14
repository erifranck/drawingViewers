import { SET_IMGUR_TOKEN } from "../actions/imgurActions"

const INITIA_STATE = {
      fetch: false,
      token: '',
      data: null
}

export function imgurReducer(state=INITIA_STATE, action) {
      switch (action.type) {
            case SET_IMGUR_TOKEN:
                  return ({
                        ...state,
                        token: action.token
                  })
            default:
                  return state
      }
}