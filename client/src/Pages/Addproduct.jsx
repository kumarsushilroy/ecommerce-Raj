import React from 'react'

const Addproduct = () => {

    const getproduct = async()=>{

      
       let fetchProduct = await fetch(`http://localhost:4000/get/product`, {
        method:'get',
        headers:{
            'Content-Type': 'application/json',
             authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}` 
        },
    })
    fetchProduct = await fetchProduct.json();
    console.log(fetchProduct);
    }
  return (
    <div>
        <button className='border px-4 py-2' onClick={getproduct}>Get product</button>
    </div>
  )
}

export default Addproduct