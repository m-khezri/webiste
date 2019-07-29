import React from 'react';
import { Link } from 'react-router-dom';
import './RhinoCaseStudy.scss';

class RhinoCaseStudy extends React.Component {
  render() {
    return (
      <div className="rhino-main-container">
        <div className="d-flex mt-5 ml-1">
          <Link className="proj-link nav-link" to="/"><i className="fas fa-home mr-2"></i>Home</Link>
          <Link className="proj-link nav-link" to="/projects"><i className="fas fa-project-diagram mr-2"></i>Projects</Link>
        </div>

        <div className="rhino-holder m-4">

        </div >
      </div >
    );
  }
}

export default RhinoCaseStudy;
