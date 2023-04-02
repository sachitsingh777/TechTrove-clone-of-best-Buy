import React,{useEffect}from "react";
import {useDispatch, useSelector} from "react-redux";
import { GetOrdersData } from "../AdminRedux/Action";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const AdminProfile=()=>{
    const dispatch=useDispatch();
    const {orders}=useSelector(store=>store.AdminReducer)

    useEffect(()=>{
        dispatch(GetOrdersData())
    },[])
    console.log(orders)
    return (
        <TableContainer >
        <Table variant='striped' colorScheme='teal' w={'100%'}>
          
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Title</Th>
             <Th>Category</Th>
             <Th>Brand</Th>
             <Th>Price</Th>
            <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
        {orders?.map((product,i)=>(
           <Tr key={product.id}>
              <Td>{i+1}</Td>
              <Td>{product.title.substr(0, 29)}...</Td>
              <Td>{product.category}</Td>
              <Td>{product.brand}</Td>
              <Td>{product.price}</Td>
              <Td>pending</Td>
            </Tr>
        ))}
           
           
          </Tbody>
        </Table>
      </TableContainer>
    )
}

export default AdminProfile