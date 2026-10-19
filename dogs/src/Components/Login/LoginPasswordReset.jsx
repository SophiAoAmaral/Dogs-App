import React, { useEffect, useState } from 'react'
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useFetch } from '../../Hooks/useFetch';
import { useForm } from '../../Hooks/useForm';
import { PASSOWORD_RESET } from '../../api';
import { Error } from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import { Head } from '../Helper/Head';

export const LoginPasswordReset = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState("");
  const password = useForm();
  const {error, loading, request} = useFetch();
  const navigate = useNavigate();
  useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key')
    const login = params.get('login');
    

    if(key) setKey(key);
    if(login) setLogin(login)
  },[]);


  async function handleSubmit(e) {
    e.preventDefault();
    if(password.validate()){
    const {url, options} = PASSOWORD_RESET({
      login, key, password: password.value
    })

   const {response} = await request(url, options)
   if(response.ok) navigate('/login')
  }
  }
  return (
    <div>
      <Head title='Resete a senha'/>
      <h1 className='title'>Resete a senha</h1>

      <form onSubmit={handleSubmit}>
        <Input label='Nova Senha' type='password' name='password' {...password}/>
        {loading ? <Button disabled >Resetando</Button> : <Button>Resetar</Button>}
        
      </form>

      <Error error={error}/>
    </div>
  )
}
