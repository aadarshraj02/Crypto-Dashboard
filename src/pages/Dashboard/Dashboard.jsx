import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

function Dashboard() {
  return (
    <DashboardLayout title={"Dashboard"}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1.1fr)",
          md: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={2}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;
