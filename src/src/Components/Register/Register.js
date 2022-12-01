import  './Register.css';

import { register} from '../../loginService';
import { useRef } from 'react';

export const Register = ()=>{


  const nasko = Promise.resolve(123);
  nasko.then(data=>console.log(data));
  const use = useRef('');
  const pas = useRef('');
  const ema = useRef('');

  const  loginhandler=(e)=>
    {
        e.preventDefault(e);
        const formData = new FormData(e.currentTarget);
       //const email = formData.get('email');
       //onst password = formData.get('pas');
       const user = use.current.value;
       const email = ema.current.value;
       const password = pas.current.value;
       console.log(email)
       register(user, email, password).then(data=>{console.log(data)});
       e.target.reset()
    }


    return(<form onSubmit={loginhandler} className='colors'>

<label htmlFor='user'>User</label>
        <input id='user'type='text' name='user' placeholder="Nasko"></input>
        <label htmlFor='email'>Email</label>
        <input id='email'type='text' name='email' ref={ema}></input>
        <label htmlFor='pas'>Password</label>
        <input id='pas'type='password' name='pas' ref={pas}></input>


        <button>Login</button>
    </form>)
}