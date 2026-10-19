import React, { useContext, useState } from 'react'
import Enviar from '../../Assets/enviar.svg?react'
import { useFetch } from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import {Error} from '../Helper/Error'
import styles from  './PhotoCommentsForm.module.css'

export const PhotoCommentsForm = ({id, setComments , single}) => {
   const [comment, setComment] = useState('');
   const {request, error} = useFetch();

  async function handleSubmit(e){
    e.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment})
    const {response, json} =  await request(url,options);
    if(response.ok){
      setComment('')
      setComments((commets) => [...commets, json]);
    }
  };


  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${single ? styles.single : ''}`}>
        <textarea  className={styles.textarea} id='comment' name='comment' placeholder='Comente...' value={comment} onChange={({target}) => setComment(target.value) }/>

            <button  className={styles.button}>
                <Enviar/>
            </button>
            <Error error={error}/>
    </form>
  )
}
