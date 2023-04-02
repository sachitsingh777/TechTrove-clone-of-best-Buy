import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Switch,
  useColorMode,
  
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiUser,
  FiMenu,
} from 'react-icons/fi';
import {RiLogoutCircleRLine,RiFileListFill} from 'react-icons/ri'

import {
  DashboardLogo
} from "./Icons/Icons";
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import {Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { AdminLogout } from '../AdminRedux/AdminAuthReducer/action';

const LinkItems = [
  { name: 'Dashboard', icon: FiHome ,path:"/dashboard"},
  { name: 'Products', icon: FiTrendingUp,path:"/adminproduct" },
  { name: 'Order', icon: RiFileListFill,path:"/adminprofile" },
  { name: 'Admins', icon: FiUser,path:"/admincreate" },

];

export default function AdminSideBar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  const { toggleColorMode } = useColorMode();
 const navigate =useNavigate()
  const dispatch=useDispatch()

  const {auth}=useSelector(store=>store.adminAuthReducer)
 const handleLogout=()=>{
    navigate("/adminlogin")
    AdminLogout(dispatch)
    
 }
 console.log(auth)
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="cyan.400">
          TechTrove
        </Text>
         <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
       <Link to={"/adminlogin"} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
    
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        onClick={handleLogout}
        
        >
          <Icon
            mr="4"
            fontSize="35"
            bg="#4fd1c5"
            color="white"
            borderRadius={10}
            _groupHover={{
              color: 'white',
            }}
            as={RiLogoutCircleRLine}
          />
        Logout
        
      </Flex>
    </Link>
   
    </Box>
  );
};


const NavItem = ({ icon,path, children, ...rest }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
    
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="35"
            bg="#4fd1c5"
            color="white"
            borderRadius={10}
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};