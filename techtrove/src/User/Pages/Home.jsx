import { Box, Divider, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import HomeCard from "../Components/HomeCard";
import HomeCard2 from "../Components/HomeCard2";
import Menubar from "../Components/Menubar";
import { BestBuy } from "../Homepageconstant/HomepageConstant";
import { TopDeals } from "../Homepageconstant/HomepageConstant";

const Home = () => {
  console.log(BestBuy);
  return (
    <Box color={"black"} bgColor="white">
      <Menubar />
      <HStack
        spacing={"25px"}
        p="1rem"
        // border={"1px solid red"}
        bgColor="white"
      >
        <Box
          w={"44%"}
          h="40rem"
          border={"1px solid #A0AEC0"}
          backgroundImage="./macbook.jpg"
          backgroundSize={"contain"}
          textAlign="center"
          color={"black"}
          backgroundRepeat="no-repeat"
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
          <Box border={"1px solid #A0AEC0"} p="1rem" mb="26px">
            <Heading as="h5" size="sm">
              Recomanded for you
            </Heading>
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent={"space-evenly"}
            >
              {BestBuy?.map((el) => (
                <HomeCard key={el.id} {...el} />
              ))}
            </Box>
          </Box>
          <Box display="flex">
            <Box w={"50%"} border={"1px solid #A0AEC0"}>
              <Image src="/outletdeal.png" h={"fit-content"} />
              <Text ml={"15px"} color={"#0046be"}>
                View outlet deals
              </Text>
            </Box>
            <Box w={"50%"} border={"1px solid #A0AEC0"} ml="25px">
              <Image src="/outletdeal.png" h={"fit-content"} />
              <Text ml={"15px"} color={"#0046be"}>
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

        <Box
          display={"flex"}
          flexDirection="row"
          p={"2rem"}
          gap={"5px"}
          borderTop="1px solid #A0AEC0"
        >
          {TopDeals?.map((el) => (
            <HomeCard2 key={el.id} {...el} />
          ))}
        </Box>
      </Box>
      <br />

      <HStack p="1rem" spacing={"25px"} justifyContent="space-around">
        <Box w={"33%"} border={"1px solid #A0AEC0"}>
          <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-669182-tv-16c7b1f5-f700-4469-bcf6-821e568b4e3f.jpg;maxHeight=960;maxWidth=960" />
        </Box>
        <Box w={"33%"} border={"1px solid #A0AEC0"}>
          <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-106837-iphone14-yellow-na-ghp-a82b438b-18ff-47cc-880a-63e33b653e8e.jpg;maxHeight=960;maxWidth=960" />
        </Box>
        <Box w={"33%"} border={"1px solid #A0AEC0"}>
          <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-EVN-205712-upgrade-plus-b513dde8-d003-432d-b792-8b4eb9903e0d.jpg;maxHeight=960;maxWidth=960" />
        </Box>
      </HStack>
    </Box>
  );
};

export default Home;
