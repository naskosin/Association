import  './Login.css';

import { loginPas } from '../../loginService';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStrage } from '../../useLocalStorage';

export const Login = ({onLogin})=>{
  let initialState = {user: "", email: "", accessToken:""}

const [useri, setItem ] = useLocalStrage('user', initialState)

  console.log(useri)
  const navigate = useNavigate();

  const pas = useRef('');
  const ema = useRef('');

  const  loginhandler=(e)=>
    {
        e.preventDefault(e);
        const formData = new FormData(e.currentTarget);
       //const email = formData.get('email');
       //onst password = formData.get('pas');

       const email = ema.current.value;
       const password = pas.current.value;
       console.log(email);
      
     loginPas(email, password).then(data=>{onLogin(data)})
      navigate("/")
      
    }


    return(<form onSubmit={loginhandler}>

       
        <label htmlFor='email'>Email</label>
        <input id='email'type='text' name='email' ref={ema}></input>
        <label htmlFor='pas'>Password</label>
        <input id='pas'type='password' name='pas' ref={pas}></input>


        <button>Login</button>
    </form>)
}