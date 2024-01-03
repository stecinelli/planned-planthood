import { Envelope } from "./Components/Envelope";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TimeSection from "./Components/TimeSection";
import ProductsSection from "./Components/ProductsSection";
import TipsSection from "./Components/TipsSection";

import "./Style/App.css";

function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <div className="content-container">
        <div className="overlap">
          <div className="bg" />
          <Footer />
          <TimeSection />
          <ProductsSection />
          <img
            className="line-2"
            alt="Line"
            src="https://c.animaapp.com/5E9Iq87v/img/line-2.svg"
          />
          <TipsSection />
          <div className="text-wrapper-19">PLANNED PLANTHOOD</div>
        </div>
      </div>
    </>
  );
}

export default App;
