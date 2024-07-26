import { Flex, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";

function SupportCard() {
  return (
    <Flex>
      <Stack>
        <Icon as={IoMdMail}></Icon>
      </Stack>
    </Flex>
  );
}

export default SupportCard;
