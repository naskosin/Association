import {useState} from 'react';




export const useLocalStrage=(key, initialState)=>{

    const [user, setUser] = useState(()=>{
        let item = localStorage.getItem(key);
       return item ? JSON.parse(item ):  initialState;
    });

    const setItem = (value)=>{
        localStorage.setItem(key, JSON.stringify(value));
        setUser(value)
    }


    return [user, setItem]
}