
import React, { useState } from 'react'
import Layout from '../Components/Layout/Layout';

const Register = () => {


   const [username , setusername] = useState();    
   const [email , setemail] = useState();    
   const [password , setpassword] = useState();
   
   const obj = {username, email, password};
//    console.log(obj)

   const handleSubmit = async (e)=>{
    e.preventDefault();
    let createUser = await fetch('http://localhost:4000/create/user', {
        method:'post',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    });
    createUser = await createUser.json();
    console.log(createUser);
    localStorage.setItem('user' , JSON.stringify(createUser.newUser));
    localStorage.setItem('token' , JSON.stringify(createUser.Token))
   }

  return (
    <Layout>
    <div>
        <form onSubmit={handleSubmit} className='w-[400px] mx-auto mt-12 border'>
            <div>
                <label className='block' htmlFor="">Username</label>
                <input onChange={(e)=>setusername(e.target.value)} className='border' type="text" />
            </div>

            <div className='my-5'>
                <label className='block' htmlFor="">Email</label>
                <input onChange={(e)=>setemail(e.target.value)} className='border' type="text" />
            </div>

            <div>
                <label className='block' htmlFor="">Password</label>
                <input onChange={(e)=>setpassword(e.target.value)} className='border' type="text" />
            </div>

            <button className='border mt-6 outline-none' type="submit">Submit</button>
        </form>
    </div>
    </Layout>
  )
}

export default Register