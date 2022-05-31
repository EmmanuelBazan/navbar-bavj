import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Portafolio from './components/Portafolio/Portafolio';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import { useRef } from 'react';

function App() {

  const homeRef = useRef()
  const aboutMeRef = useRef()
  const skillsRef = useRef()
  const portafilioRef = useRef()
  const experienceRef = useRef()
  const contactRef = useRef()

  return (
    <>
      <NavBar></NavBar>
      <Home ref={homeRef}></Home>
      <AboutMe ref={aboutMeRef}></AboutMe>
      <Skills ref={skillsRef}></Skills>
      <Portafolio ref={portafilioRef}></Portafolio>
      <Experience ref={experienceRef}></Experience>
      <Contact ref={contactRef}></Contact>
    </>
  );
}

export default App;
