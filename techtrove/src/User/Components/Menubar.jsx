import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdAccountCircle, MdOutlineLocalOffer } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <>
      <Box
        bgColor={"#0046be"}
        p="0.8rem"
        boxShadow=" 0px 7px 7px -5px rgba(120,108,120,0.2)"
        display={{ lg: "block", md: "none", sm: "none",  }}
        maxH={"3rem"}
      >
        <Flex gap="0.5rem" justify={"space-around"}>
          <Box display={"flex"} gap="2.5rem" mr={"2rem"}>
            <Text color={"white"} fontSize="sm">
              Top Deals
            </Text>
            <Text color={"white"} fontSize="sm">
              Deal of the Day
            </Text>
            <Text color={"white"} fontSize="sm">
              Totaltech Membership
            </Text>
            <Text color={"white"} fontSize="sm">
              Credit Cards
            </Text>
            <Text color={"white"} fontSize="sm">
              Gift Cards
            </Text>
            <Text color={"white"} fontSize="sm">
              Gift Ideas{" "}
            </Text>
            <Text color={"white"} fontSize="sm">
              Health & Wellness
            </Text>
            <Menu>
              <MenuButton>
                <Text color={"white"} fontSize="sm">
                  More
                  <ChevronDownIcon />
                </Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Best Buy Outlet</MenuItem>
                <MenuItem>Best Buy Business</MenuItem>
                <MenuItem>X Close</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box display={"flex"} justifyContent="space-evenly" gap={"1rem"}>
            <Box>
              <Menu>
                <MenuButton>
                  {" "}
                  <Flex color={"white"}>
                    <MdAccountCircle style={{ marginTop: "3px" }} />
                    <Text color={"white"} fontSize="sm">
                      Account
                    </Text>
                    <ChevronDownIcon style={{ marginTop: "3px" }} />
                  </Flex>
                </MenuButton>
                <MenuList>
                  <Link to={"/login"}>
                    {" "}
                    <MenuItem>
                      <Button width={"100%"}>Sign In</Button>
                    </MenuItem>
                  </Link>
                  <Link to={"/createaccount"}>
                    {" "}
                    <MenuItem>
                      <Button width={"100%"}>Create Account</Button>
                    </MenuItem>
                  </Link>

                  <MenuItem>Account</MenuItem>
                  <MenuItem>Purchases</MenuItem>
                  <MenuItem>Products</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu>
                <MenuButton as={Text}>
                  {" "}
                  <Flex color={"white"}>
                    {/* <MdAccountCircle style={{marginTop:"3px"}} /> */}
                    <Text color={"white"} fontSize="sm">
                      Recently Viewed
                    </Text>
                    <ChevronDownIcon style={{ marginTop: "3px" }} />
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <GiBackwardTime style={{ fontSize: "2.3rem" }} />
                    <Heading as="h4" size="md">
                      Recently Viewed
                    </Heading>
                  </MenuItem>
                  <Divider />
                  <MenuItem>Purchases</MenuItem>
                  <MenuItem>Products</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu>
                <MenuButton as={Text}>
                  {" "}
                  {/* <MdAccountCircle style={{marginTop:"3px"}} /> */}
                  <Text color={"white"} fontSize="sm">
                    Order Status <ChevronDownIcon />
                  </Text>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <BsFillBoxSeamFill
                      style={{ fontSize: "2.3rem", marginRight: "5px" }}
                    />
                    <Divider orientation="vertical" />
                    <Heading as="h4" size="md">
                      Order Status
                    </Heading>
                  </MenuItem>
                  <Divider />
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu>
                <MenuButton as={Text}>
                  {" "}
                  {/* <MdAccountCircle style={{marginTop:"3px"}} /> */}
                  <Text color={"white"} fontSize="sm">
                    Saved Items <ChevronDownIcon />
                  </Text>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <MdOutlineLocalOffer
                      style={{ fontSize: "2.3rem", marginRight: "5px" }}
                    />
                    <Divider orientation="vertical" />
                    <Heading as="h4" size="md">
                      Saved Items
                    </Heading>
                  </MenuItem>
                  <Divider />
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Menubar;
