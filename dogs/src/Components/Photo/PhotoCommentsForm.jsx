import React, { useState } from 'react'
import Enviar from '../../Assets/enviar.svg?react';
import { useFetch } from '../Hooks/useFetch';
import { COMENT_POST } from '../../api';
import { Error } from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';


export const PhotoCommentsForm = ({id, setComments}, single) => {
   const {request, error} =  useFetch()
    const [comment, setComment] = useState();
  async  function handleSubmit(e){
        e.preventDefault()
        const {url, options} = COMENT_POST(id, {comment})
       const {response, json} =   await request(url, options)
       if(response.ok){
        setComments('')
        setComments((comments) =>[...comments, json])
       }
    }
  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
        <textarea className={styles.textarea}  id='comment' name='comment' placeholder='comente...'  value={comment} onChange={({target}) => setComment(target.value)}></textarea>
        <button className={styles.button} >
            <Enviar/>
        </button>
        <Error error={error} />
    </form>
  )
}
