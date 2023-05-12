import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Productscard from "../Components/Productscard";

// const Singleproductpage = () => {
//   const [seacrchparams, setSearchparams] = useSearchParams();
//   const initialfilter = seacrchparams.getAll("id");
//   console.log(initialfilter);
//   useEffect(() => {});
//   return <div></div>;
// };

// export default Singleproductpage;

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";

import { MdLocalShipping } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function Singleproductpage() {
  const dispatch = useDispatch();
  const toast = useToast();

  const [data, setdata] = useState({});

  const { id } = useParams();

  const singleData = async () => {
    let singledata = await axios.get(
      `https://json-server-bestbuy.onrender.com/products/${id}`
    );
    console.log(singledata.data);
    setdata(singledata.data);
  };

  const Addcart = async () => {
    try {
      let newdata = await axios.post(
        "https://json-server-bestbuy.onrender.com/AddToCart ",
        data
      );
      
      toast({
        title: `Successful.`,
        description: `Product added to the cart`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch {
      console.log("errooooooor");
    }
    
  };
  useEffect(() => {
    singleData();
  }, []);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={data.imgUrl}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("#040c13")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {data.title}
              </Text>
              <Text
                color={useColorModeValue("#040c13", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                $ {data.price}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>ISI marked gadget</ListItem>
                  <ListItem>Tachymeter</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Between lugs:
                  </Text>{" "}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Bracelet:
                  </Text>{" "}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case:
                  </Text>{" "}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case diameter:
                  </Text>{" "}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Crystal:
                  </Text>{" "}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            onClick={Addcart}
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("#ffeb00")}
            color={useColorModeValue("black", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
