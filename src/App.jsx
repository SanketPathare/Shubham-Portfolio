import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import Projects from "./components/Projects/Projects"
import Contact from "./components/contact/Contact"
const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Projects/>
      <Contact/>
      <Footer />
    </>
  );
};

export default App;
