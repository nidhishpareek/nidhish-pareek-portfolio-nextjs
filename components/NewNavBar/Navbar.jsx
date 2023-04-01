import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  chakra,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavTag from "../Nav/NavTag";
import { map } from "lodash";
import { resume_link } from "../ResumeLink";
import SwitchButton from "../Button/SwitchButton";
import Image from "next/image";
import NavLogoDark from "/public/NavLogoDark.png";
import NavLogoLight from "/public/NavLogoLight.png";

const ChakraNextImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "alt", "src"].includes(prop),
});

const NewNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const NavData = {
    home: { key: "home", name: "Home", scheme: "normal" },
    aboutme: { key: "aboutme", name: "About", scheme: "normal" },
    services: { key: "services", name: "Services", scheme: "normal" },
    portfolio: { key: "portfolio", name: "Projects", scheme: "normal" },
    contact: { key: "contact", name: "Contact", scheme: "normal" },
    resume: {
      key: "contact",
      name: "Contact",
      scheme: "red",
      link: resume_link,
    },
  };
  return (
    <>
      <Box
        top="0px"
        zIndex={1}
        width={"100vw"}
        position="fixed"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        w="100%"
        paddingInline={"2rem"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <ChakraNextImage
              width="200px"
              height="100%"
              src={isDark ? NavLogoDark : NavLogoLight}
              alt="Nidhish Pareek NavBar Logo"
            ></ChakraNextImage>
          </Box>

          <Flex alignItems={"center"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {map(NavData, (field) => {
                  return (
                    <NavTag
                      key={field?.key}
                      to={field?.key}
                      name={field?.name}
                      scheme={field?.scheme}
                      link={field?.link}
                    />
                  );
                })}
              </HStack>
            </HStack>
            <SwitchButton />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {map(NavData, (field) => {
                return (
                  <NavTag
                    key={field?.key}
                    to={field?.key}
                    name={field?.name}
                    link={field?.link}
                    onClickEvent={isOpen ? onClose : onOpen}
                  />
                );
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NewNavbar;
