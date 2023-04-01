import React, { useState } from 'react'
import { Box,Input , Button,Flex,Image,Text,Stack,Grid,Center } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { PostAdminData } from '../AdminRedux/Action';
const initial={
  id:"",
  fullname:"",
  email:"",
  phone:"",
  image:"",
  student:""
}
const AdminCreate = () => {

  const [text, settext] = useState(initial);
  const dispatch=useDispatch()
  const {admin}=useSelector(store=>store.AdminReducer)
  const handleChange=(e)=>{
    const {name,value}=e.target;
    settext(prev=>({...prev,[name]:value}))
  }
  const upload = (event) => {
    settext((prevData) => ({
      ...prevData,
      image: URL.createObjectURL(event.target.files[0]),
    }));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    let obj={
      fullname:text.fullname,
      email:text.email,
      phone:text.phone,
      image:text.image
    }
   dispatch(PostAdminData(obj))

  }
  return (
    <Box>
        <Box>
        {admin&& <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} p={"3"} gap={6}>
       
        
       {admin.map((item) => (
       <Flex>
         <Image w={"200px"} h={"200px"} objectFit={"contain"} src={item.image} alt={item.name}/>
         <Stack>
                       <Text>{item.fullname}...</Text>
                       <Text>{item.email}</Text>
                       <Text>{item.phone}</Text>
                     </Stack>
       </Flex>

       ))}
       
     </Grid>}
        </Box>
        <Center>
    <Box w="500px" >
      <form onSubmit={handleSubmit} > 
      <Input type="text" value={text.fullname} name="fullname" onChange={handleChange}/>
      <Input type="text" value={text.email} name="email" onChange={handleChange}/>
      <Input type="text" value={text.phone} name="phone" onChange={handleChange}/>
      <Input type="file" value={text.image} name="image" onChange={upload}/>
      <Input type="text" value={text.student} name="student" onChange={handleChange}/>
      <Button type="submit">Submit</Button>
      </form>
    </Box></Center>
    </Box>
  )
}

export default AdminCreate