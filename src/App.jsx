import "./App.css";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Nav from "./components/Nav";
import Strategy from "./components/Strategy";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Strategy />
      <Approach />
      <ImageSlider />
      <Footer />
    </>
  );
}

export default App;
