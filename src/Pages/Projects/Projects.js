import React from 'react';
import './Projects.scss';
import git from '../../image/git.png';
import web from '../../image/web.png';


class Projects extends React.Component {
  render() {
    return (
      <div className="project-container">
        <div className="front-end-container">
          <div><h1 className="proj-title mt-2">Projects</h1></div>
          <div className="projects m-4">
            <div className="project1">
              <div className="card">
                <div className="card-header bg-warning">
                  <h5>Rhino splits</h5>
                </div>
                <div className="card-body text-left">
                  <div className="img-holder">
                    <img className="rhino-pic w-100 shadow-sm" src="https://github.com/m-khezri/rhino-splits/raw/master/src/images/01.JPG" alt=""></img>
                  </div>
                  <h6 className="card-title mt-2">Rhino Splits is my Front-End capstopne
                     projects at NSS. This is online payment
                     simulator that incorporates the following features:</h6>
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
                <div className="card-footer">
                  <a className="mx-5" data-toggle="tooltip" title="GitHub" href="https://github.com/m-khezri/rhino-splits"> <img className="git-proj" src={git} alt=''></img></a>
                  <a className="mx-5" data-toggle="tooltip" title="Live Demo" href="https://rhino-splits.firebaseapp.com/"> <img className="git-proj" src={web} alt=''></img></a>
                </div>
              </div>
            </div>
            <div className="project2">
              <div className="card">
                <div className="card-header  bg-warning">
                  <h5> Chatty Chatty Bang! Bang!</h5>
                </div>
                <div className="card-body text-left">
                  <div className="img-holder">
                    <img className="rhino-pic w-100 shadow-sm" src="https://github.com/nss-evening-cohort-8/chatty-spatulas/raw/master/screenshots/homescreen.png" alt=""></img>
                  </div>
                  <h6 className="card-title mt-2"> A user friendly chat application that
                    incorporates the following features:</h6>
                  <ul>
                    <li>Multiple Users</li>
                    <li>Users have the ability to see the timestamp on their messages</li>
                    <li>Users have the ability to choose the background color,
                       text color, and font size</li>
                    <li>Users have the ability to edit and delete messages</li>
                    <li>Users have the ability to insert emojis</li>
                  </ul>
                  <p><strong>Technologies</strong></p>
                  <ul>
                    <li>HTML 5</li>
                    <li>Bootstrap 4</li>
                    <li>Javascript</li>
                    <li>ES6 Modules</li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a data-toggle="tooltip" title="GitHub" href="https://github.com/nss-evening-cohort-8/chatty-spatulas"> <img className="git-proj" src={git} alt=''></img></a>
                </div>
              </div>
            </div>
            <div className="project3">
              <div className="card">
                <div className="card-header  bg-warning">
                  <h5>Nutshell Betels</h5>
                </div>
                <div className="card-body text-left">
                  <div className="img-holder">
                    <img className="rhino-pic w-100 shadow-sm" src="https://user-images.githubusercontent.com/16019344/49768044-799b7c00-fca0-11e8-9fa7-ec8b906666cd.png" alt=""></img>
                  </div>
                  <h6 className="card-title mt-2"> Nutshell is our group project that incorporates the following features:</h6>
                  <ul>
                    <li>Google authentication</li>
                    <li>Users can Add / Update / Remove weather for a specific city</li>
                    <li>Users can organize their events</li>
                    <li>Users can write artickes</li>
                    <li>Users will have a message board to share commenets with others</li>
                  </ul>
                  <p><strong>Technologies</strong></p>
                  <ul>
                    <li>HTML 5</li>
                    <li>Bootstrap 4</li>
                    <li>Webpack</li>
                    <li>Axios</li>
                    <li>Firebase</li>
                    <li>ES6 Modules</li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a className="mx-5" data-toggle="tooltip" title="GitHub" href="https://github.com/nss-evening-cohort-8/nutshell-betels"> <img className="git-proj" src={git} alt=''></img></a>
                  <a className="mx-5" data-toggle="tooltip" title="Live Demo" href="https://nutshells-betels.firebaseapp.com/"> <img className="git-proj" src={web} alt=''></img></a>
                </div>
              </div>
            </div>
            <div className="project4">
              <div className="card">
                <div className="card-header bg-success">
                  <h5>Rhino splits (UI/UX Case Study)</h5>
                </div>
                <div className="card-body text-left">
                  <div className="img-holder">
                    <img className="rhino-pic w-100 shadow-sm" src="https://github.com/m-khezri/rhino-splits/raw/master/src/images/01.JPG" alt=""></img>
                  </div>
                  <h6 className="card-title mt-2">Rhino Splits is my UX/UI case study
                     projects at NSS. This is online payment
                     simulator that incorporates the following features:</h6>
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
                <div className="card-footer">
                  <a className="mx-5" data-toggle="tooltip" title="Video Demo" href="https://www.linkedin.com/posts/mohammad-khezri_uxuidesign-uxui-nashvillejobs-activity-6531753891426557952-xJqW"> <img className="git-proj" src={web} alt=''></img></a>
                  <a className="mx-5" data-toggle="tooltip" title="How did I do? Read more..." href="">Read more...</a>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
    );
  }
}

export default Projects;
