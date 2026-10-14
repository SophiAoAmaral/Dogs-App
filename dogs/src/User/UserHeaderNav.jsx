import React, { useState } from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../UserContext'
import Fotos from '../Assets/Feed.svg?react'
import Estatisticas from '../Assets/estatisticas.svg?react'
import Adicionar from '../Assets/adicionar.svg?react'
import Sair from '../Assets/sair.svg?react'
import styles from './UserHeaderNav.module.css'


export const UserHeaderNav = () => {
    const {userLogout} = useContext(UserContext);
    const [mobile, setMobile] = useState(null)
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <Fotos />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && "Estatisticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <Adicionar />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
  );
}
