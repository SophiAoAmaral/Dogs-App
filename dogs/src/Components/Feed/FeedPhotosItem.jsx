import React, { useEffect } from 'react'
import { useFetch } from '../Hooks/useFetch'
import styles from './FeedPhotosItem.module.css'
import { Image } from '../Helper/Image'

export const FeedPhotosItem = ({photo, setModalPhoto}) => {
      function handleClick(){
        setModalPhoto(photo)
      }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title}/>
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}
