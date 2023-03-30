import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
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
    >
      <Flex
        height={{ base: "3.2rem", md: "4.94rem" }}
        px={{ base: "1rem", md: "3rem" }}
        gap="2.5rem"
        // justify={"space-between"}
        align={"center"}
      >
        <Link to={"/"}>
          <Box>
            <Image
              src="/TechTrove_logo.png"
              alt="logo"
              width="9rem"
              height={{ base: "3rem", md: "100%" }}
            />
          </Box>
        </Link>

        <Box >
          {/* <Flex gap={"2px"}>
            <GiHamburgerMenu style={{ fontSize: "1.5rem" }} />
            <Heading as="h4" size="md">
              Menu
            </Heading>
          </Flex> */}
          <Menu >
            <MenuButton variant="outline">
              <Heading as="h4" size="md">
                <HamburgerIcon
                  style={{ fontSize: "1.7rem", marginRight: "3px" }}
                />
                Menu
              </Heading>
            </MenuButton>
            <MenuList color={"#0046be"} >
              <MenuItem>Deals </MenuItem>
              <Divider />
              <MenuItem >
                Support & Services <IoIosArrowForward />
              </MenuItem>
              <Divider />
              <MenuItem>Brands</MenuItem>
              <Divider />
              <MenuItem>Featured</MenuItem>
              <Divider />
              <MenuItem>
                <Heading as="h4" size="md" mb={"0.5rem"} mt="0.5rem" color={"black"}>
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

        <Box mr={"15rem"}>
          <InputGroup bgColor={"white"} borderRadius="0.5rem">
            <Input
              // type={show ? 'text' : 'password'}
              placeholder="What can we help you find today?"
              width={"40rem"}
              color="black"
              colorScheme={"gray"}
            />
            <InputRightElement width="5rem">
              <Button h="100%" variant="ghost">
                <BsSearch style={{ color: "black", fontSize: "1.5rem" }} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Link to={"/store"}>
          <Box>
            <Flex gap={"2px"}>
              <AiOutlineShop style={{ fontSize: "1.5rem" }} />

              <Heading as="h4" size="md">
                {" "}
                Aiea
              </Heading>
            </Flex>
          </Box>
        </Link>

        <Link to={"/cart"}>
          <Box>
            <Flex gap={"2px"}>
              <HiOutlineShoppingCart style={{ fontSize: "1.5rem" }} />
              <Heading as="h4" size="md">
                Cart
              </Heading>
            </Flex>
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
