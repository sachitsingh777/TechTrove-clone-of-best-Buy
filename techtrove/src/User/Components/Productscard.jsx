import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
const Productscard = ({
  imgUrl,
  title,
  rate,
  review,
  top,
  save,
  id,
  price,
  category,
  brand,
  p1,
  p2,
}) => {
  const divert = useNavigate();

  const handleRoute = () => {
    divert(`/products/${id}`);
  };

  const Addcart = async () => {
    let newobj = {
      imgUrl,
      title,
      rate,
      review,
      top,
      save,
      id,
      price,
      category,
      brand,
      p1,
      p2,
    };

    let data = await axios.post(
      "https://beautiful-calf-wear.cyclic.app/AddToCart",
      newobj
    );
    console.log(data.data);
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      border="1px solid #E2E8F0"
      borderRadius="md"
      mb={4}
      p={4}
    >
      <Box w={{ base: "100%", md: "30%" }} mr={{ md: 4 }} onClick={handleRoute}>
        <Image src={imgUrl} alt={id} />
      </Box>

      <Stack w={{ base: "100%", md: "40%" }} onClick={handleRoute} spacing={2}>
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Text color="gray.500" fontSize="sm">
          {brand}
        </Text>
        <Text>{`${rate}(${review})`}</Text>
        <Text>
          {`Pickup:${p1 ? p1 : "Order now for pickup on Wed, Apr 19 at Aiea"}`}
        </Text>
        <Text>{`Online:${p2 ? p2 : "Not Available"}`}</Text>
      </Stack>

      <Flex
        w={{ base: "100%", md: "30%" }}
        alignItems="center"
        justifyContent="space-between"
        mt={{ base: 4, md: 0 }}
      >
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
          ${price}
        </Text>
        <Button
          bg="yellow.400"
          color="white"
          fontWeight="bold"
          borderRadius="md"
          px={{ base: 2, md: 4 }}
          py={{ base: 1, md: 2 }}
          fontSize={{ base: "sm", md: "md" }}
          onClick={Addcart}
        >
          Add to cart
        </Button>
      </Flex>
    </Flex>
  );
};
export default Productscard;
