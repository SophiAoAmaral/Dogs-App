import React from 'react'
import { useParams } from 'react-router-dom'
import { Feed } from '../Components/Feed/Feed'
import { Head } from '../Components/Helper/Head'


export const UserProfile = () => {
    const {user} = useParams()
  return (
    <section className='container mainContainer'>
        <Head  title={user} descrition='Home do site Dogs'/>
        <h1 className='title'>{user}</h1>
        <Feed user={user} />
    </section>
  )
}
