import pharmeasy from "../public/images/PharmeasyClonepic.png";
import netmeds from "../public/images/netmeds.png";
import orbitz from "../public/images/orbitz.png";
import weather from "../public/images/weather.png";
import crickbuzz from "../public/images/crickbuzz.png";


 
const PortfolioData = [
  {
    id: 1,
    title: "Pharmeasy Clone",
    owner:'Group Project',
    tagline: "It is a MERN Full Stack Project to build a clone of pharmeasy.in, an eCommerce website that is responsive with pixel-perfect UI and built with React, Redux, and Chakra UI. Backend with node js, express js, MongoDB. We used JSON web token (JWT) for authentication. We used the razor pay test version of the payment gateway to authenticate the payment gateway. ",
    liveUrl: "https://teampharmeasyclone.netlify.app",
    repositoryUrl: "https://github.com/nidhishpareek/pharmeasyclone",
    image: pharmeasy,
    techStack:['React','Redux','Chakra-UI','EmailJS','Axios', 'MongoDB', 'Node.js', 'Express.js', 'MERN']
  },
  {
    id: 2,
    title: "Netmeds Clone",
    owner:'Group Project',
    tagline: "A clone of netmeds.com where you can search products from limited database then add them to cart and checkout them.",
    liveUrl: "https://teamnetlifyclone.netlify.app/",
    repositoryUrl: "https://github.com/nidhishpareek/NetMeds-Clone",
    image: netmeds,
    techStack:['React','Redux','Chakra-UI','EmailJS','Axios']
  },
  {
    id: 3,
    title: "Orbitz Clone",
    owner:'Group Project',
    tagline: "A clone website of orbitz.com, here you can search the letest departing flights between any destination, and then book the tickets.",
    liveUrl: "https://quiet-begonia-af9b6e.netlify.app/",
    repositoryUrl: "https://github.com/nidhishpareek/Orbitz-Clone",
    image: orbitz,
    techStack:['HTML 5','CSS 3','Advance JS', 'Fetch API', 'Bootstrap']
  },
  {
    id: 4,
    title: "Weather App",
    owner:'Solo Project',
    tagline: "A app with cool UI to provide you weather information, it can show you information according to your GPS location, or you can search any place.",
    liveUrl: "https://super-elf-34752e.netlify.app/",
    repositoryUrl: "https://github.com/nidhishpareek/Weather-App",
    image: weather,
    techStack:['HTML 5','CSS 3','Advance JS', 'Fetch API', 'Bootstrap']

  },
  {
    id: 5,
    title: "Crickbuzz Clone",
    owner:'Group Project',
    tagline: "A clone website of crickbuzz.com, in this website, you can login, stream static videos, login and subscribe to crickbuzz plus.",
    liveUrl: "https://heroic-puffpuff-cbebb9.netlify.app/",
    repositoryUrl: "https://github.com/nidhishpareek/CrickBuzz-Clone",
    image: crickbuzz,
    techStack:['HTML 5','CSS 3','Advance JS', 'Static-Website', 'Bootstrap']
  },
  
];
export default PortfolioData;
