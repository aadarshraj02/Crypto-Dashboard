import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

function DashboardLayout({ title, children }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <Sidenav />
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container maxW={"70rem"} bg={"red"}>
          {children}
        </Container>
      </Box>
    </Flex>
  );
}

export default DashboardLayout;
