import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
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
      {navLinks.map((nav, index) => (
        <HStack key={index}>
          <Icon as={nav.icon}></Icon>
          <Text>{nav.text}</Text>
        </HStack>
      ))}
    </Stack>
  );
}

export default Sidenav;
