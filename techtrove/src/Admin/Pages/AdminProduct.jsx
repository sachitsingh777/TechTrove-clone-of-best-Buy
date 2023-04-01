import { Button,
   Box,
    Grid,
     GridItem,
      Image,
       Text,
        Flex,
         useDisclosure,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  useBreakpointValue,
  Stack, Checkbox} from '@chakra-ui/react';
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import { SearchIcon, AddIcon, RepeatIcon } from "@chakra-ui/icons";
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AdminGetProduct } from '../AdminRedux/Action';
import axios from 'axios';
import useThrottle from '../hook/useThrottle';
import EditProduct from '../AdminComponent/EditProduct';
import { useSearchParams } from 'react-router-dom';
import AdminSideBar from '../AdminComponent/AdminSideBar'


const AdminProduct = () => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchValue, setSearchValue] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [query, setQuery] = useState('')
  const [listing, setlisting] = useState([])
  const [loading, setLoading] = useState(false)
  const searchQuery = useThrottle(query, 1000)
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [searchParams,setSearchParams]=useSearchParams([])
  const initialCategory=searchParams.getAll("category")
   
  const initialSort=searchParams.getAll("order")
  const [order,setOrder]=useState(initialSort||"")

    const [category,setCategory]=useState(initialCategory||[])
  const handleChange=(e)=>{
    let newCategory=[...category]
    const value=e.target.value;
 if(newCategory.includes(value)){
    newCategory=newCategory.filter((el)=>el!==value)
 }else{
    newCategory.push(value)
 }

     setCategory(newCategory);
 }
  const handleSort=(e)=>{
   setOrder(e.target.value)
  }

  let obj={
    params:{
        category:searchParams.getAll("category"),
         

      }
 }


  const { products } = useSelector(store => store.AdminReducer)
  useEffect(() => {
    setlisting('')
    setLoading(true)
    dispatch(AdminGetProduct(searchQuery,obj))
    setLoading(false)
  }, [searchQuery])

  useEffect(()=>{
    let params={
        category
    }
    order&&(params.order=order);
    setSearchParams(params)
 },[category,order])
  return (
    <>
    <Box>
      <Flex>
       <Box>
        <AdminSideBar/>
       </Box>
       <Box>
      <Box>
        <Flex
          alignItems="center"
          justifyContent={isMobile ? "space-between" : "flex-start"}
          flexDirection={isMobile ? "column" : "row"}
        >
          <InputGroup maxW="md">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>
          {!isMobile && (
            <>
              <Spacer />
              <Select
                placeholder="Sort by"
                value={selectedSortOption}
              
                maxW="xs"
                ml={4}
              >
                <option value="option1">Low to High</option>
                <option value="option2">Option 2</option>

              </Select>
              <Spacer />
              <Menu>
       <MenuButton as={Button} >
    Actions
        </MenuButton>
      <MenuList>
    <MenuItem><Checkbox  value={"electronic"} onChange={handleChange} isChecked={category.includes("electronic")}>Electronic</Checkbox></MenuItem>
    <MenuItem><Checkbox  value={"TV"} onChange={handleChange} isChecked={category.includes("TV")} >TV</Checkbox></MenuItem>
    <MenuItem><Checkbox  value={"phone"} onChange={handleChange} isChecked={category.includes("phone")}>Smartphone</Checkbox></MenuItem>
    <MenuItem><Checkbox  value={"android"} onChange={handleChange} isChecked={category.includes("android")}>Android</Checkbox></MenuItem>
  </MenuList>
         </Menu>
            </>
          )}
          <Spacer />
          <IconButton
            aria-label="Add item"
            icon={<AddIcon />}
            colorScheme="blue"
            ml={isMobile ? 0 : 4}
          />
          <IconButton
            aria-label="Reset filters"
            icon={<RepeatIcon />}
            colorScheme="gray"
            ml={2}
            // onClick={handleResetButtonClick}
          />
        </Flex>
      </Box>
          
          {products&& <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} p={"3"} gap={6}>
       
        
       {products.map((product) => (
       <Flex>
         <Image w={"100px"} h={"100px"} objectFit={"contain"} src={product.imgUrl} alt={product.title}/>
         <Stack>
                       <Text>{product.title.substr(0, 29)}...</Text>
                       <Text>Price: {product.price}</Text>
                       <Flex>
                         <EditProduct item={product} />
                       </Flex>
                     </Stack>
       </Flex>

       ))}
       
     </Grid>}
     </Box>
      </Flex>
      </Box>
    </>
  )
}
export default AdminProduct
