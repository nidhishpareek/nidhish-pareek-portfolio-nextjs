import React from "react";
import Image from 'next/image'
// SVG

import man from "../../public/images/undraw_developer_activity_re_39tg.svg";

// Animation

import { Link } from "react-scroll";
import { motion } from "framer-motion";

// CSS
import styles from "./home.module.css";
import { Heading, Text, chakra } from "@chakra-ui/react";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const Home = () => {
  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop)=>['width', 'height','alt', 'src'].includes(prop)
  })
  return (
    <section className={styles.homeContainer} id="home" name="home">
      <motion.div
        className={styles.content}
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <Heading>Hi There, (^人^)</Heading>
        <Heading>I’m Nidhish Pareek</Heading>
        <Text>I am a MERN stack developer. </Text>
        <Link
          className={styles.homeBtn}
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          See My Work
        </Link>
      </motion.div>

      <motion.div
        className={styles.svg}
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <ChakraImage src={man} zIndex={'1'} width='auto' alt="Developer" />
      </motion.div>
    </section>
  );
};

export default Home;
