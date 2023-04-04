import { chakra } from "@chakra-ui/react";
import Image from "next/image";

export const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "alt", "src"].includes(prop),
});
