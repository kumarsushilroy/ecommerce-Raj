
import { useState, useEffect } from "react";
import { useAuthcontext } from "../../Context/Auth";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";

export const PrivateRoute = ()=>{
    const [ok , setok] = useState(false);
    const [auth, setAuth] = useAuthcontext();
    
    useEffect(()=>{
       const fetchRoute = async()=>{
        let fetchPrivate = await fetch('http://localhost:4000/user-auth', {
            method:'get',
            headers:{
                'Content-Type':'application/json',
                'authorization': `bearer ${auth?.token} `
            }
        });
        fetchPrivate = await fetchPrivate.json();
        console.log(fetchPrivate);
        if(fetchPrivate.ok){
            setok(true)
        }
        else{
            setok(false)
        }
        
       }
      if(auth?.token){
        fetchRoute();
      }
   
    },[auth?.token]);

    return ok ? <Outlet/> : <Spinner/>
}