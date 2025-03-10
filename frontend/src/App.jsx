import "./App.css";
import "./styles/base.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import  { useRef } from "react";


function App() {
  const homeRef=useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if(section === "home" && homeRef.current){
      homeRef.current.scrollIntoView({behavior:"smooth"});
    }
    else if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } 
    else if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  


  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Home aboutRef={aboutRef} contactRef={contactRef}  />
    </>
  );
}

export default App;
