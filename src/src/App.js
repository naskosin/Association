import {Register} from './Components/Register/Register';
import { useState } from 'react';
import { Articles } from './Components/Articles/Articles';
import { Header } from './Components/Header/Header';
import { Forum } from './Components/Forum';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Hamster } from './Components/Hamster';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import { useLocalStrage } from './useLocalStorage';

function App() {
const initialValue = {user:'', email:'', accessToken: ''}
  const [user, setUser]= useLocalStrage('user', initialValue);
  console.log(user)

  const onLogin = (data)=>{
    
   
    setUser(data);
  };

  const logOut = () =>{
   
    setUser(initialValue)

  }
  return (
    
   
    <div className="App">
      
      <Header logOut={logOut} user={user}/>
      <header className="App-header">
    
      <main>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path ='/articles' element={<Articles/>}/>
        <Route path='/forum' element={<Forum user={user}/>} />
        <Route path='/hamster' element={<Hamster/>}/>
        <Route path='/login'  element={<Login onLogin={onLogin}/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </main>
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
          Learn React
        
      </header>
    </div>
    
  );
  

}

export default App;
