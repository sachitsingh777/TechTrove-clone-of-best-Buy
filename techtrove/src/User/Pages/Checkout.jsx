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
  VStack,useToast
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PayPal from "../Components/PayPal";

import { CARTGetProduct, getCartData } from "../Redux/CartReducer/Action";
import CheckOutCard from "../Components/CheckOutCard";
import ShipCard from "../Components/ShipCard";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";

const Checkout = () => {
  const [formErrors, setFormErrors] = useState({});
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const { cartData } = useSelector((store) => store.cartReducer);
  const toast = useToast();

  // Form validation function
  const validateForm = () => {
    const errors = {};

    // Validate firstName
    if (!formValues.firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    // Validate lastName
    if (!formValues.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    // Validate address
    if (!formValues.address.trim()) {
      errors.address = "Address is required";
    }

    // Validate city
    if (!formValues.city.trim()) {
      errors.city = "City is required";
    }

    // Validate state
    if (!formValues.state.trim()) {
      errors.state = "State is required";
    }

    // Validate zip
    if (!formValues.zip.trim()) {
      errors.zip = "ZIP is required";
    } else if (!/^\d{6}$/.test(formValues.zip)) {
      errors.zip = "ZIP code must be a 5-digit number";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

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

    const isValidform = validateForm();

    if (isValidform) {
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
    } else {
      console.log("Form contains errors:", formErrors);
    }
  };

  useEffect(() => {
    dispatch(CARTGetProduct);
    setOrders(cartData);
  }, []);

  const totalPrice = orders.reduce((acc, curr) => acc + Number(curr.price), 0);
  const sale = Number(71.99);
  const shippingPrice = totalPrice + sale;
  console.log(orders);
  return (
    <>
     <Navbar />
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
                        {formErrors.firstName && (
                          <Text color="red" fontSize="sm">
                            {formErrors.firstName}
                          </Text>
                        )}
                      </Flex>
                      <Flex direction={"column"} spacing={"0px"}>
                        <FormLabel mt={"1rem"}>Last Name</FormLabel>
                        <Input
                          type="text"
                          name="lastName"
                          value={formValues.lastName}
                          onChange={handleInputChange}
                        />
                        {formErrors.lastName && (
                          <Text color="red" fontSize="sm">
                            {formErrors.lastName}
                          </Text>
                        )}
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
                    {formErrors.address && (
                          <Text color="red" fontSize="sm">
                            {formErrors.address}
                          </Text>
                        )}

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
                          {formErrors.city && (
                          <Text color="red" fontSize="sm">
                            {formErrors.city}
                          </Text>
                        )}
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
                          {formErrors.state && (
                          <Text color="red" fontSize="sm">
                            {formErrors.state}
                          </Text>
                        )}
                        </Flex>

                        <Flex direction={"column"} spacing={"0px"}>
                          <FormLabel>Zip</FormLabel>
                          <Input
                            type="text"
                            name="zip"
                            value={formValues.zip}
                            onChange={handleInputChange}
                          />
                          {formErrors.zip && (
                          <Text color="red" fontSize="sm">
                            {formErrors.zip}
                          </Text>
                        )}
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
                <ShipCard key={el.id} {...el} />
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
                  ${shippingPrice}
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
