import React from 'react';
import { Link } from 'react-router-dom';
import './RhinoCaseStudy.scss';
import intropic from '../../image/UX/intropic.jpg';
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

        <section className="introSection">
          <img className="RhinoLogo my-3" src={logo} alt=''></img>
          <h5 className="display-4 my-3">Simplifying payments among friends</h5>
          <p>UX/UI Case Study</p>
        </section>

        <section className="rhino-holder">
          <section className="introPic">
            <img className="introPic w-100" src={intropic} alt=''></img>
          </section>

          <section className="MyRoleSection d-flex flex-wrap justify-content-between">
            <div className="w-50">
              <h5 className="display-4 text-danger mb-5">My role</h5>
              <p className="mx-5 text-justify">
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
            <div>
              <img src="https://image.freepik.com/free-vector/agile-team-working-together_25147-26.jpg" alt=''></img>
            </div>
          </section>

          <section className="ResearchPlanSection d-flex flex-wrap justify-content-between">
            <div>
              <img src="https://image.freepik.com/free-vector/people-interacting-with-charts_94753-600.jpg" alt=''></img>
            </div>
            <div>
              <h5 className="display-4 text-warning">Research Plan</h5>
              <ui className="mx-5 text-left">
                <li><span className="display-4 text-primary">A</span><strong>ctivities:</strong> How do they pay for their activities? Credit cards? Debits? Checks or Cash?</li>
                <li><span className="display-4 text-primary">E</span><strong>nvironment:</strong> Restaurants, Gyms, Stadiums, etc.</li>
                <li><span className="display-4 text-primary">I</span><strong>nteraction:</strong> How do they make an agreement for payments or how do they ask for it.</li>
                <li><span className="display-4 text-primary">O</span><strong>bjects:</strong> Using cell-phones, online payment</li>
                <li><span className="display-4 text-primary">U</span><strong>sers:</strong> People who are familiar with e-payments through apps or websites</li>
              </ui>
            </div>

          </section>

          <section className="CompareSection d-flex flex-wrap justify-content-between">
            <div className="w-50">
              <h5 className="display-4 text-info mb-5">The Competitiors</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Services</th>
                    <th>Advantages</th>
                    <th>Disadvantages</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Zelle</td>
                    <td>
                      <ul className="text-left">
                        <li>Person to person payment</li>
                      </ul>
                    </td>
                    <td>
                      <ul className="text-left">
                        <li> In-Store payments</li>
                        <li>Pay on online stores</li>
                        <li>Web interface</li>
                        <li>International payments</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Venmo</td>
                    <td>
                      <ul className="text-left">
                        <li>Pay on online stores</li>
                        <li>Web interface</li>
                        <li>International payments</li>
                      </ul>
                    </td>
                    <td>
                      <ul className="text-left">
                        <li> In-Store payments</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Apple Pay</td>
                    <td>
                      <ul className="text-left">
                        <li>Person to person payment</li>
                        <li> In-Store payments</li>
                        <li>Pay on online stores</li>
                      </ul>
                    </td>
                    <td>
                      <ul className="text-left">
                        <li>Web interface</li>
                        <li>International payments</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Samsung Pay</td>
                    <td>
                      <ul className="text-left">
                        <li> In-Store payments</li>
                        <li>International payments</li>
                      </ul>
                    </td>
                    <td>
                      <ul className="text-left">
                        <li>Web interface</li>
                        <li>Person to person payment</li>
                        <li>Pay on online stores</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Google Pay</td>
                    <td>
                      <ul className="text-left">
                        <li> In-Store payments</li>
                        <li>Pay on online stores</li>
                      </ul>
                    </td>
                    <td>
                      <ul className="text-left">
                        <li>Web interface</li>
                        <li>Person to person payment</li>
                        <li>International payments</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <img src="https://image.freepik.com/free-vector/business-people-competitors-celebrating-success_3446-701.jpg" alt=''></img>
              <p>
                I researched to find out how other online payment services<br />
                work and what is the advantage and disadvantages of each one.
            </p>
            </div>
          </section>

          <section className="PersonaSection">
            <h5 className="display-4 mb-5">Persona</h5>
            <div className="mx-5">
              <img className="introPic w-75" src={persona} alt=''></img>
            </div>
          </section>

          <section className="JourneySection">
            <h5 className="display-4 mb-5 text-primary">User Journey</h5>
            <div className="mx-5">
              <img className="introPic w-75" src={journey} alt=''></img>
            </div>
          </section>

          <section className="SketchSection">
            <h5 className="display-4 mb-5">Sketch</h5>
            <div className="mx-5">
              <img className="introPic w-75" src={sketch} alt=''></img>
            </div>
          </section>

          <section className="WireframingSection">
            <h5 className="display-4 mb-5 text-success">Wireframing</h5>
            <div className="mx-5">
              <img className="introPic w-75" src={wireframe} alt=''></img>
            </div>
          </section>

          <section className="PrototypeSection">
            <h5 className="display-4 mb-5 text-secondary">Prototyping</h5>
            <div className="mx-5">
              <img className="introPic w-75" src={prototype} alt=''></img>
            </div>
          </section>

          <section className="LiveDemoSection">
            <h5 className="display-4">Test the Live Demo</h5>
            <div className="liveContainer">
              <iframe className="demo mt-3" title='livedemo' width="275" height="712" src="https://xd.adobe.com/embed/1a4fd035-4f8c-4251-4cdc-acb5ee19d833-6c7e/" frameborder="0" allowfullscreen>
              </iframe>
              {/* <img className="shellPic" draggable="false" src={shell} alt=''></img> */}
            </div>
          </section>

          <section className="LearnedSection text-light text-justify">
            <h5 className="display-4">What I learned</h5>
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


        </section >
      </div >
    );
  }
}

export default RhinoCaseStudy;
