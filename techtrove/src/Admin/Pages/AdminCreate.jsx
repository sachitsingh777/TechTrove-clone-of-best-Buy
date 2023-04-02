import React, { useEffect, useState } from 'react'
import { Box,Input , Button,Flex,Image,Text,Stack,Grid,Center, Card, CardBody, CardFooter, Heading, FormControl, FormLabel, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,useDisclosure, IconButton } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAdminData, PostAdminData } from '../AdminRedux/Action';
import { AddIcon } from "@chakra-ui/icons";
const initial={
  id:"",
  fullname:"",
  email:"",
  phone:"",
  image:"",
  student:""
}
const AdminCreate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [text, settext] = useState(initial);
  const dispatch=useDispatch()
  const {Admin}=useSelector(store=>store.AdminReducer)
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

    useEffect(()=>{
      dispatch(GetAdminData())
    },[])
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
  console.log(Admin)
  return (
    <Box>
      <Button onClick={onOpen}>
      <IconButton
            aria-label="Add item"
            icon={<AddIcon />}
            colorScheme="blue"
            m={3}
          />
        
        Create Admin</Button>
        <Box>
        {Admin&& <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} p={"3"} gap={6}>
       
        
       {Admin.map((item) => (
      <Card
      direction={{ base: 'column', sm: 'row' }}
      
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={item.image}
        alt={item.name}
      />
    
      <Stack>
        <CardBody alignContent={"left"}>
          <Heading size='md'>{item.fullname}</Heading>
          <Heading py={6} size='sm'  >
           {item.email}
          </Heading>
          <Heading py={4} size='sm' >
           {item.phone}
          </Heading>
          <Heading py={4} size='sm' >
           {item.student}
          </Heading>
        </CardBody>
    
        <CardFooter>
          
        </CardFooter>
      </Stack>
    </Card>

       ))}
       
     </Grid>}
        </Box>
        <Center>
    <Box w="500px" >


    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Admin Profile Create</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4} mb={5}>
      <FormControl>
  <FormLabel>Full Name</FormLabel>
  <Input type="text" value={text.fullname} name="fullname" onChange={handleChange}/>
   </FormControl>
   <FormControl>
  <FormLabel>Email Address</FormLabel>
  <Input type="text" value={text.email} name="email" onChange={handleChange}/>
   </FormControl>
   <FormControl>
  <FormLabel>Mobile No:-</FormLabel>
  <Input type="text" value={text.phone} name="phone" onChange={handleChange}/>
   </FormControl>

   <FormControl>
  <FormLabel>Image </FormLabel>
  <Input type="file" value={text.image} name="image" onChange={upload}/>
   </FormControl>
   <FormControl>
  <FormLabel>Student ID</FormLabel>
  <Input type="text" value={text.student} name="student" onChange={handleChange}/>
   </FormControl>
   </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </Box></Center>
    </Box>
  )
}

export default AdminCreate