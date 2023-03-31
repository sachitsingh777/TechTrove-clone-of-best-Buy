import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShop } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box
      position={"sticky"}
      top="0"
      zIndex={"100"}
      bg="#0046be"
      boxShadow=" 0px 7px 7px -5px rgba(120,108,120,0.2)"
      borderBottom={"1px solid white"}
      h="4.5rem"
      display={"flex"}
    >
      <HStack
        h="100%"
        width={{ md: "60%", base: "100%" }}
        paddingLeft={{ md: "2rem", base: "0.5rem" }}
        spacing={{ md: "1.5rem", base: "2.5rem" }}
        display={{ base: "flex", md: "flex" }}
      >
        <Box w="15%" h="100%">
          <Link to={"/"}>
            <Image src="/TechTrove_logo.png" alt="logo" height={"100%"} />
          </Link>
        </Box>
        <Box p="1.5rem" alignItems={"center"} w="15%" h="100%">
          <Menu>
            <MenuButton variant="outline">
              <Flex>
                <HamburgerIcon
                  style={{ fontSize: "1.7rem", marginRight: "3px" }}
                />
                <Heading as="h4" size="md">
                  Menu
                </Heading>
              </Flex>
            </MenuButton>
            <MenuList color={"#0046be"}>
              <MenuItem>Deals </MenuItem>
              <Divider />
              <MenuItem>
                Support & Services <IoIosArrowForward />
              </MenuItem>
              <Divider />
              <MenuItem>Brands</MenuItem>
              <Divider />
              <MenuItem>Featured</MenuItem>
              <Divider />
              <MenuItem>
                <Heading
                  as="h4"
                  size="md"
                  mb={"0.5rem"}
                  mt="0.5rem"
                  color={"black"}
                >
                  Shop by Department
                </Heading>
              </MenuItem>
              <Divider />
              <MenuItem>Appliances</MenuItem> <Divider />
              <MenuItem>TV & Home Theater</MenuItem> <Divider />
              <MenuItem>Computers & Tablets</MenuItem>
              <Divider />
              <MenuItem>Cell Phones</MenuItem>
              <Divider />
              <MenuItem>Audio</MenuItem>
              <Divider />
              <MenuItem>Video Games</MenuItem>
              <Divider />
              <MenuItem>Cameras, Camcorders & Drones</MenuItem>
              <Divider />
              <MenuItem>Home, Furniture & Office</MenuItem>
              <Divider />
              <MenuItem>Smart Home, Security & Wi-Fi</MenuItem>
              <Divider />
              <MenuItem>Car Electronics & GPS</MenuItem>
              <Divider />
            </MenuList>
          </Menu>
        </Box>
        <Box w="62%" h="100%" pt={"1rem"}>
          <InputGroup borderRadius="0.5rem">
            <Input
              placeholder="What can we help you find today?"
              pr="4.5rem"
              borderWidth="2px"
              borderColor="gray.200"
            ></Input>
            <InputRightElement width="4.5rem">
              <BsSearch style={{ color: "black", fontSize: "1.5rem" }} />
            </InputRightElement>
          </InputGroup>
        </Box>
      </HStack>
      <HStack
        pr={"5rem"}
        justifyContent={"flex-end"}
        borderBottom={"1px solid black"}
        h="100%"
        width={"40%"}
        display={{base:"none", lg:"flex"}}
      >
        <Box h="100%" width={"20%"} p={"1rem"}>
          <Link to={"/store"}>
            <Flex gap={"2px"} alignItems="center">
              <Icon as={AiOutlineShop} fontSize="2rem" />
              <Heading as="h4" size="md">
                Aiea
              </Heading>
            </Flex>
          </Link>
        </Box>
        <Box h="100%" width={"20%"} p={"1rem"}>
          <Link to={"/cart"}>
            <Flex gap={"2px"} alignItems="center">
              <Icon as={HiOutlineShoppingCart} fontSize="2rem" />
              <Heading as="h4" size="md">
                Cart
              </Heading>
            </Flex>
          </Link>
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar;
