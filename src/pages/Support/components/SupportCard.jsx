import { Card, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";

function SupportCard() {
  return (
    <Flex>
      <Stack>
        <Icon as={IoMdMail} boxSize={6} color={"p.purple"}></Icon>
        <Text fontWeight={"bold"} as={"h1"} textStyle={"h1"}>
          Contact Us
        </Text>
        <Text fontSize={"sm"} color={"black.60"}>
          Have a Question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>

      <Card p={6} borderRadius={"1rem"}>
        <Text fontWeight={"semibold"} fontSize={"sm"}>
          You will response within 24 hours of time of submit.
        </Text>
      </Card>
    </Flex>
  );
}

export default SupportCard;
