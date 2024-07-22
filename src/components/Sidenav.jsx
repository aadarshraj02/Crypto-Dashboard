import { Box, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";

function Sidenav() {
  const navLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbArrowsExchange,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack>
      {navLinks.map((nav) => (
        <HStack>
          <Icon as={nav.icon}></Icon>
          <Text>{nav.text}</Text>
        </HStack>
      ))}
    </Stack>
  );
}

export default Sidenav;
