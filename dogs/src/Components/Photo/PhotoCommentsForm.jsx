import React, { useContext, useState } from 'react'
import Enviar from '../../Assets/enviar.svg?react'
import { useFetch } from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';


export const PhotoCommentsForm = ({id}) => {
   const [comment, setComment] = useState('');
   const {request, error} = useFetch();

  async function handleSubmit(e){
    e.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment})
    await request(url,options)
  }
  return (
    <form onSubmit={handleSubmit}>
        <textarea id='comment' name='comment' placeholder='Comente...' value={comment} onChange={({target}) => setComment(target.value) }/>

            <button>
                <Enviar/>
            </button>
    </form>
  )
}
