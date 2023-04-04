import React, { useEffect } from "react";

// components
import { MyHeading } from "..//Heading/Heading";

// aos files
import Aos from "aos";
import "aos/dist/aos.css";

// Icons
import { PopoverElement } from "./portfolioPopover";

const Portfolio = ({ projects }) => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <section className="project" name="project" id="project">
      <div>
        <MyHeading text="Projects" style={{ marginBlock: "3rem" }} />
      </div>
      <div className="row">
        {projects.map((item, index) => (
          <PopoverElement
            key={index}
            index={index}
            item={item}
          ></PopoverElement>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
