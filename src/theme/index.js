import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

export const theme = extendTheme({
  colors: {
    p: {
      orange: "#5f00d9",
      black: "#171717",
    },
    black: {
      5: "#f3f3f7",
      10: "#eeeef4",
      20: "#d8dde2",
      40: "#babac4",
      60: "#797e82",
      80: "#535d66",
    },
  },

  fonts: {
    heading: "Ubuntu",
    body: "Ubuntu",
  },
  styles: {
    global: {
      body: {
        bg: "#f3f3f7",
      },
    },
  },
});
