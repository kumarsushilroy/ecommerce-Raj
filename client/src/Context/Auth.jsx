import { createContext, useContext, useState, useEffect } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
 const [auth , setAuth] =  useState({
  user:null,
  token:''
 });

 useEffect(()=>{
  const data = localStorage.getItem('auth');
  if(data){
    const parseData = JSON.parse(data);
    setAuth({
      ...auth, 
      user:parseData.user,
      token:parseData.Token
    })
  }
  
 },[])
  return (
    <authContext.Provider value={[auth, setAuth]}>
        {children}
    </authContext.Provider>
  ) 
};


export const useAuthcontext = ()=>{
   return useContext(authContext)
} 