import React from "react";
import {
  Flex,
  Box,
  Grid,
  SimpleGrid,
  Text,
  useColorModeValue,
  Progress,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import Card from "../AdminComponent/Card/Card";
import CardBody from "../AdminComponent/Card/CardBody";
import CardHeader from "../AdminComponent/Card/CardHeader";
import LineChart from "../AdminComponent/Charts/LineChart";
import BarChart from "../AdminComponent/Charts/BarChart";
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
  RocketIcon,
  StatsIcon,
} from "../AdminComponent/Icons/Icons";
import IconBox from "../AdminComponent/Icons/IconBox";
const Dashboard = () => {
  const iconBoxInside = useColorModeValue("white", "white");
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
        <MiniStatistics
          title={"Today's Moneys"}
          amount={"$53,000"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Clients"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Sales"}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <ActiveUsers
          title={"Active Users"}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"Sales Overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
    </Flex>

  )
}

export default Dashboard








const MiniStatistics = ({ title, amount, percentage, icon }) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card minH="83px">
      <CardBody>
        <Flex flexDirection="row" align="center" justify="center" w="100%">
          <Stat me="auto">
            <StatLabel
              fontSize="sm"
              color="gray.400"
              fontWeight="bold"
              pb=".1rem"
            >
              {title}
            </StatLabel>
            <Flex>
              <StatNumber fontSize="lg" color={textColor}>
                {amount}
              </StatNumber>
              <StatHelpText
                alignSelf="flex-end"
                justifySelf="flex-end"
                m="0px"
                color={percentage > 0 ? "green.400" : "red.400"}
                fontWeight="bold"
                ps="3px"
                fontSize="md"
              >
                {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
              </StatHelpText>
            </Flex>
          </Stat>
          <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
            {icon}
          </IconBox>
        </Flex>
      </CardBody>
    </Card>
  );
};

const ActiveUsers = ({ title, percentage, chart }) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p="16px">
      <CardBody>
        <Flex direction="column" w="100%">
          {chart}
          <Flex direction="column" mt="24px" mb="36px" alignSelf="flex-start">
            <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
              {title}
            </Text>
            <Text fontSize="md" fontWeight="medium" color="gray.400">
              <Text
                as="span"
                color={percentage > 0 ? "green.400" : "red.400"}
                fontWeight="bold"
              >
                {percentage > 0 ? `+${percentage}%` : `-${percentage}%`}
              </Text>{" "}
              than last week
            </Text>
          </Flex>
          <SimpleGrid gap={{ sm: "12px" }} columns={4}>
            <ChartStatistics
              title={"Users"}
              amount={"32,984"}
              percentage={20}
              icon={<WalletIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Clicks"}
              amount={"2.42m"}
              percentage={80}
              icon={<RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Sales"}
              amount={"2,400$"}
              percentage={30}
              icon={<CartIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Items"}
              amount={"320"}
              percentage={40}
              icon={<StatsIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
          </SimpleGrid>
        </Flex>
      </CardBody>
    </Card>
  );
};

const ChartStatistics = ({ title, amount, icon, percentage }) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const overlayRef = React.useRef();
  return (
    <Flex direction="column">
      <Flex alignItems="center">
        <IconBox as="box" h={"30px"} w={"30px"} bg={iconTeal} me="6px">
          {icon}
        </IconBox>
        <Text fontSize="sm" color="gray.400" fontWeight="semibold">
          {title}
        </Text>
      </Flex>
      <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px" my="6px">
        {amount}
      </Text>
      <Progress
        colorScheme="teal"
        borderRadius="12px"
        h="5px"
        value={percentage}
      />
    </Flex>
  );
};

const SalesOverview = ({ title, percentage, chart }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p="28px 10px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
      <CardHeader mb="20px" pl="22px">
        <Flex direction="column" alignSelf="flex-start">
          <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
            {title}
          </Text>
          <Text fontSize="md" fontWeight="medium" color="gray.400">
            <Text
              as="span"
              color={percentage > 0 ? "green.400" : "red.400"}
              fontWeight="bold"
            >
              {`${percentage}%`} more
            </Text>{" "}
            in 2021
          </Text>
        </Flex>
      </CardHeader>
      <Box w="100%" h={{ sm: "300px" }} ps="8px">
        {chart}
      </Box>
    </Card>
  );
};

