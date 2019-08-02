import React from 'react';
import './Demo.scss';
import { Link } from 'react-router-dom';

class Demo extends React.Component {
  render() {
    return (
      <div className='DemoContainer'>
        <div className="d-flex pt-5 justify-content-center">
          <Link className="proj-link nav-link text-light" to="/"><i className="fas fa-home mr-2"></i>Home</Link>
          <Link className="proj-link nav-link text-light" to="/projects"><i className="fas fa-project-diagram mr-2"></i>Projects</Link>
        </div>
        <iframe className="demo mt-3" title='livedemo' width="300" height="737" src="https://xd.adobe.com/embed/1a4fd035-4f8c-4251-4cdc-acb5ee19d833-6c7e/" frameborder="0" allowfullscreen>
        </iframe>
      </div>
    );
  }
}

export default Demo;