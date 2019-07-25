import React from 'react';
import './Navbar.scss';

import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';


class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <div className="navbar-holder">
          <nav className="navbar navbar-expand-lg bg-transparent">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">About me</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">Projects</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={AboutMe} />
          <Route path="/projects" exact component={Projects} />

        </div>
      </Router>
    );
  }
}

export default NavBar;
