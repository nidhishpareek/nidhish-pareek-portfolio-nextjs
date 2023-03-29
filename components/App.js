// import "../styles/App.css";
import ServicesData from "./ServicesData";
import PortfolioData from "./PortfolioData";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import { Box, ChakraProvider } from "@chakra-ui/react";
import NavBar from "./Nav/NavBar";
import Skills from "./Skills/skills";
import SkillData from "./SkillsData";
import AboutMe from "./AboutMe/aboutme";
import NewNavbar from "./NewNavBar/Navbar";

function App() {
  return (
    <>
      <ChakraProvider>
        <NewNavbar />
        <NavBar></NavBar>
        <Box
          maxW="1200px"
          justifyContent="center"
          margin="auto"
          className="App"
        >
          <div className="smallerApp">
            <Home />
            <AboutMe />
            <Skills skills={SkillData} />
            <Services services={ServicesData} />
            <Portfolio projects={PortfolioData} />
            <Contact />
          </div>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
