import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BsInfo } from "react-icons/bs";
import React from "react";

function PortfolioSection() {
  return (
    <HStack bg={"white"} borderRadius={"xl"} p={"6"}>
      <Stack>
        <HStack color={"#535d66"}>
          <Text fontSize={"14px"}>Total Portfolio Value</Text>
          <Icon as={BsInfo}></Icon>
        </HStack>
      </Stack>
    </HStack>
  );
}

export default PortfolioSection;
