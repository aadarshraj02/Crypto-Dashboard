import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { IoAddCircle } from "react-icons/io5";
import { FaCircleMinus } from "react-icons/fa6";

function PriceSection() {
  const timeStamps = ["11:15 AM", "12:15 PM", "1:15 PM", "2:15 PM", "3:15 PM"];
  return (
    <CustomCard>
      <Flex justifyContent={"space-between"} align={"start"}>
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"14px"}>Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={"6"}
            align={{
              base: "flex-start",
              xl: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                22.39401004
              </Text>
              <HStack fontWeight={"medium"} color={"green.500"}>
                <Icon as={GoArrowUpRight}></Icon>
                <Text fontSize={"sm"} fontWeight={"medium"}>
                  0.04%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button>
            {" "}
            <Icon as={IoAddCircle} mr={2}></Icon> Buy
          </Button>
          <Button>
            {" "}
            <Icon as={FaCircleMinus} mr={2}></Icon>Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Image src="/graph.svg" width={"100%"} mt={"3rem"}></Image>
            <HStack justify={"space-between"}>
              {timeStamps.map((timestamp) => (
                <Text key={timestamp} fontSize={"sm"} color={"black.80"}>
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
}

export default PriceSection;
