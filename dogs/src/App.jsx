import React from 'react';
import './App.css'
import {BrowserRouter, Form, Route, Routes} from 'react-router-dom'
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import { UserStorage } from './UserContext';
import { User } from './User/User';
import { ProtectedRouter } from './Components/Helper/ProtectedRouter';
import { Photo } from './Components/Photo/Photo';
import { UserProfile } from './User/UserProfile';
import { NotFound } from './Components/NotFound';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login/*' element={<Login/>}/>
          <Route path='/conta/*' element={<ProtectedRouter> <User/> </ProtectedRouter>}/>
          <Route path='/foto/:id' element={<Photo/>}/>
           <Route path='/perfil/:user' element={<UserProfile/>}/>
           <Route path='*' element={<NotFound/>}/>
        </Routes> 
        <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );};

export default App;
