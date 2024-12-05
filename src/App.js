import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InitialRow from "./components/InitialRow";
import Lawyers from "./components/Lawyers";
import Members from "./components/Members";
import Ratings from "./components/Ratings";
import Location from "./components/Location";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Lawyers />
      <Members />
      <Ratings />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
