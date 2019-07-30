import React from 'react';
import { Link } from 'react-router-dom';
import './RhinoCaseStudy.scss';
import intropic from '../../image/UX/intropic.jpg';
import logo from '../../image/UX/logo.svg'

class RhinoCaseStudy extends React.Component {
  render() {
    return (
      <div className="rhino-main-container">
        <div className="d-flex mt-5 ml-1">
          <Link className="proj-link nav-link" to="/"><i className="fas fa-home mr-2"></i>Home</Link>
          <Link className="proj-link nav-link" to="/projects"><i className="fas fa-project-diagram mr-2"></i>Projects</Link>
        </div>

        <section className="rhino-holder bg-info">
          <section className="introPic">
            <img className="introPic w-100" src={intropic} alt=''></img>
          </section>

          <section className="introSection">
            <img className="RhinoLogo" src={logo} alt=''></img>
            <h5 className="display-4">Simplifying payments among friends</h5>
            <p>UX/UI Case Study</p>
          </section>

          <section className="MyRoleSection">
            <h5 className="display-4">My role</h5>
            <p className="mx-5">
              In this case study, I was responsible to create a mobile application for easy payments among friends.
              In this project, I started by a research plan and interview with people to find out how do they usually make a payment
              in different situations, where do they usually go for fun, how do they make an agreement for payments and
              do they prefer to pay in cash, using debit/credit cards or through mobile and web applictions.
              In the next steps, I researched about competitors and researched each advantage and disadvantages.
              In the next step, I created user persona, user journey and eventually, I worked on the sketching, wireframing,
              prototyping and low and high-fidelity design.
            </p>
          </section>

          <section className="ResearchPlanSection">
            <h5 className="display-4">Research Plan</h5>
            <ui className="mx-5 text-left">
              <li><span className="display-4 text-primary">A</span><strong>ctivities:</strong> How do they pay for their activities? Credit cards? Debits? Checks or Cash?</li>
              <li><span className="display-4 text-primary">E</span><strong>nvironment:</strong> Restaurants, Gyms, Stadiums, etc.</li>
              <li><span className="display-4 text-primary">I</span><strong>nteraction:</strong> How do they make an agreement for payments or how do they ask for it.</li>
              <li><span className="display-4 text-primary">O</span><strong>bjects:</strong> Using cell-phones, online payment</li>
              <li><span className="display-4 text-primary">U</span><strong>sers:</strong> People who are familiar with e-payments through apps or websites</li>
            </ui>
          </section>

        </section >
      </div >
    );
  }
}

export default RhinoCaseStudy;
