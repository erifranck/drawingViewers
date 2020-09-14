import {getFollowersRequest} from 'services/firebaseService'
export const GET_FOLLOWERS_REQUEST = 'GET_FOLLOWERS_REQUEST'
export const GET_FOLLOWERS_SUCCESS = 'GET_FOLLOWERS_SUCCESS'
export const GET_FOLLOWERS_FAIL = 'GET_FOLLOWERS_FAIL'

export const getFollowers = () => (dispatch) => {
      dispatch({type: GET_FOLLOWERS_REQUEST})
      getFollowersRequest().then((response) => {
            dispatch({type: GET_FOLLOWERS_SUCCESS, response})
      })
}