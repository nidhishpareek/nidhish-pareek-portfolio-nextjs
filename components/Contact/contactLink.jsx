import { chakra, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

export const ContactLink = ({ link, logo, name }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "alt", "src"].includes(prop),
  });
  return (
    <Link href={link} style={{ textDecoration: "none" }} isExternal={true}>
      <Flex
        boxShadow={
          isDark
            ? "rgba(0,255,255,0.2)  0px 1px 30px 1px"
            : "rgba(0, 0, 0, 0.20) 0px 1px 30px 1px"
        }
        padding="20px"
        minW={"150px"}
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        _hover={{
          width: "170px",
          height: "200px",
          border: "1px solid rgba(255,255,255)",
        }}
      >
        <ChakraImage
          src={logo}
          width="100"
          alt={name + " Link"}
          height="100"
        ></ChakraImage>
        <Text>{name}</Text>
      </Flex>
    </Link>
  );
};
