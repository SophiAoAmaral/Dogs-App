import React, { useEffect, useState } from 'react'
import { FeedModal } from './FeedModal'
import { FeedPhoto } from './FeedPhoto'

export const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [ infinite, setInfinite] = useState(true)
  useEffect(()=>{
    let wait = false
    function infiniteScrool(){
      if(infinite){
      const scroll = window.scrollY
      const height = document.body.offsetHeight - window.innerHeight
      if(scroll > height * 0.75 && !wait){
        setPages((pages) => [...pages, pages.length +1])
        wait = true;
        setTimeout(()=>{
          wait = false
        }, 500)

      }
    }
  }
    window.addEventListener('wheel',infiniteScrool)
    window.addEventListener('scroll',infiniteScrool)

    return() =>{
      window.removeEventListener('wheel',infiniteScrool)
      window.removeEventListener('scroll',infiniteScrool)
    }
  },[infinite])


  return (
    <div style={{paddingTop: '20px'}}>
    {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />}
    {pages.map((page) => (
       <FeedPhoto user={user} key={page} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite}/>
    ))}
    
    </div>
  )
}
