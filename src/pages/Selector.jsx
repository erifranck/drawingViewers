import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFollowers } from 'redux/actions/followersAction'
import { randomSelector } from '../utils/randomSelector'

export const Selector = () => {
      const dispatch = useDispatch()
      const [selected, setSelected] = useState()
      const followers = useSelector(state => state.followers.data) || []
      useEffect(() => {
            dispatch(getFollowers())
      }, [])
      return (
            <div className="selector-wrapper">
                  {typeof selected === 'undefined' ?
                        <>
                              <div className="selector-content">
                                    {
                                          followers.map(item => (
                                                <img 
                                                      className="selector-image"
                                                      key={item.id}
                                                      src={item.url.trim()}
                                                      alt={item.name}
                                                />
                                          ))
                                    }
                              </div>
                              <button onClick={() => {
                                    setSelected(randomSelector(followers.length))
                              }}>
                                    SELECT RANDOM
                              </button>
                        </>
                  : (
                        <img
                              className="selector-active"
                              src={followers[selected].url.trim()} />
                  )}
            </div>
      )
}