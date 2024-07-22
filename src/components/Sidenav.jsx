import { Box } from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";

function Sidenav() {
  return (
    <Box as="aside">
      <MdDashboard />
    </Box>
  );
}

export default Sidenav;
