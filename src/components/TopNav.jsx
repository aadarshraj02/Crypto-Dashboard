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
import { RiMenu2Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

function TopNav({ title, onOpen }) {
  return (
    <Box px={"4"} bg={"white"}>
      <HStack
        height={"16"}
        justify={"space-between"}
        maxW={"70rem"}
        mx={"auto"}
      >
        <Icon
          as={RiMenu2Fill}
          onClick={onOpen}
          cursor={"pointer"}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize={"24px"}>{title}</Heading>
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
