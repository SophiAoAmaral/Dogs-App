import React, { useContext, useState, useRef, useEffect} from 'react'
import { UserContext } from '../../UserContext'
import { PhotoCommentsForm } from './PhotoCommentsForm';
import styles from './PhotoComents.module.css'

export const PhotoComents = (props) => {
  const [comments, setComments] = useState(()=> props.comments);
  const commentsSection = useRef(null)
  const {login} = useContext(UserContext);


  useEffect(()=>{
      if (commentsSection.current) {
    commentsSection.current.scrollTop =
      commentsSection.current.scrollHeight;
  }
  },[comments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments} >
        {comments.map((comment)=> <li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>)}
      </ul>

      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  )
}
