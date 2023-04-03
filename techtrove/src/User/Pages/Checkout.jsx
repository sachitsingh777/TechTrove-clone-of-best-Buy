import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PayPal from "../Components/PayPal";
import { useToast } from "@chakra-ui/react";
import { CARTGetProduct, getCartData } from "../Redux/CartReducer/Action";
import { useEffect } from "react";
import CheckOutCard from "../Components/CheckOutCard";
import ShipCard from "../Components/ShipCard";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const {cartData} = useSelector((store)=> store.cartReducer)
  const toast = useToast();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formValues));
    console.log("Form submitted:", formValues);
    setFormValues({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
    toast({
      title: `Data saved Successful!`,
      status: "success",
      isClosable: true,
    });
  };

  useEffect(() => {
    dispatch(CARTGetProduct)
    setOrders(cartData)
  }, []);

  
  const totalPrice = orders.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );
console.log(orders);
  return (
    <>
      <Box bgColor={"#f0f2f4"}>
        <Heading
          maxW="66%"
          margin={"auto"}
          textAlign={"justify"}
          as="h3"
          size="lg"
          p={"1rem 2rem"}
        >
          Getting your order
        </Heading>
      </Box>
      <Box bgColor={"#f0f2f4"} pb={"1rem"} border={"0px solid red"}>
        <Box
          bgColor={"#f0f2f4"}
          display={"flex"}
          justifyContent={"space-between"}
          maxW={"62%"}
          margin={"auto"}
        >
          <Box
            // border={"1px solid gray"}
            boxShadow="md"
            width={"65%"}
            bgColor={"#ffffff"}
            p={"1rem"}
          >
            <HStack>
              <Box>
                <Heading as="h4" size="md">
                  Shipping Details
                </Heading>
              </Box>
            </HStack>
            {/* <HStack>
              <Box>
                <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509650_sd.jpg;canvasHeight=100;canvasWidth=100" />
              </Box>
              <Box w={"40%"}>
                <Text color={"black"}>
                  MacBook Air 13.6" Laptop - Apple M2 chip - 8GB Memory - 256GB
                  SSD...
                </Text>
              </Box>
            </HStack> */}

            {orders.map((el) => (
              <CheckOutCard key={el.id} {...el} />
            ))}

            <Divider />
            <Box>
              <Heading as="h5" size="sm" m={"0.5rem"}>
                Shipping Address
              </Heading>
              <Box width={"100%"}>
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                  <FormControl>
                    <Flex gap={"5rem"}>
                      <Flex direction={"column"} spacing={"0px"}>
                        <FormLabel mt={"1rem"}>First Name</FormLabel>
                        <Input
                          type="text"
                          name="firstName"
                          value={formValues.firstName}
                          onChange={handleInputChange}
                        />
                      </Flex>
                      <Flex direction={"column"} spacing={"0px"}>
                        <FormLabel mt={"1rem"}>Last Name</FormLabel>
                        <Input
                          type="text"
                          name="lastName"
                          value={formValues.lastName}
                          onChange={handleInputChange}
                        />
                      </Flex>
                    </Flex>

                    <FormLabel mt={"1rem"}>Address</FormLabel>
                    <Input
                      mb={"1rem"}
                      type="text"
                      name="address"
                      value={formValues.address}
                      onChange={handleInputChange}
                    />

                    <Flex>
                      <HStack spacing={"0.5rem"}>
                        <Flex direction={"column"} spacing={"0px"}>
                          <FormLabel>City</FormLabel>
                          <Input
                            type="text"
                            name="city"
                            value={formValues.city}
                            onChange={handleInputChange}
                          />
                        </Flex>

                        <Flex direction={"column"} spacing={"0px"}>
                          <FormLabel>State</FormLabel>
                          <Select
                            placeholder="Select"
                            name="state"
                            value={formValues.state}
                            onChange={handleInputChange}
                          >
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AE">AE</option>
                            <option value="CO">CO</option>
                            <option value="CA">CA</option>
                            <option value="DC">DC</option>
                            <option value="GE">GE</option>
                            <option value="FE">FE</option>
                          </Select>
                        </Flex>

                        <Flex direction={"column"} spacing={"0px"}>
                          <FormLabel>Zip</FormLabel>
                          <Input
                            type="text"
                            name="zip"
                            value={formValues.zip}
                            onChange={handleInputChange}
                          />
                        </Flex>
                      </HStack>
                    </Flex>
                    <Button
                      type="submit"
                      m={"2rem"}
                      w={"85%"}
                      colorScheme="blue"
                    >
                      Save Details
                    </Button>
                  </FormControl>
                </form>
              </Box>
            </Box>
          </Box>
          <Box
            p={"1rem"}
            // border={"1px solid gray"}
            boxShadow="md"
            width={"32%"}
            bgColor={"#ffffff"}
          >
            <HStack>
              <Box>
                <Heading as="h4" size="md">
                  Shipping Details
                </Heading>
                <Heading as="h6" size="xs" mt={"1.5rem"} mb={"1rem"}>
                  Shipping
                </Heading>
              </Box>
            </HStack>

            <VStack mb={"1rem"}>
              {/* <Box>
                <Box>
                <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509650_sd.jpg;canvasHeight=100;canvasWidth=100" />
              </Box>
              <Box>
                <Text color={"black"}>
                  MacBook Air 13.6" Laptop - Apple M2 chip - 8GB Memory - 256GB
                  SSD...
                </Text>
              </Box>
              </Box> */}
             
               {orders.map((el) => (
              <ShipCard key={el.id} {...el}  />
            ))} 
             
              
              
              
            </VStack>
            <Divider mb={"1.5rem"} />
            <VStack fontSize="md" spacing={"1rem"}>
              <Flex
                w={"100%"}
                justifyContent={"space-between"}
                color={"black"}
                fontSize="md"
              >
                <Text color={"black"} fontSize="md">
                  Item Subtotal
                </Text>
                <Text color={"black"} fontSize="md">
                  ${totalPrice}
                </Text>
              </Flex>
              <Flex w={"100%"} justifyContent={"space-between"}>
                <Text color={"black"} fontSize="md">
                  Shipping
                </Text>
                <Text color={"black"} fontSize="md">
                  Free
                </Text>
              </Flex>
              <Flex w={"100%"} justifyContent={"space-between"}>
                <Text color={"#0046be"} fontSize="md">
                  Estimated Sales Tax
                </Text>
                <Text color={"black"} fontSize="md">
                  $71.94
                </Text>
              </Flex>
              <Divider mt={"1.5rem"} colorScheme="gray" />
              <Flex w={"100%"} justifyContent={"space-between"}>
                <Heading as="h4" size="md">
                  Total
                </Heading>
                <Heading as="h4" size="md">
                  ${totalPrice + 71.94}
                </Heading>
              </Flex>
              <Divider mb={"1.5rem"} />
              <Box>{<PayPal />}</Box>
            </VStack>
          </Box>
        </Box>
      </Box>
      {/*  */}
    </>
  );
};

export default Checkout;
