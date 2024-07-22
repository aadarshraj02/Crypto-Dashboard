import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";

function TopNav() {
  return (
    <Box boxShadow={"xl"}>
      <HStack
        height={"16"}
        justify={"space-between"}
        maxW={"60rem"}
        mx={"auto"}
      >
        <Heading fontSize={"24px"}>Dashboard</Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaRegUserCircle}></Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default TopNav;
