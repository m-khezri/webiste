import React from 'react';
import './AboutMe.scss';
import me from '../../image/me.jpg';
import git from '../../image/git.png';
import linkedin from '../../image/linkedin.png';
import mail from '../../image/mail.png';
import resume from '../../image/resume.pdf';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="AboutMeContainer">
        <div className="imgHolder">
          <img className="my-pic" src={me} alt='image'></img>
          <div className="bioContainer">
            <div>
              <h1 className="myName display-3">Mohammad Khezri</h1>
              <h5 className="title">Front-End UX/UI Web Developer | Graphic Designer | Photographer</h5>
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
                <a href="https://github.com/m-khezri" target="_blank"> <img className="icon" src={git} alt='image'></img></a>
              </div>
              <div className="mx-1">
                <a href="https://www.linkedin.com/in/mohammad-khezri/" target="_blank"> <img className="icon" src={linkedin} alt='image'></img></a>
              </div>
              <div className="mx-1">
                <a href="mailto:khezri@outlook.com"><img className="icon" src={mail} alt='image'></img></a>
              </div>
            </div>
            <div className="mt-5">
              <a className="resume" href={resume} target="_blank">Download Resume</a>
            </div>
          </div>
        </div>

        <div className="bioHolder">
        </div>
      </div>
    );
  }
}

export default AboutMe;
