import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const ShipCard = ({
  brand,
  category,
  id,
  imgUrl,
  rate,
  review,
  price,
  title,
}) => {
  return (
    <HStack>
        
      <Box>
        <Image src={imgUrl} />
      </Box>
      <Box>
        <Text color={"black"}>{title}</Text>
      </Box>
      <Box>
        <Flex direction={"column"} fontSize={"sm"}>
          <Box>$1999.99</Box>
          <Box>Qnt:1</Box>
          <Box
            color={"#0046be"}
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Remove
          </Box>
        </Flex>
      </Box>
    
    </HStack>
   
  );
};

export default ShipCard;
