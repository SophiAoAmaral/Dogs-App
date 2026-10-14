import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dog from '../Assets/dog.svg?react'
import { UserContext } from '../UserContext'

export const Header = () => {
  const {data} = useContext(UserContext)
  return (
    <header className={styles.header}>
        <nav className={` ${styles.nav} container`}>
          <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
            <Dog/>
          </Link>
            {data ? (
              <Link to='/conta' className={styles.login}>{data.nome}</Link>
            ):(
              <Link to='/login' className={styles.login}>Login/Criar</Link>
            )}
            
        </nav>
    </header>
  )
}
