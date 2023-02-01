import {Register} from './Components/Register/Register';

import { Footer } from './Components/Footer/Footer';
import { Articles } from './Components/Articles/Articles';
import { Header } from './Components/Header/Header';
import { Forum } from './Components/Forum';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import {Images} from'./Components/Images/Images';
import { Claims } from './Components/Claims/Claims';
import { YourCarousel } from './Components/Yourcarousel/YourCarousel';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import { Procedures } from './Components/Procedures/Procedures';
import { AuthContextProvider } from './authContext';
import { Contacts } from './Components/Contacts/Contacts';
import { MyCarousel } from './Components/MyCarousel/MyCarousel';
import { Info } from './Components/Information/Info';
import { ArticleDetails } from './Components/Articles/ArticleDetails';
import {PageNotFound} from './Components/PageNotFound/PageNotFound';
import { Consultation } from './Components/Consultation/Consultation';
import { GuardRoute } from './Components/GuardComponent/GuardRoutes';
import { NotifyContextProvider } from './notifyContext';
import { CurrentInfo } from './Components/CurrentInformation/CurrentInfo';
import { ContactForm } from './Components/ContactForm/ContactForm';
import { Newsletter } from './Components/Newsletter/Newsletter';
function App() {

  
  //const onLogin = (data)=>{
  //  
  // 
  //  setUser(data);
  //};
//
  //const logOut = () =>{
  // 
  //  setUser(initialValue)
//
  //}




  return (
    <NotifyContextProvider>
   <AuthContextProvider>
    <div className="App">
      
      <Header  />
      <header className="App-header">
    
      <main>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/articles/:id' element={<ArticleDetails/>}/>
      <Route path='/procedures' element={<Procedures/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/info' element={<Info/>} />
      <Route path='/contacts' element={<Contacts/>} />
      <Route path='/mycarousel' element={<MyCarousel/>} />
      <Route path='/yourcarousel' element={<YourCarousel/>} />
      <Route path='/images'element={<Images/>} />
      <Route path='/consultation'element={<Consultation/>} />
      <Route path='/claims'element={<Claims/>} />
      <Route path='/currentinfo'element={<CurrentInfo/>} />
      <Route path='/news'element={<Newsletter/>} />
      <Route path='/contactForm'element={<ContactForm/>} />

      <Route path ='/articles' element={<Articles/>}/>
        <Route path='/forum' element={<Forum/>} />
      
        <Route element={<GuardRoute/>}>
       <Route path='/login'  element={<Login />}/> 
        <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
      </main>
       
       
        
      </header>
      <Footer/>
    </div>
    </AuthContextProvider>
    </NotifyContextProvider>
  );


}

export default App;
