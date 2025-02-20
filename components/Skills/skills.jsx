import { Flex } from "@chakra-ui/react";
import { MyHeading } from "../Heading/Heading";
import SkillCard from "./skillsCard";

const Skills = ({ skills }) => {
  return (
    <>
      <MyHeading text="Skills" style={{ marginBottom: "3rem" }} />
      <Flex gap={"40px"} wrap="wrap" justifyContent={"center"}>
        {skills.map((element, index) => {
          return (
            <SkillCard
              animation={index % 2 == 0 ? "fade-right" : "fade-left"}
              key={index}
              imageURL={element.image}
              skillName={element.skill}
            />
          );
        })}
      </Flex>
    </>
  );
};
export default Skills;
