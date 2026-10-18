import React, { useState } from 'react'
import { FeedModal } from './FeedModal'
import { FeedPhoto } from './FeedPhoto'

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null)
  return (
    <div>
    {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />}
    <FeedPhoto setModalPhoto={setModalPhoto}/>
    </div>
  )
}
