import { HStack, Icon, Stack } from "@chakra-ui/react";
import { BsInfo } from "react-icons/bs";
import React from "react";

function PortfolioSection() {
  return (
    <HStack>
      <Stack>
        <HStack>Total Portfolio Value</HStack>
        <Icon as={BsInfo}></Icon>
      </Stack>
    </HStack>
  );
}

export default PortfolioSection;
