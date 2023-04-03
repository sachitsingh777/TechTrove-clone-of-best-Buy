import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const CheckOutCard = ({
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
    <div>
      <HStack>
        <Box>
          <Image src={imgUrl} height={"100px"}/>
        </Box>
        <Box w={"40%"}>
          <Text color={"black"}>
           {title}
          </Text>
        </Box>
      </HStack>
    </div>
  );
};

export default CheckOutCard;
