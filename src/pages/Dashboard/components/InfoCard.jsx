import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

function InfoCard({ imgUrl, text, tagText, inverted }) {
  return (
    <CustomCard bgImage={imgUrl} bgSize={"cover"} bgRepeat={"no-repeat"}>
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
        borderRadius={"full"}
      >
        {" "}
        {tagText}
      </Tag>
      <Text textStyle={"h5"} mt={4} fontWeight={"bold"}>
        {text}
      </Text>
    </CustomCard>
  );
}

export default InfoCard;
