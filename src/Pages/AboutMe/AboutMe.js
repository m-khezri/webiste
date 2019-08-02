import React from 'react';
import Pulse from 'react-reveal/Pulse';
import './AboutMe.scss';
import { Link } from 'react-router-dom';
import me from '../../image/me.jpg';
import git from '../../image/git.png';
import linkedin from '../../image/linkedin.png';
import mail from '../../image/mail.png';
import illus from '../../image/illus.svg';
import resume from '../../image/resume.pdf';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="AboutMeContainer">
        <div className="imgHolder">
          <img className="my-pic" src={me} alt=''></img>
          <div className="bioContainer">
            <div>
              <h1 className="myName display-4">Mohammad Khezri</h1>
              <h5 className="title">Front-End UX/UI Web Developer</h5>
            </div>
            <div>
              <p className="bio">
                I consider myself to be a combination of design and technological.
                I enjoy creating, developing and testing digital products. After
                several years working in the print design industry, I decided to
                expand my experience in field of UX/UI and Front-End development.
                I am so excited to continue to learn and grow in the field of UX/UI
                and web development.
              </p>
            </div>
            <div className="iconsHolder">
              <div className="mx-1">
                <a href="https://github.com/m-khezri"> <img className="icon" src={git} alt=''></img></a>
              </div>
              <div className="mx-1">
                <a href="https://www.linkedin.com/in/mohammad-khezri/"> <img className="icon" src={linkedin} alt=''></img></a>
              </div>
              <div className="mx-1">
                <a href="mailto:khezri@outlook.com"><img className="icon" src={mail} alt=''></img></a>
              </div>
            </div>
          </div>
        </div>
        <div className="bioHolder p-0">
          <Pulse forever='true'>
            <img className="illus" src={illus} alt=""></img>
          </Pulse>
        </div>

        <div className="linkHolder mt-5 d-flex flex-row justify-content-center">
          <a className="resume" href={resume}><i className="fas fa-file-download mr-2"></i>Get Resume</a>
          <Link className="resume nav-link" to="/projects"><i className="fas fa-project-diagram mr-2"></i>Projects</Link>
        </div>
      </div>
    );
  }
}

export default AboutMe;
