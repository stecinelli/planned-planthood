import "./Style/App.css";
import { Hero } from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
    </div>
  );
}

export default App;
