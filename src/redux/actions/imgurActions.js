export const SET_IMGUR_TOKEN = 'SET_IMGUR_TOKEN'
export const IMGUR_IMAGES_REQUEST = 'IMGUR_IMAGES_REQUEST'
export const IMGUR_IMAGES_SUCCESS = 'IMGUR_IMAGES_SUCCESS'
export const IMGUR_IMAGES_FAIL = 'IMGUR_IMAGES_FAIL'

export const setToken = (token) => ({type: SET_IMGUR_TOKEN, token})
export const requestDraws = () => (dispatch) => {
      dispatch({type: IMGUR_IMAGES_REQUEST})
}