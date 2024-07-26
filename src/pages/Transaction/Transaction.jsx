import {
  Button,
  Card,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  TabIndicator,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FaArrowDown } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { IoSearch } from "react-icons/io5";

function Transaction() {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout>
      <Flex justify={"end"} mt={6} mb={3}>
        <Button>
          {" "}
          <Icon as={FaArrowDown} mr={2}></Icon> Export Csv
        </Button>
      </Flex>
      <Card>
        <Tabs position="relative" variant="unstyled">
          <TabList
            pt={4}
            display={"flex"}
            justifyContent={"space-between"}
            px={2}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} display={"flex"} gap={3}>
                {tab.name}
                <Tag colorScheme="gray" borderRadius={"full"}>
                  {tab.count}
                </Tag>
              </Tab>
            ))}
            <InputGroup maxW={"200px"}>
              <InputLeftElement pointerEvents="none">
                <Icon as={IoSearch}></Icon>
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
}

export default Transaction;
