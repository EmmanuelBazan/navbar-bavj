import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Portafolio from './components/Portafolio/Portafolio';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

import useWindowDimensions from './hooks/useWindowDimensions';

function App() {

  const { height } = useWindowDimensions()

  return (
    <>
      <NavBar 
        _current_height={height}
      >
      </NavBar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Portafolio></Portafolio>
      <Experience></Experience>
      <Contact></Contact>
    </>
  );
}

export default App;
