import React from 'react'
import styles from './Footer.module.css'
import Dog from '../Assets/dog-footer.svg?react'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dog/>
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}
