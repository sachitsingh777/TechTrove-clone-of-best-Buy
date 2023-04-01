import { Box, Divider, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import HomeCard from "../Components/HomeCard";
import HomeCard2 from "../Components/HomeCard2";
import Menubar from "../Components/Menubar";
import { BestBuy, Laptops } from "../Homepageconstant/HomepageConstant";
import { TopDeals } from "../Homepageconstant/HomepageConstant";

const Home = () => {
  return (
    <Box color={"black"} bgColor="white">
      <Menubar />
      <HStack spacing={"25px"} p="1rem" bgColor="white">
        <Box
          w={"44%"}
          h="40rem"
          border={"1px solid #A0AEC0"}
          backgroundImage="./macbook.jpg"
          backgroundSize={"contain"}
          textAlign="center"
          color={"black"}
          backgroundRepeat="no-repeat"
          _hover={{ cursor: "pointer" }}
        >
          <Box mt={"8rem"}>
            <Heading as="h3" size="lg" mb={"0.5rem"}>
              MacBook
            </Heading>
            <Text color={"BlackAlpha.800"}>
              Save up to $700 on select models.
            </Text>
            <Text color={"blackAlpha.700"} fontSize="xs">
              Minimum saving is $50.
            </Text>
          </Box>
        </Box>
        <Box h="40rem" w={"56%"} bgColor="white">
          <Box border={"1px solid #A0AEC0"} p="1rem" mb="26px" h={"36%"}>
            <Heading as="h5" size="sm">
              Recomanded for you
            </Heading>
            <Box overflowX={"auto"}>
              <Box
                display={"flex"}
                flexDirection="row"
                width={"797px"}
                justifyContent={"space-evenly"}
              >
                {BestBuy?.map((el) => (
                  <HomeCard key={el.id} {...el} />
                ))}
              </Box>
            </Box>
          </Box>
          <Box display="flex" h={"60%"}>
            <Box
              _hover={{ cursor: "pointer" }}
              w={"50%"}
              h="100%"
              border={"1px solid #A0AEC0"}
            >
              <Image src="/outletdeal.png" h={"fit-content"} />
              <Text ml={"15px"} color={"#0046be"}>
                View outlet deals
              </Text>
            </Box>
            <Box
              _hover={{ cursor: "pointer" }}
              w={"50%"}
              border={"1px solid #A0AEC0"}
              ml="25px"
              h="100%"
            >
              <Image
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6340/6340453_sd.jpg;maxHeight=640;maxWidth=550"
                h={"50%"}
                margin="40px 0px 15px 100px"
              />
              <Text ml={"15px"} color={"#0046be"} fontSize='md'  _hover={{ cursor: "pointer",textDecoration:"underline" }}>Apple - 12.9-Inch iPad Pro with Wi-Fi + Cellular - 256GB</Text>
              <Text ml={"15px"} color={"#000000"} fontSize='md'>$799.99</Text>
              <Text ml={"15px"} textDecoration={"line-through"} fontSize='md'>$999.99</Text>
              <Text m={"15px 15px"} color={"#0046be"}>
                See bonus deals
              </Text>
            </Box>
          </Box>
        </Box>
      </HStack>
      <br />

      <Box p="1rem">
        <Heading as="h4" size="md" mb={"12px"}>
          Deals inspired by your shopping
        </Heading>
        <Divider colorScheme={"gray"} />

        <Box overflowX={"auto"}>
          <Box
            display={"flex"}
            flexDirection="row"
            width="1450px"
            p={"2rem"}
            gap={"5px"}
            borderTop="1px solid #A0AEC0"
          >
            {TopDeals?.map((el) => (
              <HomeCard2 key={el.id} {...el} />
            ))}
          </Box>
        </Box>
      </Box>
      <br />
<Box overflowX={"auto"}>
<HStack p="1rem" spacing={"25px"} width="1500px" justifyContent="space-around">
        <Box
          w={"33%"}
          border={"1px solid #A0AEC0"}
          _hover={{ cursor: "pointer" }}
        >
          <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-669182-tv-16c7b1f5-f700-4469-bcf6-821e568b4e3f.jpg;maxHeight=960;maxWidth=960" />
        </Box>
        <Box
          w={"33%"}
          border={"1px solid #A0AEC0"}
          _hover={{ cursor: "pointer" }}
        >
          <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-106837-iphone14-yellow-na-ghp-a82b438b-18ff-47cc-880a-63e33b653e8e.jpg;maxHeight=960;maxWidth=960" />
        </Box>
        <Box
          w={"33%"}
          border={"1px solid #A0AEC0"}
          _hover={{ cursor: "pointer" }}
        >
          <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-EVN-205712-upgrade-plus-b513dde8-d003-432d-b792-8b4eb9903e0d.jpg;maxHeight=960;maxWidth=960" />
        </Box>
      </HStack>
</Box>
      

      <br />
      <Box overflowX={"auto"}>
      <Box p="1rem" width={"1500px"}>
        <Heading as="h4" size="md" mb={"12px"}>
          Our featured offers
        </Heading>

        <Box
          display={"flex"}
          flexDirection="row"
          p={"2rem"}
          gap={"5px"}
          borderTop="1px solid #A0AEC0"
        >
          <HStack>
            <Box
              _hover={{ cursor: "pointer" }}
              p="1.5rem"
              borderRight="1px solid #A0AEC0"
            >
              <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-665820_DER-87a2497b-38b8-45a5-b746-0bb83bc7ee42.jpg;maxHeight=504;maxWidth=740" />
              <Heading
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
                mt={"1.5rem"}
                as="h4"
                size="md"
                color={"#0046be"}
              >
                Spring Appliance Saving Event.
              </Heading>
              <Text color={" #67696a"} mt={"0.5rem"} fontSize="xs">
                Upgrade your space and get fast fulfillment on select major
                appliances.
              </Text>
            </Box>

            <Box
              _hover={{ cursor: "pointer" }}
              p="0.5rem"
              borderRight="1px solid #A0AEC0"
            >
              <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/top-MMT-665816-Save350WindowsLaptops_DER-b825f326-fdf3-4358-a96c-2bee0b54751f.jpg;maxHeight=504;maxWidth=740" />
              <Heading
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
                mt={"1rem"}
                as="h4"
                size="md"
                color={"#0046be"}
              >
                Save Up to $350 on select Windows laptops.
              </Heading>
              <Text color={" #67696a"} mt={"0.5rem"} fontSize="xs">
                Minimum saving is %50
              </Text>
            </Box>

            <Box _hover={{ cursor: "pointer" }} p="1rem">
              <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-635964-airpods-family-pol_der-c4fae3bf-49cc-4618-98ee-ca0a80ab6265.jpg;maxHeight=504;maxWidth=740" />
              <Heading
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
                mt={"2rem"}
                as="h4"
                size="md"
                color={"#0046be"}
              >
                AirPods Max
              </Heading>
              <Text color={" #67696a"} mt={"0.5rem"} fontSize="xs">
                Over-ear headphones reimagined with immersive high-fidelity
                audio and an exceptional fir.
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
      </Box>
      <br />
      <br />

      <Box p="1rem">
        <Heading as="h4" size="md" mb={"12px"}>
          You may also like
        </Heading>
        <Divider colorScheme={"gray"} />
        <Box overflowX={"auto"}>
          <Box
            display={"flex"}
            width="1400px"
            flexDirection="row"
            p={"1rem"}
            gap={"5px"}
            borderTop="1px solid #A0AEC0"
          >
            {Laptops?.map((el) => (
              <HomeCard2 key={el.id} {...el} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
