import {
      GET_FOLLOWERS_REQUEST,
      GET_FOLLOWERS_SUCCESS, 
      GET_FOLLOWERS_FAIL
} from "../actions/followersAction";

const INITIAL_STATE = {
      fetch: false,
      data: null,
      error: null
}
export function followerReducer(state=INITIAL_STATE, action) {
      switch (action.type) {
            case GET_FOLLOWERS_REQUEST:
                  return ({
                        ...state,
                        fetch: true
                  })
      
            case GET_FOLLOWERS_REQUEST:
                  return {
                        ...state,
                        fetch: true
                  }

            case GET_FOLLOWERS_SUCCESS:
                  return {
                        ...state,
                        data: action.response,
                        fetch: false
                  }
            case GET_FOLLOWERS_FAIL:
                  return {
                        ...state,
                        error: action.error,
                        fetch: false
                  }
            default:
                  return state;
      }
}