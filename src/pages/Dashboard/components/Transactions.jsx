import { Text } from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";

function Transactions() {
  return (
    <CustomCard>
      <Text fontSize={"sm"} color={"black.80"}>
        Recent Transactions
      </Text>
    </CustomCard>
  );
}

export default Transactions;
