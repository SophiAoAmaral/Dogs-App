import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Feed from '../../Assets/feed.svg?react';
import Estatistica from '../../Assets/estatisticas.svg?react';
import Adicionar from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css'
export const UserHeaderNav = () => {
    const navigate = useNavigate()
    const {UserLogout} = useContext(UserContext)
    const [mobile, setMobile] = useState(null)

    function handleLogout(){
        UserLogout();
        navigate('/login')
    }
  return (
    <nav className={styles.nav}>
        
        <NavLink to='/conta' end>
        <Feed/>
       {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to='/conta/estatisticas'>
        <Estatistica/>
        {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to='/conta/postar'>
        <Adicionar/>
        {mobile && 'Adicionar Fotos'}
        </NavLink>
        <button onClick={handleLogout}>
            {''}
            {mobile && 'Sair'}
            <Sair/>
        </button>
    </nav>
  )
}
