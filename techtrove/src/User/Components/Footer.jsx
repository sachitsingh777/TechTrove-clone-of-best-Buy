import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Box
        zIndex={999}
        bgColor={"#f0f2f4"}
        p="1rem 2rem 2rem 2rem"
        lineHeight={"2.2rem"}
       borderTop={"1px solid white"}
      
      >
        <HStack gap={"9rem"}>
          <Box>
            <Heading as="h5" size="sm" color={"black"}>
              Order & Purchases
            </Heading>
            <Text color={"#0457c8"} fontSize="sm">
              Check Order Status
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Shipping, Delivery & Pickup
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Returns & Exchanges
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Price Match Guarantee
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Product Recalls
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Trade-In Program
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Gift Cards
            </Text>
            <br />
            <Heading as="h5" size="sm" color={"black"}>
              Payment Options
            </Heading>
            <Text color={"#0457c8"} fontSize="sm">
              My Best Buy® Credit Card
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Pay Your Bill at Citibank
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Lease to Own
            </Text>
          </Box>
          <Box>
            <Heading as="h5" size="sm" color={"black"}>
              Support & Services
            </Heading>
            <Text color={"#0457c8"} fontSize="sm">
              Visit our Support Center
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Schedule a Service
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Manage an Appointment
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Protection & Support Plans
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Haul Away & Recycling
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Contact Us
            </Text>

            <br />
            <Heading as="h5" size="sm" color={"black"}>
              Rewards & Membership
            </Heading>
            <Text color={"#0457c8"} fontSize="sm">
              Best Buy Totaltech
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              My Best Buy
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              View Points & Certificates
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Member Offers
            </Text>
          </Box>
          <Box>
            <Heading as="h5" size="sm" color={"black"}>
              Partnerships
            </Heading>
            <Text color={"#0457c8"} fontSize="sm">
              Affiliate Program
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Advertise with Us
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Developers
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Best Buy Health
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Best Buy Education
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Best Buy Business
            </Text>

            <br />

            <Heading as="h5" size="sm" color={"black"}>
              About Best Buy
            </Heading>
            <Text color={"#0457c8"} fontSize="sm">
              Corporate Information
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Careers
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Corporate Responsibility & Sustainability
            </Text>
            <Text color={"#0457c8"} fontSize="sm">
              Discover & Learn
            </Text>
          </Box>
          <Box p="1.2rem" bgColor={"white"}>
            <VStack
              divider={<StackDivider borderColor="gray.400" />}
              spacing={4}
              align="stretch"
            >
              <Box>
                <Text color={"#0457c8"} fontSize="sm">
                  Sign in or Create Account
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="md" color={"black"} mb="1rem">
                  Get the latest deals and more.
                </Heading>
                <Flex color={"black"} gap={"8px"}>
                  <Input
                    placeholder="Enter Email Address"
                    textColor={"black"}
                    border={"1px solid gray"}
                  />
                  <Button colorScheme="blue">Sign Up</Button>
                </Flex>
              </Box>
              <Box>
                <Heading as="h4" size="md" color={"black"}>
                  Best Buy app
                </Heading>
                <Text fontSize="sm" color={"#0457c8"}>
                  Learn more ›
                </Text>
              </Box>
              <Box>
                <Flex color={"#0457c8"} justifyContent="space-evenly">
                  <BsFacebook style={{ fontSize: "1.5rem" }} />
                  <AiFillTwitterCircle style={{ fontSize: "1.5rem" }} />
                  <BsInstagram style={{ fontSize: "1.5rem" }} />
                  <BsPinterest style={{ fontSize: "1.5rem" }} />
                  <BsYoutube style={{ fontSize: "1.5rem" }} />
                </Flex>
              </Box>

              <Box>
                <Text color={"#0457c8"} fontSize="sm">
                  {" "}
                  Blogger Network, videos & more
                </Text>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Footer;
