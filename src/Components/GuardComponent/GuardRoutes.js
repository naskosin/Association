import { useAuthContext } from "../../authContext";
import {Outlet, Navigate} from 'react-router-dom';

export const GuardRoute =()=>{
    const {user} = useAuthContext()
   
        return user.user ?   <Navigate to='/'/>:<Outlet/>
   
    
}