import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Forms/Input';
import {Button} from '../Forms/Button'
import useForm from '../Hooks/useForm';
import { UserContext } from '../../UserContext';


export const LoginForm = () => {
  const password = useForm();
  const username = useForm();

  const {userLogin} = useContext(UserContext)


  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};
