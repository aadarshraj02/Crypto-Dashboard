import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

function InfoCard({ imgUrl, text }) {
  return (
    <CustomCard bgImage={imgUrl} bgSize={"cover"} bgRepeat={"no-repeat"}>
      <Tag bg="p.purple" color={"white"} borderRadius={"full"}>
        {" "}
        Loan
      </Tag>
      <Text textStyle={"h5"} mt={4} fontWeight={"bold"}>
        {text}
      </Text>
    </CustomCard>
  );
}

export default InfoCard;
