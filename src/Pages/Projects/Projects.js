import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import git from '../../image/git.png';
import web from '../../image/web.png';
import affcars_header from '../../image/affcars/affcars_header.JPG';


class Projects extends React.Component {
  render() {
    return (
      <div className="project-container">
        <div className="d-flex mt-1 ml-1">
          <Link className="proj-link nav-link" to="/"><i className="fas fa-home mr-2"></i>Home</Link>
        </div>

        <div className="projects">

          <div className="project1 shadow">
            <div className="bg-proj">
              <h6 className="p-2">Rhino splits</h6>
            </div>
            <div className="text-left p-3">
              <div className="img-holder">
                <img className="rhino-pic w-100" src="https://github.com/m-khezri/rhino-splits/raw/master/src/images/01.JPG" alt=""></img>
              </div>
              <h6 className="mt-5">Rhino Splits is my Front-End capstopne
                 projects at NSS. This is online payment
                     simulator that incorporates the following features:</h6>
              <div className='p-4'>
                <ul>
                  <li>Google authentication</li>
                  <li>Add / Edit / Remove friends</li>
                  <li>Make a payment to a friend</li>
                  <li>Track payment history</li>
                </ul>
                <p><strong>Technologies</strong></p>
                <ul>
                  <li>HTML 5</li>
                  <li>Bootstrap 4</li>
                  <li>React</li>
                  <li>Reactstrap</li>
                  <li>Materialize</li>
                  <li>SweetAlert</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
            <div className="footer">
              <a className="mx-5" data-toggle="tooltip" title="GitHub" href="https://github.com/m-khezri/rhino-splits"> <img className="git-proj" src={git} alt=''></img></a>
              <a className="mx-5" data-toggle="tooltip" title="Live Demo" href="https://rhino-splits.firebaseapp.com/"> <img className="git-proj" src={web} alt=''></img></a>
            </div>
          </div>


          <div className="project4 shadow">
            <div className="bg-projux">
              <h6 className="p-2">Rhino splits (UI/UX Case Study)</h6>
            </div>
            <div className="text-left p-3">
              <div className="img-holder">
                <img className="rhino-pic w-100" src="https://github.com/m-khezri/rhino-splits/raw/master/src/images/01.JPG" alt=""></img>
              </div>
              <h6 className="mt-5">Rhino Splits is my UX/UI case study
                 projects at NSS. This is online payment
                     simulator that incorporates the following features:</h6>
              <div className='p-4'>
                <ul>
                  <li>Authentication</li>
                  <li>Bank setup</li>
                  <li>Make a payment to a friend</li>
                  <li>Send reminder to a friend</li>
                  <li>Track payment history</li>
                </ul>
                <p><strong>Steps and tools</strong></p>
                <ul>
                  <li>Challenge statement</li>
                  <li>Research plan</li>
                  <li>Compare competitors</li>
                  <li>User persona</li>
                  <li>User journey</li>
                  <li>Sketch / Wireframing / Prototype</li>
                  <li>Adobe XD / Photoshop / Illustrator</li>
                </ul>
              </div>
              <div className="text-center my-3">
                <Link className="readMore text-dark" to="Projects/RhinoCaseStudy">Read more about this project</Link>
              </div>
            </div>
          </div>


          <div className="project4 shadow">
            <div className="bg-projux">
              <h6 className="p-2">Affcars (UI/UX Case Study)</h6>
            </div>
            <div className="text-left p-3">
              <div className="img-holder">
                {/* <img className="rhino-pic w-100" src="https://github.com/m-khezri/rhino-splits/raw/master/src/images/01.JPG" alt=""></img> */}
                <img className="rhino-pic w-100" src={affcars_header} alt=''></img>

              </div>
              <h6 className="mt-5">Affcars is my personal project to
                simplify selling and buying cars that incorporates the following features:</h6>
              <div className='p-4'>
                <ul>
                  <li>Authentication for sellers and buyers</li>
                  <li>Bank setup</li>
                  <li>Listing a new car</li>
                  <li>search and filter cars</li>
                  <li>Download voucher</li>
                </ul>
                <p><strong>Steps and tools</strong></p>
                <ul>
                  <li>Challenge statement</li>
                  <li>Research plan</li>
                  <li>Compare competitors</li>
                  <li>User persona</li>
                  <li>User journey</li>
                  <li>Sketch / Wireframing / Prototype</li>
                  <li>Adobe XD / Photoshop / Illustrator</li>
                </ul>
              </div>
              <div className="text-center my-3">
                <Link className="readMore text-dark" to="Projects/RhinoCaseStudy">Read more about this project</Link>
              </div>
            </div>
          </div>
        </div >

      </div >
    );
  }
}

export default Projects;
