import { Box, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaBitcoin } from "react-icons/fa";

function Transactions() {
  const transactions = [
    {
      icon: LiaRupeeSignSolid,
      text: "INR Deposit",
      amount: "₹ 8,00,000.00",
      timestamp: "2024-07-22 7:05 PM",
    },
    {
      icon: FaBitcoin,
      text: "BTC Sell",
      amount: "- 12.4824686 BTC",
      timestamp: "2024-07-22 7:05 PM",
    },
    {
      icon: LiaRupeeSignSolid,
      text: "INR Deposit",
      amount: "₹ 8,00,000.00",
      timestamp: "2024-07-22 7:05 PM",
    },
  ];

  return (
    <CustomCard>
      <Text fontSize={"sm"} color={"black.80"}>
        Recent Transactions
      </Text>
      <Stack>
        {transactions.map((transaction, index) => (
          <Flex key={index}>
            <Grid
              placeItems="center"
              bg={"black.5"}
              boxSize={10}
              borderRadius={"full"}
            >
              <Icon as={transaction.icon}></Icon>
            </Grid>
          </Flex>
        ))}
      </Stack>
    </CustomCard>
  );
}

export default Transactions;
