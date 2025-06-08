import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-white w-screen flex flex-col items-center">
        <Navbar/>
        <HeroSection />
        <ProjectSection/>
        <Skills />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
