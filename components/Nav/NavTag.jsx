import { Link, Button, LinkBox, Box } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const NavTag = ({ to, name, link, scheme, onClickEvent }) => {
  let style = {
    marginBlock: "5px",
    marginInline: "2px",
    hover: {
      background: "transparent",
      color: "red",
    },
  };
  const redStyle = {
    background: "transparent",
    border: "2px solid red",
    color: "red",
    marginInline: "1rem",
  };
  console.log(scheme);
  if (scheme === "red") {
    style = redStyle;
  }

  return (
    <>
      {link ? (
        <Button variant="ghost" style={style} onClick={onClickEvent}>
          <a
            isExternal
            target={"_blank"}
            rel={"external noreferrer"}
            href={link}
          >
            Resume
          </a>
        </Button>
      ) : (
        <Button variant="ghost">
          <ScrollLink onClick={onClickEvent} to={to}>
            {name}
          </ScrollLink>
        </Button>
      )}
    </>
  );
};
export default NavTag;
