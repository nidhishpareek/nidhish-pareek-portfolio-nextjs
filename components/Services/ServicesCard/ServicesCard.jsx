import React from "react";
// import "./services-card.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { chakra } from "@chakra-ui/react";
import Image from "next/image";
export const ServicesCard = ({ image, tags, title }) => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    }); 
  }, []);
const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop)=>['width', 'height','alt', 'src','loader'].includes(prop)
})
const myLoader = ({ src, width, quality }) => {
  return `${src}`
}
  return (
    <div className="services-card" data-aos={"zoom-in"}>
      <ChakraImage loader={myLoader} src={''} alt={title} width='65' height='65' />
      <h2>{title}</h2>
      <div className="tags">
        {tags?.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div> 
  );
};
