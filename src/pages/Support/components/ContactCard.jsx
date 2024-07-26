import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
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

const ContactCard = () => {
  return (
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
  );
};

export default ContactCard;
