import React from "react";

// Card
import { ServicesCard } from "./ServicesCard/ServicesCard";
import { MyHeading } from "../Heading/Heading";

const Services = ({ services }) => {
  return (
    <section className="services-container" name="services" id="services">
      <MyHeading text="Services" />
      <div className="services-cards">
        {services &&
          services?.map((elem, index) => (
            <ServicesCard
              key={index}
              image={elem.icon}
              title={elem.title}
              tags={elem.tags}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;
