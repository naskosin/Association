import "./Login.css";

import { loginPas } from "../../loginService";
import { useRef, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useNotifyContext } from "../../notifyContext";
import { useAuthContext } from "../../authContext";

export const Login = () => {
  const initialErrorState = { email: '', password: ''};
  const { user, setUser } = useAuthContext();
  const [errors, setErors] = useState(initialErrorState);
  const {notificationReactor} = useNotifyContext();

  const navigate = useNavigate();

  const pas = useRef("");
  const ema = useRef("");
  const emailhandler = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "email":
        if (!ema.current.value.match(/.+@[^@]+\.[^@]{2,}$/) ) {
          setErors((prevState)=>{return{...prevState, email: 'inCorrect'}}); 
          console.log('first')
        }else {
       
          setErors((prevState)=>{return{...prevState, email: 'filled'}});  
            console.log('second email')
        }
        break;
      case "password":
        if (pas.current.value.length === 0) {
          setErors((prevState)=>{return{...prevState, password: 'inCorrect'}})

          console.log(errors)
        }else {
          
            setErors((prevState)=>{return{...prevState, password:'filled'}});    console.log('second')
  
       
        }
        break;
    };


  };
  const loginhandler = (e) => {
    e.preventDefault(e);
    const formData = new FormData(e.currentTarget);
    //const email = formData.get('email');
    //onst password = formData.get('pas');

    const email = ema.current.value;
    const password = pas.current.value;

    loginPas(email, password)
    .then((data) => {
      console.log(data)
      setUser(data);
      navigate("/");
    })
    .catch((err)=>{notificationReactor(err)})
  }
    

 // .match(/.+@[^@]+\.[^@]{2,}$/)
  return (
    <form onSubmit={loginhandler}>
      <label htmlFor="email">Email</label>
      <input
        className={errors.email==='inCorrect' ? "errorInput" : ""}
        id="email"
        type="text"
        name="email"
        ref={ema}
        onBlur={emailhandler}
        style={errors.email==='inCorrect' ? { color: "red" } : { color: "blue" }}
      />
      {errors.email==='inCorrect' ? <p className="errorParagraph">Incorrect Email!</p> : ""}
      <label htmlFor="pas">Password</label>
      <input
              className={errors.password==='inCorrect' ? "errorInput" : ""}

        id="pas"
        type="password"
        name="password"
        onBlur={emailhandler}
        ref={pas}
        style={errors.password==='inCorrect' ? { color: "red" } : { color: "blue" }}
      />
      {errors.password==='inCorrect' ? <p className="errorParagraph">Incorrect Password!</p> : ""}
      <button disabled={!(errors.email==="filled" && errors.password==="filled") }>Login</button>
    </form>
  );
};
