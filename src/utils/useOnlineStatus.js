import {useEffect,useState} from "react";
// while writing the custom hook focus on input/output of the hook
const useOnlineStatus= ()=>{
    const[onlineStatus,setOnlineStatus] =useState(true);
    //check if offline
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    },[])
    // boolean value

    return onlineStatus;
}
export default useOnlineStatus;