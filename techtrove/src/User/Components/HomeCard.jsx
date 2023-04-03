import React from "react";
import { Box,  Image,  Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const HomeCard = ({ imgUrl, title }) => {
  return (
    <><Box p={"10px"} _hover={{ cursor:"pointer"}} >
      <Link to={"/products"}>
      <Image src={imgUrl} alt="product image" h={"7rem"} />

      <Text fontSize="xs" color={"#0046be"} _hover={{textDecoration:"underline", cursor:"pointer"}}>
        {title}
      </Text>
      </Link>
    </Box>
    </>
    
  );
};

export default HomeCard;
