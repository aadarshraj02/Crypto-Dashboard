import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BsInfo } from "react-icons/bs";
import React from "react";

function PortfolioSection() {
  return (
    <HStack>
      <Stack>
        <HStack>
          <Text>Total Portfolio Value</Text>
          <Icon as={BsInfo}></Icon>
        </HStack>
      </Stack>
    </HStack>
  );
}

export default PortfolioSection;
