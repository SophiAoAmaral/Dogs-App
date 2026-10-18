import React, { useContext } from 'react'
import {UserContext} from '../../UserContext'
import { PhotoCommentsForm } from './PhotoCommentsForm'


export const PhotoComments = (props) => {
   const {login} = useContext(UserContext)
  return (
    <div>
        {login && <PhotoCommentsForm id={props.id}/>} 
    </div>
  )
}
