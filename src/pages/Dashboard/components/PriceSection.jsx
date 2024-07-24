import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";

function PriceSection() {
  return (
    <CustomCard>
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
        <Button>Buy</Button>
        <Button>Sell</Button>
      </HStack>
    </CustomCard>
  );
}

export default PriceSection;
