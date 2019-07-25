import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from '../Pages/AboutMe/AboutMe';
import Projects from '../Pages/Projects/Projects';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={AboutMe} />
          <Route path="/projects" exact component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
