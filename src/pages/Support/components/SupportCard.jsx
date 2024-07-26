import {
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
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

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

        <HStack>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="Enter Your First Name" />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" placeholder="Enter Your Last Name" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter Your Email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea type="text" placeholder="Enter Your Message" />
        </FormControl>
        <Checkbox defaultChecked>I agree with Terms & Conditions</Checkbox>
      </Card>
    </Flex>
  );
}

export default SupportCard;
