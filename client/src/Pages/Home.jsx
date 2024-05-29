import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useAuthcontext } from '../Context/Auth'


const Home = () => {
    const [Auth, setAuth] = useAuthcontext();
    
    
  return (
    <Layout>
       <p>{JSON.stringify(Auth, null, 6)}</p>
       
        <div>Home</div>

            
            
        
    </Layout>
  )
}

export default Home