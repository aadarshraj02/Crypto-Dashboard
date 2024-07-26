import { Button, Card, Flex, Icon, TabIndicator } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FaArrowDown } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function Transaction() {
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
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
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
