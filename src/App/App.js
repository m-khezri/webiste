import React from 'react';
import './App.scss';
import AboutMe from '../Pages/AboutMe/AboutMe';
import Footer from '../Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <h1> Hello, I'm here... </h1>
      <button className='btn btn-primary'> Hello </button>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
