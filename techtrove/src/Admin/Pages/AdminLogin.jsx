import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {  useLocation, useNavigate } from 'react-router-dom'

import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Adminlogin } from '../AdminRedux/AdminAuthReducer/action';

const AdminLogin = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

const location=useLocation()

const navigate=useNavigate()
  const dispatch=useDispatch()
 const {auth}=useSelector((store)=>store.adminAuthReducer)

  const handleSubmit=(e)=>{
      e.preventDefault()
      const userData={
          email,password
      }
      dispatch(Adminlogin(userData)).then(()=>{
        navigate("/dashboard")
      })
      
      setEmail('')
      setPassword('')
  }
  // if(auth){
  //   navigate("/dashboard")
  // }
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Admin Log In</Heading>
        <Input
          placeholder="Enter Your Email"
          type="email"
          variant="filled"
          mb={3}
          name="email" value={email} 
         onChange={(e)=>setEmail(e.target.value)}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
          onChange={(e)=>setPassword(e.target.value)}
          name="password" value={password}
        />
        <Button onClick={handleSubmit} colorScheme="teal" mb={8}>
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default AdminLogin;
