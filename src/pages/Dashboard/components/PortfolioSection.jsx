import { HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { BsInfo } from "react-icons/bs";
import React from "react";

function PortfolioSection() {
  return (
    <HStack bg={"white"} borderRadius={"xl"} p={"6"} spacing={"16"}>
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
            <Text textStyle={"h2"}>22.39401004</Text> <Tag>BTC</Tag>
          </HStack>
          <HStack>
            <Text textStyle={"h2"}>₹ 15,000.00</Text> <Tag>INR</Tag>
          </HStack>
        </HStack>
      </Stack>
    </HStack>
  );
}

export default PortfolioSection;
