import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ChakraImage } from "../../Misc/ChakraImage";
export const ServicesCard = ({ image, tags, title }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="services-card" data-aos={"zoom-in"}>
      <ChakraImage src={image} alt={title} width="65" height="65" />
      <h2>{title}</h2>
      <div className="tags">
        {tags?.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
