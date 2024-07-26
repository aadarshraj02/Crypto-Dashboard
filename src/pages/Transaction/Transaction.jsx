import { Button, Card, Flex, Icon, TabIndicator, Tag } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FaArrowDown } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

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
          <TabList>
            {tabs.map((tab, index) => (
              <Tab key={index}>
                {tab.name}

                <Tag>{tab.count}</Tag>
              </Tab>
            ))}
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
}

export default Transaction;
