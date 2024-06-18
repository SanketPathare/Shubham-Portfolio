import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Projects from "./components/Projects/Projects"
import Contact from "./components/contact/Contact"
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css"
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/About" element={<Intro />} />
          <Route path="/Project" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
    
    </>
  );
};

export default App;
