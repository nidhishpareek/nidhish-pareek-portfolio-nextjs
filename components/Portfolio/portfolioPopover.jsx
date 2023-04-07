import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { ChakraImage } from "../Misc/ChakraImage";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import { faUserLock } from "@fortawesome/free-solid-svg-icons/faUserLock";
import { Box, Flex } from "@chakra-ui/react";
export const PopoverElement = ({ item, index }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      justifyContent="center"
      alignItems={"center"}
      flexWrap="wrap"
      className="intermediate"
      width={["100%", "100%", "50%", "50%"]}
    >
      <Box
        width="fit-content"
        className="column"
        margin="auto"
        key={index}
        data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
      >
        <ChakraImage
          src={item.image}
          alt={item.title}
          width="100%"
          height={"100%"}
        />
        <div className="overlay">
          <div className="left">
            <h3>{item.title}</h3>
          </div>
          <div className="right">
            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faExternalLinkSquareAlt}
                size="2x"
                className="icon"
                title="Live view"
              />
            </a>
          </div>
        </div>
      </Box>
      <Popover>
        <PopoverTrigger>
          <Button width={"90%"} variant="solid" colorScheme={"gray"}>
            {item.title}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton size="2x" />
          <PopoverHeader fontWeight={"bold"}>
            <Flex alignContent={"baseline"}>
              <Flex>
                {item.repositoryUrl !== "private" ? (
                  <a
                    href={item.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.3em" }}
                      title="Github Repo"
                    />
                  </a>
                ) : (
                  <a href="#_" target="_blank">
                    <FontAwesomeIcon
                      icon={faUserLock}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.3em" }}
                      title="Private Repo"
                    />
                  </a>
                )}
                <a
                  href={item.liveUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkSquareAlt}
                    size="2x"
                    className="icon"
                    title="Live view"
                  />
                </a>
              </Flex>
              <Box>{item.title} </Box>
            </Flex>
          </PopoverHeader>
          <PopoverBody>
            <Text>{item.tagline}</Text>
            {item.techStack && (
              <>
                <Text fontStyle={"italic"} textDecoration="underline">
                  Tech-Stack-
                </Text>
                <Flex
                  flexWrap={"wrap"}
                  mt="10px"
                  columnGap="10px"
                  rowGap={"10px"}
                >
                  {item.techStack.map((tech) => (
                    <Box
                      borderRadius={"5px"}
                      paddingInline={"5px"}
                      key={tech}
                      bg={isDark ? "#4A5568" : "#CBD5E0"}
                    >
                      <Text>{tech}</Text>{" "}
                    </Box>
                  ))}
                </Flex>
              </>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
