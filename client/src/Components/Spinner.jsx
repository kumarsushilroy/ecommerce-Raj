import React, { useEffect, useReducer, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import { useNavigate, useLocation } from 'react-router-dom';

const Spinner = () => {

    const [count , setcount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
       const interval = setInterval(() => {
           setcount((prevValue)=> --prevValue)
       }, 1000);
       count === 0 && navigate('/login', {
        state:location.pathname
       });
       return ()=>clearInterval(interval);
    },[count, navigate, location])
  return (
    <div className=' flex flex-col items-center h-[100vh] justify-center border'>
    <h1 className='font-bold text-2xl'>redirecting to you in {count} seconds</h1>
        <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
    
    </div>
  )
}

export default Spinner