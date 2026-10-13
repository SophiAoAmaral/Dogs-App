import React from 'react'
import styles from './Input.module.css'
export const Input = ({label, type, name, value, onChange, error, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input 
      className={styles.input}
      type={type} 
      value={value} 
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      />

     { error &&  <p className={styles.error}>{error}</p>}
    </div>
  )
}
