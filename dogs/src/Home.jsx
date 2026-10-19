import React from 'react'
import { Feed } from './Components/Feed/Feed'
import { Head } from './Components/Helper/Head'

export const Home = () => {
  return (
    <section className='container mainContainer ' style={{paddingTop: '50px'}}>
      <Head title='Fotos' descrition='Home do site Dogs'/>
      <Feed/>
    </section>
  )
}
