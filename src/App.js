import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Lawyers from "./components/Lawyers";
import Members from "./components/Members";
import Ratings from "./components/Ratings";
import Location from "./components/Location";
import "./index.css";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const elementRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    team: useRef(null),
    testimonials: useRef(null),
    location: useRef(null),
    contact: useRef(null),
  };

  const scrollToElement = (elementRef) => {
    elementRefs[elementRef].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header scrollTo={scrollToElement} />
      <Hero refs={elementRefs.home} />
      <About refs={elementRefs.about} />
      <Lawyers refs={elementRefs.services} />
      <Members refs={elementRefs.team} />
      <Ratings refs={elementRefs.testimonials} />
      <Location  refs={elementRefs.location} />
      <Footer refs={elementRefs.contact} />
    </div>
  );
}

export default App;
