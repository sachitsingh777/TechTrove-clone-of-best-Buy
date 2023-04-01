import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AdminAddProduct } from '../AdminRedux/Action'

const initialState = {
    imgUrl: '',
    title: '',
    price: '',
    brand: '',
    category: '',
}
const Admin = () => {
    const [product, setproduct] = useState(initialState)
   const dispatch=useDispatch()


   const handleChange=(e)=>{
    const {name,value}=e.target;
    setproduct((prev)=>{
        return {...prev,[name]:value}
    })




   }
    const handleSubmit=(e)=>{
    e.preventdefault()
    dispatch(AdminAddProduct(product))
    setproduct(initialState)
 }
   
    return (
        <DIV>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" name="image" value={product.image} placeholder='image' onChange={(e)=>handleChange(e)} />
            <input type="text" name="title" value={product.title} placeholder='Title' onChange={(e)=>handleChange(e)} />
            <input type="text" name="price" value={product.price} placeholder='Price' onChange={(e)=>handleChange(e)} />
            <input type="text" name='brand' value={product.brand} placeholder='Brand' onChange={(e)=>handleChange(e)} />
            <input type="text" name="discount" value={product.discount} placeholder='Discount' onChange={(e)=>handleChange(e)} />
            <select onChange={(e)=>handleChange(e)} name='gender' value={product.gender}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
            <option value="female">Women</option>
                <option value="kids">Kids</option>
            </select>
            <button type='submit'>Submit</button>
      </form> 
       </DIV>
    )
}


const DIV = styled.div`
width:400px;
margin : 40px auto;
border :1px solid gray;


form{
    display:flex;
    flex-direction:column;
    gap:15px;
    align-items:center;
}

input {
    width: 80;
    height:40px;
   font-size:large
}

button {
    width:20%;
    height:35px;
}
`



export default Admin