import { createContext } from "react";
import { useContext, useState } from "react";

const NotifyContext = createContext();


export const NotifyContextProvider =({children})=>{

    const [notification, setNotification] = useState('nasko');

    const notificationReactor =(notification)=>{
        setNotification(notification);
        setTimeout(()=>{
            setNotification('')
        }, 3000)
    }

    return(
        <NotifyContext.Provider value = {{notification, notificationReactor}}>
            {children}
        </NotifyContext.Provider>
    )
};

export const useNotifyContext = ()=>{
    const notify = useContext(NotifyContext)
    return notify;
}