import {
  Box,
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
    <Box>
      <HStack height={"16"} justify={"space-between"} maxW={"80rem"} mx={"10"}>
        <Heading fontSize={"24px"}>Dashboard</Heading>
        <Menu>
          <MenuButton>
            <Icon fontSize={"25"} as={FaRegUserCircle}></Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default TopNav;
