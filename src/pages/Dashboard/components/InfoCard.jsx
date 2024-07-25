import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag } from "@chakra-ui/react";

function InfoCard({ imgUrl }) {
  return (
    <CustomCard bgImage={imgUrl} bgSize={"cover"} bgRepeat={"no-repeat"}>
      <Tag bg="p.purple" color={"white"} borderRadius={"full"}>
        {" "}
        Loan
      </Tag>
    </CustomCard>
  );
}

export default InfoCard;
