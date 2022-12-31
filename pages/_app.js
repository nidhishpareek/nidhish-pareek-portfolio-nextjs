import '../styles/globals.css'
import '../styles/App.css'
import "../components/Contact/contact.css";
// import './index.css';
import  '../components/index.css'
import "../components/Button/button.css";
// import "./heading.css";
import "../components/Heading/heading.css";
// import "./home.css";
// import '../components/Home/home.css'
// import './switchcss.css'
import '../components/Nav/switchcss.css';
// import "./portfolio.css";
import '../components/Portfolio/portfolio.css'
// import "./services-card.css";
import '../components/Services/ServicesCard/services-card.css';
// import "./services.css";
import '../components/Services/services.css'


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
