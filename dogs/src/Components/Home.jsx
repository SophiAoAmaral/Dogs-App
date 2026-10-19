import React from 'react'
import { Feed } from './Feed/Feed'
import { Head } from '../Components/Helper/Head'

export const Home = () => {
  return (
    <div className='container mainContainer'>
      <Head title="Fotos" description ="Home do site Dogs"/>
      <Feed/>
    </div>
  )
}
