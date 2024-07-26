import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

function Sidenav() {
  const location = useLocation();
  console.log(location);

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

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
      bg={"white"}
      boxShadow={{
        base: "none",
        lg: "md",
      }}
      width={{
        base: "full",
        lg: "16rem",
      }}
      height={"100vh"}
      justify={"space-between"}
    >
      <Box>
        <Heading as="h1" fontSize={"20px"} pt={"56px"} textAlign={"center"}>
          CRYPTO
        </Heading>
        <Box mt={"6"} mx={"3"}>
          {navLinks.map((nav, index) => (
            <Link to={nav.link} key={index}>
              <HStack
                bg={isActiveLink(nav.link) ? "#f3f3f7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797e82"}
                py={"3"}
                px={"4"}
                gap={"4"}
                borderRadius={"10px"}
                _hover={{
                  bg: "#f3f3f7",
                  color: "#171717",
                  cursor: "pointer",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize={"14px"} fontWeight={"bold"}>
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt={"6"} mx={"3"} mb={"6"}>
        <Link to="/support">
          <HStack
            py={"3"}
            px={"4"}
            gap={"4"}
            borderRadius={"10px"}
            bg={isActiveLink("/support") ? "#f3f3f7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797e82"}
            _hover={{
              bg: "#f3f3f7",
              color: "#171717",
              cursor: "pointer",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize={"14px"} fontWeight={"bold"}>
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
}

export default Sidenav;
