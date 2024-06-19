import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const UpdateProduct = () => {
  const {id} = useParams();
  const [productname,setProductname]= useState();
  const [description,setDescription]= useState();
  const [price,setPrice]= useState();
  const [brandrating,setBrandrating]= useState();
  const [imageurl,setImageurl]= useState();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:3001/getProduct/'+id)
    .then(res=>{console.log(res)
      setProductname(res.data.productname)
      setDescription(res.data.description)
      setPrice(res.data.price)
      setBrandrating(res.data.brandrating)
      setImageurl(res.data.imageurl)
     })
    .catch(err => console.log(err))
},[])

const Update = (e) =>{
   e.preventDefault()
   axios.put('http://localhost:3001/updateProduct/'+id,{productname,description,price,brandrating,imageurl})
    .then(result => {
      console.log(result)
      navigate('/dashboard')
    })
    .catch(err => console.log(err))
}
  return (
    <>
    <div>UpdateProduct</div>
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
         <form onSubmit={Update}>
          <h2>Update product</h2>
          <div className='mb-2'>
            <label htmlFor=''>Product Name</label>
            <input type="text" placeholder='Enter product name' className='form-control'
            value={productname} onChange={(e) => setProductname(e.target.value)}/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Description</label>
            <input type="text" placeholder='Enter product description' className='form-control'
            
            value={description} onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Price</label>
            <input type="text" placeholder='Enter product price' className='form-control'
            value={price}  onChange={(e) => setPrice(e.target.value)}/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Brand Rating</label>
            <input type="text" placeholder='Enter product rating' className='form-control'
            value={brandrating} onChange={(e) => setBrandrating(e.target.value)}/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Image Url</label>
            <input type="text" placeholder='Enter product image Url' className='form-control'
            value={imageurl} onChange={(e) => setImageurl(e.target.value)}/>
          </div>
          <button className='btn btn-success'>Update</button>
         </form>
      </div>
    </div>
  </>
  )
}

export default UpdateProduct;