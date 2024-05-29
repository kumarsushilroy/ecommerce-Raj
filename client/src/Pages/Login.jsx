import React, { useState } from 'react'
import Layout from '../Components/Layout/Layout';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthcontext } from '../Context/Auth';


const Login = () => {

  
const navigate = useNavigate();
const location = useLocation();

  const [email , setemail] = useState();
  const [password, setpassword] = useState();

  const [auth , setAuth] = useAuthcontext();

  const obj = {email, password};

  const handleSubmit = async(e)=>{
    e.preventDefault();
    let loginUser = await fetch('http://localhost:4000/login/user', {
      method:'post',
      body:JSON.stringify(obj),
      headers:{
        'Content-Type': 'application/json',
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    loginUser = await loginUser.json();
    console.log(loginUser);
    
    if(loginUser.Token){
      setAuth({
        ...auth, 
        user:loginUser.user,
        token:loginUser.Token
      })
      localStorage.setItem('auth', JSON.stringify(loginUser))
      navigate(location.state ||'/')
      alert('Login Successfully !')
    }else{
      alert('unAuthorized User')
    }
  }
  return (
    <Layout>
    <div className='w-[400px] mx-auto mt-12 border shadow p-8 h-[400px]'>
      <form onSubmit={handleSubmit} className=''>
        <h1 className='text-center font-bold text-2xl my-3'>Login Form</h1>
        <div>
        <label className='block' htmlFor="">Email</label>
        <input onChange={(e)=>setemail(e.target.value)} type="text" className='outline-none border p-2 w-full' />
        </div>

        <div className='my-4'>
        <label className='block' htmlFor="">Password</label>
        <input onChange={(e)=>setpassword(e.target.value)} type="text" className='outline-none p-2 border w-full' />
        </div>
        <div>
          <button className='border px-4 py-2 rounded w-full bg-gray-200 font-bold hover:opacity-80 mt-5' type='submit'>Submit</button>
        </div>
      </form>
    </div>
    </Layout>
  )
}

export default Login