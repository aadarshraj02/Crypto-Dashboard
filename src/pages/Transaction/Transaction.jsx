import { Button, Card, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FaArrowDown } from "react-icons/fa6";

function Transaction() {
  return (
    <DashboardLayout>
      <Flex justify={"end"} mt={6} mb={3}>
        <Button>
          {" "}
          <Icon as={FaArrowDown} mr={2}></Icon> Export Csv
        </Button>
      </Flex>
      <Card></Card>
    </DashboardLayout>
  );
}

export default Transaction;
