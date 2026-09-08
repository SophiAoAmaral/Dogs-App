import React, { useEffect, useState } from 'react'
import { FeedModal } from './FeedModal'
import { FeedPhoto } from './FeedPhoto'

export const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages,setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true)
  useEffect(()=>{
    let await = false
    function infiniteScroll(e){
      if(infinite){
      const scroll = window.scrollY
      const height = document.body.offsetHeight - window.innerHeight
      if(scroll > height * .75 && !await){
        setPages((pages)=> [...pages, pages.length +1]);
        await = true;
        setTimeout(()=>{
          await= false
        }, 500)
      }
    }
    }
    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return() =>{
      window.removeEventListener('wheel', infiniteScroll);
    window.removeEventListener('scroll', infiniteScroll);
    }
  },[infinite])
  return (
    <div>
     {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
     {pages.map((page)=>(
       <FeedPhoto key={page} user={user} page={page} setInfinite={setInfinite} setModalPhoto={setModalPhoto}/>
     ))}
     
    </div>
  )
}
