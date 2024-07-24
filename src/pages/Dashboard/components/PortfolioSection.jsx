import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BsInfo } from "react-icons/bs";
import React from "react";

function PortfolioSection() {
  return (
    <HStack bg={"white"} borderRadius={"xl"} p={"6"}>
      <Stack>
        <HStack color={"black.80"}>
          <Text fontSize={"14px"}>Total Portfolio Value</Text>
          <Icon as={BsInfo}></Icon>
        </HStack>
        <Text textStyle={"h2"}>$112,312.24</Text>
      </Stack>
    </HStack>
  );
}

export default PortfolioSection;
