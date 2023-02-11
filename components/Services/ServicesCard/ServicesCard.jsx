import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { chakra } from "@chakra-ui/react";
import Image from "next/image";
export const ServicesCard = ({ icon, tags, title }) => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    }); 
  }, []);

const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop)=>['width', 'height','alt', 'src'].includes(prop)
})

  return (
    <div className="services-card" data-aos={"zoom-in"}>
      {/* <ChakraImage src={icon} alt={title} width='65' height='65' ></ChakraImage> */}
      <Image  src={icon} alt={title} width='65' height='65'/>
      <h2>{title}</h2>
      <div className="tags">
        {tags?.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div> 
  );
};
