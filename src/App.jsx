import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Pipeline from "./pages/Pipeline";
import Publication from "./pages/Publication";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Career from "./pages/Career";

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
