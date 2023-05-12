import {
  Button,
  Box,
  Flex,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { CARTDeleteProduct } from "../Redux/CartReducer/Action";

export const CartProducts = ({
  brand,

  id,
  imgUrl,
  rate,
  review,
  price,
  title,
  Remove,
}) => {
  // console.log("running  cart compoennets")
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  const RemoveProductitem = (id) => {
    dispatch(CARTDeleteProduct(id));
    Remove();
  };
  useEffect(() => {
    setTotalAmount(qty * price);
  }, [qty]);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      borderBottom="1px solid #c4c9d0"
      
      height={{ base: "200px", md: "auto", sm: "auto" }}
      gap={"5px"}
      mb={"5px"}
    >
      <Box
        w={{ base: "80%", md: "30%", sm: "100%" }}
        align={"center"}
        // border="1px solid #3369ae"
      >
        <Image
          src={imgUrl}
          alt={id}
          height={{ base: "100%", md: "60%", sm: "20%" }}
        />
      </Box>

      <Stack
        w={{ base: "80%", md: "40%", sm: "100%" }}
        pt={"15px"}
        spacing={2}
        // border="1px solid #3369ae"
      >
        <Text>{title}</Text>
        <Text color="gray.500" fontSize="sm">
          {brand}
        </Text>
        <Text>{`${rate}(${review} reviews)`}</Text>
        <Box
          style={{
            border: "1px solid grey",
            borderRadius: "4px",
            height: "20px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            fontSize: "25px",
            fontWeight: "bold",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => {
              setQty(qty - 1);
            }}
            style={{ fontSize: "40px" }}
          >
            -
          </button>
          <button>{qty}</button>
          <button
            onClick={() => {
              setQty(qty + 1);
            }}
            style={{ fontSize: "30px" }}
          >
            +
          </button>
        </Box>
      </Stack>

      <Flex
        w={{ base: "100%", md: "30%" }}
        alignItems="center"
        justifyContent="space-between"
        mt={{ base: 4, md: 0 }}
        // border="1px solid #3369ae"
      >
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
          ${totalAmount}
        </Text>
        <Button
          bg="#ffeb00"
          color="black"
          fontWeight="bold"
          borderRadius="md"
          px={{ base: 2, md: 4 }}
          py={{ base: 1, md: 2 }}
          fontSize={{ base: "sm", md: "md" }}
          _hover={{ color: "red", bgColor: "#eede2c" }}
          onClick={() => RemoveProductitem(id)}
        >
          Remove
        </Button>
      </Flex>
    </Flex>
  );
};
