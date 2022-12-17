import { createContext, useContext } from "react";
import {useLocalStrage} from './useLocalStorage'

const authContext = createContext();

const initialState = {user:'', email:'', accessToken: ''}

export const AuthContextProvider = ({children})=>{

    const [user, setUser] = useLocalStrage('user', initialState);
const logOut =()=>{
    setUser(initialState)
}
    return <authContext.Provider value={{user, setUser, logOut}}>
        {children}
    </authContext.Provider>
}

export const useAuthContext = ()=>{
     const userContext = useContext(authContext);
     return userContext;
}