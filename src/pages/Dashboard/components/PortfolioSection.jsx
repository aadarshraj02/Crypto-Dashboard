import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { BsInfo } from "react-icons/bs";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import React from "react";

function PortfolioSection() {
  return (
    <HStack justify={"space-between"} bg={"white"} borderRadius={"xl"} p={"6"}>
      <HStack spacing={16}>
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"14px"}>Total Portfolio Value</Text>
            <Icon as={BsInfo}></Icon>
          </HStack>
          <Text textStyle={"h2"}>$112,312.24</Text>
        </Stack>
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"14px"}>Wallet Balance</Text>
          </HStack>
          <HStack spacing={"6"}>
            <HStack>
              <Text textStyle={"h2"}>22.39401004</Text>{" "}
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h2"}>₹ 15,000.00</Text>{" "}
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button>
          {" "}
          <Icon fontSize={"18px"} mr={"2"} as={HiMiniArrowTrendingUp} /> Deposit
        </Button>
        <Button>
          {" "}
          <Icon fontSize={"18px"} mr={"2"} as={HiMiniArrowTrendingDown} />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
}

export default PortfolioSection;
