import React, { useEffect } from 'react'
import { useFetch } from '../Hooks/useFetch'
import styles from './FeedPhotosItem.module.css'

export const FeedPhotosItem = ({photo}) => {
    
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}
