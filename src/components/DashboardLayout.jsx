import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

function DashboardLayout({ title, children }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        {" "}
        <Sidenav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container
          overflowX={"hidden"}
          overflowY={"auto"}
          maxW={"70rem"}
          mt={"6"}
          h="calc(100vh - 90px)"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
}

export default DashboardLayout;
