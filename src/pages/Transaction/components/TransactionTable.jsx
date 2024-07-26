import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Divider,
  Tag,
} from "@chakra-ui/react";

function TransactionTable() {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Withdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Withdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data, index) => (
            <Tr key={index}>
              <td fontSize={"sm"} fontWeight={"medium"}>
                {data.id}
              </td>
              <td>
                <Stack spacing={0}>
                  <Text fontSize={"sm"} fontWeight={"medium"}>
                    {data.date}
                  </Text>
                  <Text
                    fontSize={"xs"}
                    fontWeight={"medium"}
                    color={"black.60"}
                  >
                    {data.time}
                  </Text>
                </Stack>
              </td>
              <td>
                {" "}
                <Stack spacing={0}>
                  <Text fontSize={"sm"} fontWeight={"medium"}>
                    {data.type.name}
                  </Text>
                  <Text
                    fontSize={"xs"}
                    fontWeight={"medium"}
                    color={"black.60"}
                  >
                    {data.type?.tag}
                  </Text>
                </Stack>
              </td>
              <td fontSize={"sm"} fontWeight={"medium"}>
                {data.amount}
              </td>
              <td fontSize={"sm"} fontWeight={"medium"}>
                <Tag
                  color={"white"}
                  rounded={"full"}
                  bg={statusColor[data.status]}
                >
                  {" "}
                  {data.status}
                </Tag>
              </td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable;
