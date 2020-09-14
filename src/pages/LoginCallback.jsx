import React from 'react';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux'
import { setToken } from '../redux/actions/imgurActions';

export const LoginCallback = () => {
      const history = useHistory()
      const dispatch = useDispatch()
      const params = new URLSearchParams(window.location.href.split('#')[1])
      const accessToken = params.get('access_token');
      React.useEffect(() => {
            if(accessToken) {
                  dispatch(setToken(accessToken))
                  history.push('/selector')
            } else {
                  history.push('/')
            }
      }, [])
      return null 
}
