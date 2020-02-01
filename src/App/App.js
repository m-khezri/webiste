import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from '../Pages/AboutMe/AboutMe';
import Projects from '../Pages/Projects/Projects';
import RhinoCaseStudy from '../Pages/RhinoCaseStudy/RhinoCaseStudy';
import AffarsCaseStudy from '../Pages/AffcarsCaseStudy/AffcarsCaseStudy';
import Demo from '../Pages/Demo/Demo';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={AboutMe} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/RhinoCaseStudy" exact component={RhinoCaseStudy} />
          <Route path="/projects/AffcarsCaseStudy" exact component={AffarsCaseStudy} />
          <Route path="/projects/RhinoCaseStudy/demo" exact component={Demo} />
        </div>
      </Router>
    );
  }
}

export default App;
