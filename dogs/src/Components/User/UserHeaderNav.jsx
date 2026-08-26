import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Feed from '../../Assets/feed.svg?react';
import Estatistica from '../../Assets/estatisticas.svg?react';
import Adicionar from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css'
import useMedia from '../Hooks/useMedia';


export const UserHeaderNav = () => {

    const navigate = useNavigate()
    const {UserLogout} = useContext(UserContext)
    const mobile = useMedia('(max-width:40rem')
    const [mobileMenu, setMobileMenu] = useState(false) 

    function handleLogout(){
        UserLogout();
        navigate('/login')
    };

    const {pathname} = useLocation();
    useEffect(()=>{

    },[pathname])

  return (
    <>
    { mobile &&
    <button 
    className={`${styles.mobileButton} ${ mobileMenu && styles.mobileButtonActive}`} 
    aria-label='Menu' 
    onClick={()=> setMobileMenu(!mobileMenu)}></button>
    }
    <nav className={`${ mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}  `}>
        
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
            <Sair/>
            {mobile && 'Sair'}
            
        </button>
    </nav>
    </>
  )
}
