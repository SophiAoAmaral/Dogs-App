import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
import Fotos from '../Assets/Feed.svg?react'
import Estatisticas from '../Assets/estatisticas.svg?react'
import Adicionar from '../Assets/adicionar.svg?react'
import Sair from '../Assets/sair.svg?react'
import styles from './UserHeaderNav.module.css'
import { useMedia } from '../Hooks/useMedia'


export const UserHeaderNav = () => {
    const {userLogout} = useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');
    const navigate = useNavigate();
    const [mobilemenu, setMobileMenu] = useState(false);
   const {pathname} =  useLocation()

      useEffect(()=>{
        setMobileMenu(false)
      },[pathname])
  

    function handleLogout(){
        userLogout();
         navigate('/login');
    }
  return (
    <>
    {mobile &&  <button aria-label='menu' className={`${styles.mobileButton} ${ mobilemenu && styles.mobileButtonActive}`} onClick={()=>setMobileMenu(!mobilemenu) }></button>}
   
    <nav className={`${mobile ? styles.navMobile : styles.nav } ${mobilemenu && styles.navMobileActive}`}>
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
      <button onClick={handleLogout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
    </>
  );
}
