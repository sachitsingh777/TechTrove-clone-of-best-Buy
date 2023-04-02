import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AdminAddProductData ,AdminGetProduct } from '../AdminRedux/Action'
import {
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
  import { AddIcon } from "@chakra-ui/icons";

const initialState = {
    imgUrl: '',
    title: '',
    price: '',
    brand: '',
    category: '',
}
const AdminAddProduct = () => {
    const [product, setproduct] = useState(initialState)
   const dispatch=useDispatch()
   const { isOpen, onOpen, onClose } = useDisclosure()
   
   const initialRef = React.useRef(null)
   const finalRef = React.useRef(null)
 

   const handleChange=(e)=>{
    const {name,value}=e.target;
    setproduct((prev)=>{
        return {...prev,[name]:value}
    })




   }
   
const handleSubmit=()=>{
    dispatch(AdminAddProductData(product)).then(()=>dispatch(AdminGetProduct))
    setproduct(initialState)
 }
   
    
   
    return (
        <>
       
      <Button onClick={onOpen}><IconButton
            aria-label="Add item"
            icon={<AddIcon />}
            colorScheme="blue"
            m={3}
          />Add Product</Button>
      

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input ref={initialRef} type="text" name="image" value={product.image}  onChange={(e)=>handleChange(e)}  />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              <Input type="text" name="title" value={product.title}  onChange={(e)=>handleChange(e)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input type="number" name="price" value={product.price}  onChange={(e)=>handleChange(e)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Brand</FormLabel>
              <Input type="text" name='brand' value={product.brand} onChange={(e)=>handleChange(e)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input  type="text" name="category" value={product.category}onChange={(e)=>handleChange(e)}  />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Add Product
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    
       
       </>
    )
}


export default AdminAddProduct