import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dog from '../Assets/dog.svg?react'

export const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={` ${styles.nav} container`}>
          <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
            <Dog/>
          </Link>
            <Link to='/login' className={styles.login}>Login/Criar</Link>
        </nav>
    </header>
  )
}
