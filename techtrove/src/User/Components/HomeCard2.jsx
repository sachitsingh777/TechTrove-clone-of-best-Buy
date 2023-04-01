import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const HomeCard2 = ({ imgUrl, title, rate, price, save }) => {
  return (
    <Box p={"10px"} alignItems={"center"} width="400px"  _hover={{ cursor:"pointer"}}>
      <Image src={imgUrl} alt="product image" height={"14rem"} width={"100%"} />

      <Text fontSize="xs" color={"#0046be"} _hover={{textDecoration:"underline", cursor:"pointer"}}>
        {title}{" "}
      </Text>
      <Text fontSize="xs" color={"#f3eb53"}>
        {rate}{" "}
      </Text>
      <Text fontSize="md" color={"#000000"}>
        ${price}
      </Text>
      <Text fontSize="md" textDecoration={"line-through"} color={"#6d6d6d"}>
        ${save}
      </Text>
    </Box>
  );
};

export default HomeCard2;
