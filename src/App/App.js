import React from 'react';
import './App.scss';
import AboutMe from '../Pages/AboutMe/AboutMe';
import Footer from '../Pages/Footer/Footer';
import Projects from '../Pages/Projects/Projects';
import NavBar from '../Pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
