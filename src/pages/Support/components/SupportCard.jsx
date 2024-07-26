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
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

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

      <Card p={6} borderRadius={"1rem"} flexGrow={1}>
        <Stack spacing={3}>
          <Text fontWeight={"semibold"} fontSize={"sm"}>
            You will response within 24 hours of time of submit.
          </Text>

          <HStack
            flexDirection={{
              base: "column",
              md: "row",
            }}
          >
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

          <Stack>
            <Button>Send a Message</Button>
            <Button colorScheme="gray">Book a Meeting</Button>
          </Stack>
        </Stack>
      </Card>
    </Flex>
  );
}

export default SupportCard;
