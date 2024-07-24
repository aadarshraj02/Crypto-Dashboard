import React from "react";
import Sidenav from "../../components/Sidenav";
import TopNav from "../../components/TopNav";
import { Box, Flex } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";

function Dashboard() {
  return (
    <DashboardLayout title={"Dashboard"}>
      <PortfolioSection />
      <PriceSection />
    </DashboardLayout>
  );
}

export default Dashboard;
