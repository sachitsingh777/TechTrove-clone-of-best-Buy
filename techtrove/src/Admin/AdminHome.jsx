import React from 'react'
import {Flex,Box} from "@chakra-ui/react"
import AdminSideBar from "./AdminComponent/AdminSideBar"
import Widget from './AdminComponent/Widget'
import Dashboard from './Pages/Dashboard'
const AdminHome = () => {
  return (
    <Flex>
      <Box>
          <AdminSideBar/>
      </Box>
      <Box>
      <Dashboard/>
      </Box>
    </Flex>
  )
}

export default AdminHome