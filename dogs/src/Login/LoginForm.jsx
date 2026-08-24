import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Components/Forms/Input';
import {Button} from '../Components/Forms/Button'
import useForm from '../Hooks/useForm';

export const LoginForm = () => {
  const password = useForm();
   const username = useForm();

   function handleSubmit(e) {
     e.preventDefault();

     if(username.validate() && password.validate()){

     fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
       method: "POST",
       headers: {
         "Content-type": "application/json",
       },
       body: JSON.stringify(),
     })
       .then((response) => {
         console.log(response);
         return response.json;
       })
       .then((json) => {
         console.log(json);
       });
      }
   }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type='text' name='username' {...username}/>
        <Input label="Senha" type='password' name='password' {...password}/>
       
        <Button>Entrar</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}
