import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import { MyHeading } from "../Heading/Heading";
import MyPhoto from "../../public/images/MyPhoto.png";
import { AboutMeContent } from "../AboutMeContent.js";
import Aos from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutMe = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "alt", "src"].includes(prop),
  });

  return (
    <Box id="aboutme">
      <MyHeading text="About Me" style={{ marginBottom: "3rem" }} />
      <Flex
        width={"90%"}
        gap="30px"
        flexDirection={["column", "column", "row", "row"]}
        margin="auto"
        textAlign={"center"}
        alignItems="center"
        justifyContent={["center", "center", "space-between", "space-between"]}
      >
        <Flex>
          <motion.div
            className="svg"
            animate={{ translateY: [-5, 0, -5, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
            <ChakraImage
              loading="lazy"
              src={MyPhoto}
              margin="auto"
              width="auto"
              maxW="400px"
              borderRadius={"200px"}
              border="2px solid"
              data-aos="fade-up"
          // data-aos-anchor-placement="bottom-center"
          data-aos-duration="3000"
              boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
            />
          </motion.div>
        </Flex>
        <Box maxW={700} margin="auto" data-aos={"zoom-in"}>
          <Text textAlign={"justify"} mb="2px">
            <Text as={"span"}>My motto is </Text>
            <Text fontWeight={"bold"} as="span">
              Achieving Possimpable{" "}
            </Text>
            which means achieving the threshold where possible & impossible
            meet.
          </Text>
          {AboutMeContent &&
            AboutMeContent?.map((content, index) => (
              <Text textAlign={"justify"} key={index} mb="2px">
                {content}
              </Text>
            ))}
        </Box>
      </Flex>
    </Box>
  );
};
export default AboutMe;
