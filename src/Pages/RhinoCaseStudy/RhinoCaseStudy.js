import React from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import { Link } from 'react-router-dom';
import './RhinoCaseStudy.scss';
import intropic from '../../image/UX/intropic.png';
import logo from '../../image/UX/logo.svg';
import persona from '../../image/UX/persona.png';
import journey from '../../image/UX/journey.png';
import sketch from '../../image/UX/sketch.jpg';
import wireframe from '../../image/UX/wireframe.jpg';
import prototype from '../../image/UX/prototype.jpg';
// import shell from '../../image/UX/shell.png';


class RhinoCaseStudy extends React.Component {
  render() {
    return (
      <div className="rhino-main-container">
        <div className="d-flex mt-5 ml-1 justify-content-center">
          <Link className="proj-link nav-link" to="/"><i className="fas fa-home mr-2"></i>Home</Link>
          <Link className="proj-link nav-link" to="/projects"><i className="fas fa-project-diagram mr-2"></i>Projects</Link>
        </div>

        <section className="introSection mt-5">
          <Fade bottom delay='200'>
            <img className="RhinoLogo my-3" src={logo} alt=''></img>
          </Fade>
          <Fade bottom delay='400'>
            <h5 className="display-4 my-3">Simplifying payments among friends</h5>
          </Fade>
          <Fade bottom delay='600'>
            <p>UX/UI Case Study</p>
          </Fade>
        </section>

        <section className="rhino-holder">
          <section className="introPic">
            <img className="introPic w-100" src={intropic} alt=''></img>
          </section>

          <Fade bottom>
            <section className="MyRoleSection d-flex flex-wrap justify-content-between">
              <div className="sm-view">
                <h5 className="display-4 text-danger mb-5">My role</h5>
                <div className="bullets">
                  <p className=" text-justify">
                    In this case study, I was responsible to create a mobile application for
                    easy payments among friends. In this project, I started by a research
                    plan and interview with people to find out how do they usually make
                    a payment in different situations, where do they usually go for fun,
                    how do they make an agreement for payments and do they prefer to pay
                    in cash, using debit/credit cards or through mobile and web applictions.
                    In the next steps, I researched about competitors and researched each
                    advantage and disadvantages. In the next step, I created user persona,
                    user journey and eventually, I worked on the sketching, wireframing,
                    prototyping and low and high-fidelity design.
            </p>
                </div>
              </div>
              <div>
                <img className='w-100' src="https://image.freepik.com/free-vector/agile-team-working-together_25147-26.jpg" alt=''></img>
              </div>
            </section>
          </Fade>

          <Fade bottom>
            <section className="ResearchPlanSection d-flex flex-wrap justify-content-between">
              <div className="sm-view">
                <img className="w-100" src="https://image.freepik.com/free-vector/people-interacting-with-charts_94753-600.jpg" alt=''></img>
              </div>
              <div>
                <h5 className="display-4 text-warning">Research Plan</h5>
                <div className='bullets'>
                  <ui className="list-group text-left">
                    <li className='list-group-item'><span className="display-4 text-primary">A</span><strong>ctivities:</strong> How do they pay for their activities? Credit cards? Debits? Checks or Cash?</li>
                    <li className='list-group-item'><span className="display-4 text-primary">E</span><strong>nvironment:</strong> Restaurants, Gyms, Stadiums, etc.</li>
                    <li className='list-group-item'><span className="display-4 text-primary">I</span><strong>nteraction:</strong> How do they make an agreement for payments or how do they ask for it.</li>
                    <li className='list-group-item'><span className="display-4 text-primary">O</span><strong>bjects:</strong> Using cell-phones, online payment</li>
                    <li className='list-group-item'><span className="display-4 text-primary">U</span><strong>sers:</strong> People who are familiar with e-payments through apps or websites</li>
                  </ui>
                </div>
              </div>
            </section>
          </Fade>

          <Fade bottom>
            <section className="CompareSection d-flex flex-wrap justify-content-between">
              <div className="sm-view">
                <h5 className="display-4 text-info mb-5">The Competitiors</h5>
                <div className='bullets-tb'>
                  <table class="table table-bordered">
                    <thead>
                      <tr className='bg-dark text-light'>
                        <th>Services</th>
                        <th>Advantages</th>
                        <th>Disadvantages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='text-light align-middle font-weight-bold bg-warning'>Zelle</td>
                        <td>
                          <ul className="list-group text-left">
                            <li className='list-group-item'>Person to person payment</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="list-group text-left">
                            <li className='list-group-item'>In-Store payments</li>
                            <li className='list-group-item'>Pay on online stores</li>
                            <li className='list-group-item'>Web interface</li>
                            <li className='list-group-item'>International payments</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-light align-middle font-weight-bold bg-warning'>Venmo</td>
                        <td>
                          <ul className="list-group text-left">
                            <li className='list-group-item'>Pay on online stores</li>
                            <li className='list-group-item'>Web interface</li>
                            <li className='list-group-item'>International payments</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="list-group text-left">
                            <li className='list-group-item'> In-Store payments</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-light align-middle font-weight-bold bg-warning'>Apple Pay</td>
                        <td>
                          <ul className="list-group text-left">
                            <li className='list-group-item'>Person to person payment</li>
                            <li className='list-group-item'> In-Store payments</li>
                            <li className='list-group-item'>Pay on online stores</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="list-group text-left">
                            <li className='list-group-item'>Web interface</li>
                            <li className='list-group-item'>International payments</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-light align-middle font-weight-bold bg-warning'>Samsung Pay</td>
                        <td>
                          <ul className="list-group text-left">
                            <li className='list-group-item'> In-Store payments</li>
                            <li className='list-group-item'>International payments</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="list-group text-left">
                            <li className='list-group-item'>Web interface</li>
                            <li className='list-group-item'>Person to person payment</li>
                            <li className='list-group-item'>Pay on online stores</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-light align-middle font-weight-bold bg-warning'>Google Pay</td>
                        <td>
                          <ul className="list-group text-left">
                            <li className='list-group-item'> In-Store payments</li>
                            <li className='list-group-item'>Pay on online stores</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="list-group text-left">
                            <li className='list-group-item'>Web interface</li>
                            <li className='list-group-item'>Person to person payment</li>
                            <li className='list-group-item'>International payments</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <img className='w-100' src="https://image.freepik.com/free-vector/business-people-competitors-celebrating-success_3446-701.jpg" alt=''></img>
                <p>
                  I researched to find out how other online payment services<br />
                  work and what is the advantage and disadvantages of each one.
            </p>
              </div>
            </section>
          </Fade>

          <Fade bottom>
            <section className="PersonaSection">
              <h5 className="display-4 mb-5">Persona</h5>
              <div className="mx-5">
                <img className="introPic w-75" src={persona} alt=''></img>
              </div>
            </section>
          </Fade>

          <Fade bottom>
            <section className="JourneySection">
              <h5 className="display-4 mb-5 text-primary">User Journey</h5>
              <div className="mx-5">
                <img className="introPic w-75" src={journey} alt=''></img>
              </div>
            </section>
          </Fade>

          <Fade bottom>
            <section className="SketchSection">
              <h5 className="display-4 mb-5">Sketch</h5>
              <div className="mx-5">
                <img className="introPic w-75" src={sketch} alt=''></img>
              </div>
            </section>
          </Fade>

          <Fade bottom>
            <section className="WireframingSection">
              <h5 className="display-4 mb-5 text-success">Wireframing</h5>
              <div className="mx-5">
                <img className="introPic w-75" src={wireframe} alt=''></img>
              </div>
            </section>
          </Fade>

          <Fade bottom>
            <section className="PrototypeSection">
              <h5 className="display-4 mb-5 text-secondary">Prototyping</h5>
              <div className="mx-5">
                <img className="introPic w-75" src={prototype} alt=''></img>
              </div>
            </section>
          </Fade>

          <Fade bottom delay='1000'>
            <section className="LiveDemoSection bg-dark py-3 m-0">
              <Pulse forever='true'>
                <div className='w-25 mx-auto'>
                  <Link className="display-4 text-decoration-none" target='_blank' to="/projects/RhinoCaseStudy/demo">Live Demo</Link>
                </div>
              </Pulse>
            </section>
          </Fade>

          <Fade bottom>
            <section className="LearnedSection text-justify">
              <h5 className="display-4 text-light">What I learned</h5>
              <p>
                This case study was all learning for me in every step.
                A very nice practice that made me think and research
                then design an app from scratch.
          </p>
              <p>
                In the past I thought a nice design is mostly means
                nice UI and feeling but now I learned that a neat and
                nice UI is worthless if you don’t understand the user needs.
                A good design is understanding users problems accurately
                then document the problem then come up with some solutions
                to solve and test it.
          </p>
            </section>
          </Fade>


        </section >
      </div >
    );
  }
}

export default RhinoCaseStudy;
