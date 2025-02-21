import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";

import ContactCard from "./ContactCard";

function SupportCard() {
  return (
    <Flex
      gap={6}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW={"24rem"}>
        <Icon as={IoMdMail} boxSize={6} color={"p.purple"}></Icon>
        <Text fontWeight={"bold"} as={"h1"} textStyle={"h1"}>
          Contact Us
        </Text>
        <Text fontSize={"sm"} color={"black.60"}>
          Have a Question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <ContactCard />
    </Flex>
  );
}

export default SupportCard;
