import React from "react";
import { Box,  Image,  Text } from "@chakra-ui/react";
const HomeCard = ({ imgUrl, title }) => {
  return (
    <Box p={"8px"}>
      <Image src={imgUrl} alt="product image" h={"7rem"} />

      <Text fontSize="xs" color={"#0046be"}>
        {title}
      </Text>
    </Box>
  );
};

export default HomeCard;
