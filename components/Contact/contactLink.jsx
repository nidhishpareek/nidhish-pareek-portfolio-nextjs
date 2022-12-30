import { Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import Image from 'next/image'

export const ContactLink = ({ link, logo, name }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = (colorMode==='dark')
  const hoverStyle = {
    
  }
  return (
    <Link href={link} style={{ textDecoration: "none" }} isExternal={true}>
      <Flex
        boxShadow={ isDark?
          "0px 1px 2px 0px rgba(0,255,255,0.7),1px 2px 4px 0px rgba(0,255,255,0.7),2px 4px 8px 0px rgba(0,255,255,0.7),2px 4px 16px 0px rgba(0,255,255,0.7)": 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
        }
        // boxShadow= {'0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)'}
        padding="20px"
        minW={"150px"}
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        // style={hoverStyle}
        _hover={{
      width:'170px',
      height:'200px',
      border:'1px solid rgba(255,255,255)'
    }}
      >
        <Image src={logo} width='100' height='150'></Image>
        <Text>{name}</Text>
      </Flex>
    </Link>
  );
};
