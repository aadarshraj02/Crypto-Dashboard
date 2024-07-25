import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag } from "@chakra-ui/react";

function InfoCard() {
  return (
    <CustomCard>
      <Tag bg="p.purple" color={"white"} borderRadius={"full"}>
        {" "}
        Loan
      </Tag>
    </CustomCard>
  );
}

export default InfoCard;
