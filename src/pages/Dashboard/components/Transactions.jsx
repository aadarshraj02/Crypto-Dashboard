import { Box, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
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
      <Text mb={6} fontSize={"sm"} color={"black.80"}>
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, index) => (
          <Fragment key={index}>
            {index !== 0 && <Divider />}
            <Flex gap={4}>
              <Grid
                placeItems="center"
                bg={"black.5"}
                boxSize={10}
                borderRadius={"full"}
              >
                <Icon as={transaction.icon}></Icon>
              </Grid>
              <Flex justify={"space-between"} width={"full"}>
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize={"sm"} color={"black.40"}>
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
    </CustomCard>
  );
}

export default Transactions;
