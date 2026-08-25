import React, { use, useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dogs from '../Assets/dogs.svg?react';
import { UserContext } from '../UserContext';

export const Header = () => {
  const {data , UserLogout} = useContext(UserContext);
  
    console.log('DATA DO USER:', data);
  return (
    
    <header className={styles.header}>
          <nav className={`${styles.nav} container`}>
            <Link className={styles.logo} to="/" aria-label="Dogs - Home">
              <Dogs />
            </Link>
            {data ? (
              <Link className={styles.login} to="/conta">
                {data.nome}
                <button onClick={UserLogout}>Sair</button>
              </Link>
            ) : (
              <Link className={styles.login} to="/login">
                Login / Criar
              </Link>
            )}
          </nav>
        </header>
  )
}
