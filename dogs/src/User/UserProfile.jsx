import React from 'react'
import { useParams } from 'react-router-dom'
import { Feed } from '../Components/Feed/Feed'

export const UserProfile = () => {
    const {user} = useParams()
  return (
    <section className='container mainContainer'>
        <h1 className='title'>{user}</h1>
        <Feed user={user} />
    </section>
  )
}
