import React from "react";
import Sidenav from "../../components/Sidenav";
import TopNav from "../../components/TopNav";
import { Flex } from "@chakra-ui/react";

function Dashboard() {
  return (
    <div>
      <Flex>
        <Sidenav /> <TopNav />
      </Flex>
    </div>
  );
}

export default Dashboard;
