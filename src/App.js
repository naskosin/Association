import {Register} from './Components/Register/Register';
import { useState } from 'react';
import { Header } from './Components/Header/Header';
import { Forum } from './Components/Forum';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Hamster } from './Components/Hamster';
import {  Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
const initialValue = {user:'', email:'', accessToken: ''}
  const [user, setUser]= useState(initialValue);
  console.log(user)

  const onLogin = (data)=>{
    localStorage.setItem('user', JSON.stringify(data));
   
    setUser(data);
  };

  const logOut = () =>{
    localStorage.setItem('user', initialValue);
    setUser(initialValue)

  }
  return (
    
   
    <div className="App">
      
      <Header logOut={logOut} user={user}/>
      <header className="App-header">
    
      <main>
      <Routes>
      <Route path='/' element={<Home/>} />
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
