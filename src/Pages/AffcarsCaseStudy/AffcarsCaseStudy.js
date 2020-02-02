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
            <h3 className="my-5 display-4 text-center"> Online Used Cars Affiliate website. I named it ‘Affcars’</h3>
            <hr />
            <h1 className="display-4 mt-5">Project Overview</h1>
            <div className='d-flex flex-row'>

              <p className="w-50">
                This is my personal UX/UI project focusing on used car affiliate marketing that will help mid or low-income people to buy more reliable cars with the best cash-back discount.
                In this project, dealers can add their inventory and assign discounts for each car then customers will be able to find the cars with the best price and discount.
              The goal is increasing traffic to car lots to boost their sales and help buyers to get a more affordable and reliable car.</p>
              <div>
                <img className="ml-3 img-fluid mx-auto" src="https://image.freepik.com/free-photo/young-family-buying-car-car-showroom_1303-16339.jpg" alt=""></img>
              </div>
            </div>
            <hr />
          </section>

          <section className="my-role text-left">
            <h1 className="display-4 mt-5">My Role</h1>
            <div className="d-flex flex-wrap">
              <ul className="ml-3 w-50">I worked on this case study from ground up. I was responsible for:
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
            <hr />
          </section>


          <section className="problem-statement text-left">
            <h1 className="display-4 mt-5">Problem statement</h1>
            <div className="d-flex flex-wrap">
              <p className="w-50">
                How might we create a website that users can easily search, filter and narrow their filtering to reach a car that they need with the best cash-back discount People with bad credit, low budget for down-payment, people who can’t buy a car from main dealers or anyone who in particular looking for a car with real discount have this chance to save some money for part of down payment or tax. As I researched the problem is most of these people really don’t know that they can buy a cheaper car.
                The real problem is a lack of buyers' awareness. I’m trying to solve this problem by giving more awareness to these people by providing the right tools to help them buy a car through awareness.

              </p>
              <img className="m-1 img-fluid" src="https://image.freepik.com/free-photo/man-solving-rubik-s-cube_23-2147711117.jpg" alt=""></img>
            </div>
            <hr />
          </section>

          <section className="big-challenges text-left px-1">
            <h1 className="display-4 mt-5">Big Challenges</h1>
            <div className="d-flex flex-wrap">
              <ul className="ml-3">Buyers:
                <li>The target users are not really internet users, some of them really don’t use the internet to buy a car, they prefer to walk in car lots to see the cars and buy a car with shut eyes. Some of them are immigrants that really don’t know English. </li>
              </ul>
              <ul className="ml-3">Sellers:
                <li>They don’t clarify the real car price, they really don’t like to let the customers know about the (hidden) fees and real final price. They can play with price and fees and change them in the middle of a contract to recover the amount of discount they have already given to the buyer. If we make them clarify the information for customers, they might refuse to list their inventory on the website </li>
              </ul>
            </div>
            <hr />
          </section>

          <section className="key-questions text-left">
            <h1 className="display-4 mt-5">Key Questions</h1>
            <p>
              For the beginning, I started to ask some key questions to challenge myself and trying to find an answer for them. I asked several questions and I gave it a lot of thought. These questions are vital to clarify the next steps.
            </p>
            <div className="d-flex justify-content-center flex-wrap">
              <ul className="list-group">
                <li className='list-group-item active'>What’s worth doing?</li>
                <li className='Answer list-group-item'>Help car dealers sell more cars and help customers to find more affordable cars</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item active'>What are we creating?</li>
                <li className='Answer list-group-item'> We are creating a website that dealers can add their inventory and specify a discount for each car then we will do online marketing to connect customers to dealers. Customers can download a voucher and take it to the dealer and get a discount.</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item active'>What value does it provide?</li>
                <li className='Answer list-group-item'> The value is that it makes an easier way for customers to find a car and it will help them to cover part of their down payment or tax; on the other hand, it helps dealers to boost their sales.</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item active'>Who are our users?</li>
                <li className='Answer list-group-item'> People who have poor or fair credit or individuals who have a hard time paying down payment for cars or finding a reliable car or anyone who is interested in discounts. Dealers, on the hand, can boost their sales</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item active'>What do they expect?</li>
                <li className='Answer list-group-item'> They expect to get help for part of down payment and find a reliable car</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item active'>Why do these things matter to them?</li>
                <li className='Answer list-group-item'> Because most of them have trouble for paying down payment, on the other hand, dealers never pay a penny unless they sale a car.</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item active'>Why will people visit/use/buy from us?</li>
                <li className='Answer list-group-item'>We show all the car lots inventory with great filtering and best discount so they have a chance to buy a less expensive car rather than walk-in car lots</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item active'>How will we measure success?</li>
                <li className='Answer list-group-item'> We will try to drive more traffic to the website by online marketing so we will create powerful tools to measure the number of sold cars through the website. We will design great tools for dealers to monitor their sales through our website.</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item active'>How does this website fit into your overall strategy?</li>
                <li className='Answer list-group-item'>Everything depends on the number of our visitors and how many people are interested to buy a car through this website. We will work hard to contract with more dealers to enrich our inventory then visitors will have tons of options. Our strategy is getting the best discount and provide it for buyers. We want to make it easier for individuals who have trouble paying for a car for any reason.</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item active'>What technology is in place or what decision has already made?</li>
                <li className='Answer list-group-item'>Well, in the first step it will be a web-based but mobile-friendly application so we need to use a variety of technologists in Front-End and Back-End.</li>
              </ul>
            </div>
            <hr />
          </section>

          <section className="text-left">
            <h1 className="display-4 mt-5">Interview and opinion polling</h1>
            <div className="d-flex justify-content-between flex-wrap">
              <div className='interview'>
                <ul className="list-group">
                  <li className='list-group-item active'>I had an interview with 20 customers who already bought a car, here is the result:</li>
                  <li className='list-group-item'>%45 Change their car between 2-5 years</li>
                  <li className='list-group-item'>%57 find their car through family/friends %26 walk-in car lots and less than %5 looked for online</li>
                  <li className='list-group-item'>%61 Had fair credit and average financial status</li>
                  <li className='list-group-item'>%66 have problem with the car payment</li>
                  <li className='list-group-item'>%28 had problem with down-payment</li>
                  <li className='list-group-item'>%28 expressed finding an affordable car was their biggest problem</li>
                  <li className='list-group-item'>%14 down-payment and payment was their biggest problem</li>
                  <li className='list-group-item'>%4.7 lack of cash-back discount and the high-interest rate was their biggest problem</li>
                  <li className='list-group-item'>%33 couldn't find a reliable car was their biggest problem</li>
                  <li className='list-group-item'>%59 needed a car for family and %36 for work</li>
                  <li className='list-group-item'>%63 walked in car lots when they need a new car</li>
                  <li className='list-group-item'>%40 looked for clean title cars, %24 looked for best customer service and car varieties in inventory</li>
                  <li className='list-group-item'>%95 were excited about getting $100 to $500 cash-back discount and only %5 expressed that they really don’t need it</li>
                </ul>
              </div>
              <div className='w-50'>
                <img className="img-fluid" src="https://media-exp1.licdn.com/dms/image/C4E22AQEN54VKmv1QlQ/feedshare-shrink_1280/0?e=1583366400&v=beta&t=rmtsMGjKJAouFhHfnuXA_sZrjajFNUAMIvC_xzTVeEo" alt=""></img>
              </div>

            </div>
            <hr />
          </section>

        </div>
      </div>

    );
  }
}

export default AffcarsCaseStudy;