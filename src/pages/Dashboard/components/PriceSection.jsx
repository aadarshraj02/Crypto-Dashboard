import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { HStack, Icon, Stack } from "@chakra-ui/react";

function PriceSection() {
  return (
    <CustomCard>
      <Stack>
        <HStack color={"black.80"}>
          <Text fontSize={"14px"}>Total Portfolio Value</Text>
          <Icon as={BsInfo}></Icon>
        </HStack>
        <Text textStyle={"h2"} fontWeight={"medium"}>
          $112,312.24
        </Text>
      </Stack>
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
            </Text>{" "}
            <Tag colorScheme="gray">BTC</Tag>
          </HStack>
          <HStack>
            <Text textStyle={"h2"} fontWeight={"medium"}>
              ₹ 15,000.00
            </Text>{" "}
            <Tag colorScheme="gray">INR</Tag>
          </HStack>
        </HStack>
      </Stack>
    </CustomCard>
  );
}

export default PriceSection;
