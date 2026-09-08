import React, { useState } from 'react'
import styles from './Image.module.css'

export const Image = ({alt, ...props}) => {
    const [skeleton, setSketelton] = useState(true)

    function handleLoad({target}){
        setSketelton(false)
        target.style.opacity = 1
    }
  return (
    <div className={styles.wrapper}>
       {skeleton && <div className={styles.skeleton}></div>}
        <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  )
}
