import Navbar from "./components/Navbar/index.jsx";
import Hero from "./components/Herosection/index.jsx";
import Programs from "./components/Programs";
import AboutUs from "./components/Aboutussection/index.jsx";
import Footer from "./components/Footer/index.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs/>
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default App;