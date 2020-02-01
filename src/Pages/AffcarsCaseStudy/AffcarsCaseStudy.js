import React from 'react';
import './AffcarsCaseStudy.scss';
import { Link } from 'react-router-dom';


class AffcarsCaseStudy extends React.Component {
  render() {
    return (
      <div className="affcars-main-container">
        <div>
          <div className="d-flex pt-5 ml-1 justify-content-center">
            <Link className="proj-link nav-link" to="/"><i className="fas fa-home mr-2"></i>Home</Link>
            <Link className="proj-link nav-link" to="/projects"><i className="fas fa-project-diagram mr-2"></i>Projects</Link>
          </div>
        </div>

        <div className="white-column shadow-sm">

          <section className="project-overview text-left">
            <h1 className="my-5 font-weight-bold text-center"> Online Used Cars Affiliate website. I named it ‘Affcars’</h1>
            <hr />
            <h4 className="mt-5">Project Overview</h4>

            <div className="d-flex flex-wrap">
              <p className="w-50">
                This is my personal UX/UI project focusing on used car affiliate marketing that will help mid or low-income people to buy more reliable cars with the best cash-back discount.
                In this project, dealers can add their inventory and assign discounts for each car then customers will be able to find the cars with the best price and discount.
              The goal is increasing traffic to car lots to boost their sales and help buyers to get a more affordable and reliable car.</p>
              <img className="ml-3 img-fluid" src="https://image.freepik.com/free-photo/young-family-buying-car-car-showroom_1303-16339.jpg" alt=""></img>
            </div>
          </section>

          <section className="my-role text-left">
            <h4 className="mt-5">My Role</h4>
            <div className="d-flex flex-wrap">
              <ul className="ml-3 w-50">I worked on this case study from ground up. I’m responsible for:
            <li>Defining the problem</li>
                <li>Researching,</li>
                <li>Interview with people and polling</li>
                <li>Analysis the data</li>
                <li>Research about the market</li>
                <li>Research about competitors</li>
                <li>Creating persona</li>
                <li>User journey</li>
                <li>Sketching the app</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Testing</li>
                <li>Coding</li>
                <li>Again testing, improving, testing, testing...</li>
              </ul>
              <img className="m-1 img-fluid" src="https://image.freepik.com/free-photo/creative-web-designer-planning-application-developing-template-layout-framework-mobile-phone_1418-2315.jpg" alt=""></img>
            </div>

          </section>

        </div>
      </div>

    );
  }
}

export default AffcarsCaseStudy;