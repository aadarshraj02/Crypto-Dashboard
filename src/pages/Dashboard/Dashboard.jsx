import React from "react";
import Sidenav from "../../components/Sidenav";
import TopNav from "../../components/TopNav";
import { Box, Flex } from "@chakra-ui/react";

function Dashboard() {
  return (
    <div>
      <Flex>
        <Sidenav />
        <Box flexGrow={1}>
          <TopNav />
        </Box>
      </Flex>
    </div>
  );
}

export default Dashboard;
