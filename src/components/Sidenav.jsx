import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

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
    <Stack
      boxShadow="md"
      width={"16rem"}
      height={"100vh"}
      justify={"space-between"}
      display={{
        base: "none",
        lg: "flex",
      }}
    >
      <Box>
        <Heading as="h1" fontSize={"20px"} pt={"56px"} textAlign={"center"}>
          CRYPTO
        </Heading>
        <Box mt={"6"} mx={"3"}>
          {navLinks.map((nav, index) => (
            <HStack
              key={index}
              py={"3"}
              px={"4"}
              gap={"4"}
              color={"#797e82"}
              borderRadius={"10px"}
              _hover={{
                bg: "#f3f3f7",
                color: "#171717",
                cursor: "pointer",
              }}
            >
              <Icon as={nav.icon}></Icon>
              <Text fontSize={"14px"} fontWeight={"bold"}>
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt={"6"} mx={"3"} mb={"6"}>
        <HStack
          py={"3"}
          px={"4"}
          gap={"4"}
          color={"#797e82"}
          borderRadius={"10px"}
          _hover={{
            bg: "#f3f3f7",
            color: "#171717",
            cursor: "pointer",
          }}
        >
          <Icon as={BiSupport}></Icon>
          <Text fontSize={"14px"} fontWeight={"bold"}>
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
}

export default Sidenav;
