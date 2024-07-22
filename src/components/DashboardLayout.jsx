import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";

function DashboardLayout() {
  return (
    <Flex>
      <Sidenav />
      <Box flexGrow={1}>
        <TopNav />
      </Box>
    </Flex>
  );
}

export default DashboardLayout;
