import { Text } from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";

function Transactions() {
  const transactions = [
    {
      icon: "",
      text: "INR Deposit",
      amount: "₹ 8,00,000.00",
      timestamp: "2024-07-22 7:05 PM",
    },
    {
      icon: "",
      text: "INR Deposit",
      amount: "₹ 8,00,000.00",
      timestamp: "2024-07-22 7:05 PM",
    },
    {
      icon: "",
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
    </CustomCard>
  );
}

export default Transactions;
