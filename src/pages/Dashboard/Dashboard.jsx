import React from "react";
import Sidenav from "../../components/Sidenav";
import TopNav from "../../components/TopNav";
import { Box, Flex } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";

function Dashboard() {
  return (
    <DashboardLayout title={"Dashboard"}>
      <PortfolioSection />
    </DashboardLayout>
  );
}

export default Dashboard;
