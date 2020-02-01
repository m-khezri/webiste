import React from 'react';
import './AffcarsCaseStudy.scss';
import { Link } from 'react-router-dom';


class AffcarsCaseStudy extends React.Component {
  render() {
    return (
      <div>
        <div className="affcars-main-container">
          <div className="d-flex mt-5 ml-1 justify-content-center">
            <Link className="proj-link nav-link" to="/"><i className="fas fa-home mr-2"></i>Home</Link>
            <Link className="proj-link nav-link" to="/projects"><i className="fas fa-project-diagram mr-2"></i>Projects</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AffcarsCaseStudy;