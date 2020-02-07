import React from 'react';
import './AffcarsCaseStudy.scss';
import { Link } from 'react-router-dom';
import HomePage from '../../image/affcars/Wireframing/HomePage.jpg';
import SearchResult from '../../image/affcars/Wireframing/SearchResult.jpg';



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
                <img className="ml-3 img-fluid rounded" src="https://image.freepik.com/free-photo/young-family-buying-car-car-showroom_1303-16339.jpg" alt=""></img>
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
              <img className="m-1 img-fluid rounded" src="https://image.freepik.com/free-photo/creative-web-designer-planning-application-developing-template-layout-framework-mobile-phone_1418-2315.jpg" alt=""></img>
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
              <img className="m-1 img-fluid rounded" src="https://image.freepik.com/free-photo/man-solving-rubik-s-cube_23-2147711117.jpg" alt=""></img>
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
            <div className="d-flex flex-column justify-content-center flex-wrap">
              <ul className="list-group">
                <li className='list-group-item bg-light font-weight-bold'>What’s worth doing?</li>
                <li className='Answer list-group-item'>Help car dealers sell more cars and help customers to find more affordable cars</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item bg-light font-weight-bold'>What are we creating?</li>
                <li className='Answer list-group-item'> We are creating a website that dealers can add their inventory and specify a discount for each car then we will do online marketing to connect customers to dealers. Customers can download a voucher and take it to the dealer and get a discount.</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item bg-light font-weight-bold'>What value does it provide?</li>
                <li className='Answer list-group-item'> The value is that it makes an easier way for customers to find a car and it will help them to cover part of their down payment or tax; on the other hand, it helps dealers to boost their sales.</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item bg-light font-weight-bold'>Who are our users?</li>
                <li className='Answer list-group-item'> People who have poor or fair credit or individuals who have a hard time paying down payment for cars or finding a reliable car or anyone who is interested in discounts. Dealers, on the hand, can boost their sales</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item bg-light font-weight-bold'>What do they expect?</li>
                <li className='Answer list-group-item'> They expect to get help for part of down payment and find a reliable car</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item bg-light font-weight-bold'>Why do these things matter to them?</li>
                <li className='Answer list-group-item'> Because most of them have trouble for paying down payment, on the other hand, dealers never pay a penny unless they sale a car.</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item bg-light font-weight-bold'>Why will people visit/use/buy from us?</li>
                <li className='Answer list-group-item'>We show all the car lots inventory with great filtering and best discount so they have a chance to buy a less expensive car rather than walk-in car lots</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item bg-light font-weight-bold'>How will we measure success?</li>
                <li className='Answer list-group-item'> We will try to drive more traffic to the website by online marketing so we will create powerful tools to measure the number of sold cars through the website. We will design great tools for dealers to monitor their sales through our website.</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item bg-light font-weight-bold'>How does this website fit into your overall strategy?</li>
                <li className='Answer list-group-item'>Everything depends on the number of our visitors and how many people are interested to buy a car through this website. We will work hard to contract with more dealers to enrich our inventory then visitors will have tons of options. Our strategy is getting the best discount and provide it for buyers. We want to make it easier for individuals who have trouble paying for a car for any reason.</li>
              </ul>
              <ul className="list-group">
                <li className='list-group-item bg-light font-weight-bold'>What technology is in place or what decision has already made?</li>
                <li className='Answer list-group-item'>Well, in the first step it will be a web-based but mobile-friendly application so we need to use a variety of technologists in Front-End and Back-End.</li>
              </ul>
            </div>
            <hr />
          </section>

          <section className="text-left">
            <h1 className="display-4 mt-5">Interview and opinion polling with customers</h1>
            <div className="d-flex justify-content-between flex-wrap">
              <div className='interview'>

                <ul className="list-group">
                  <li className='list-group-item active'>Here is the result:</li>
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
                <img className="img-fluid rounded" src="https://image.freepik.com/free-photo/hands-with-blue-pen-application-form-students-taking-exams-writing-examination_4236-1679.jpg" alt=""></img>
                <p>
                  I did opinion polling with a couple of customers who already bought a used car from dealers, I also discuss about their creteria, concerns and expectations when they need a new used car.
                  They were a combination of Hispanic people, African Americans, Asians and White Americans.
                </p>
              </div>
            </div>
            <hr />
          </section>

          <section className="text-left">
            <h1 className="display-4 mt-5">Interview with dealership owners</h1>
            <div className="d-flex justify-content-between flex-wrap">
              <div className='interview'>

                <ul className="list-group">
                  <li className='list-group-item active'>Here is the result:</li>
                  <li className='list-group-item font-weight-bold'>The first person:</li>
                  <li className='list-group-item '>It’s a good idea but I don’t think our customers really need $100 - $500 discount for buying a car, Your website has few visitors so the chance of selling cars through your website is not a lot; however, it could be a chance for us to get more customers. Moreover, we are not going to pay anything to you unless you refer to a customer. Regarding the discount, we prefer to determine the discount amount based on the down payment, not the total price.</li>
                  <li className='list-group-item font-weight-bold'>The second person:</li>
                  <li className='list-group-item'>We usually pay $200 for a referral. You should do great online marketing to send customers; however, we have our own customers and most of them are Hispanic who usually don’t use the internet for buying a car.</li>
                  <li className='list-group-item font-weight-bold'>The third person:</li>
                  <li className='list-group-item'>Well, I think you should work with big dealers who sell a lot of cars every day, in this case, this online business will make sense. I think it’s too hard to work with some used dealers because they have a lot of hidden fees and they will change an item in a time of contract to cover the discount they paid, besides, used cars, in particular, don’t have a stable price </li>
                  <li className='list-group-item font-weight-bold'>The forth person</li>
                  <li className='list-group-item'>I believe there are some big websites in this industry that work very well and you’ll have to invest millions of dollars to grow this online business, I believe all the games have already been played and you are not solving a real problem. Our type of customers don’t care about $100 - $500 discount, on the contrary, I think richer buyers are more interested in a discount so I think you should work with big and new car dealerships. They also have their own cash-back discount. I believe you can make such a website for a hobby to test the waters not a real business and we can list our inventory on the website and it could be an additional way to get more customers. Currently, we have own network to get customers and it’s working well. In addition, in the used cars industry, there’s always a $1000 to $1300 margin to play with a price.</li>

                </ul>
              </div>
              <div className='w-50'>
                <img className="img-fluid rounded" src="https://image.freepik.com/free-photo/friendly-executive-interviewing-job-candidate_1262-9619.jpg" alt=""></img>
                <p>
                  In the next step, I made an appointment with four dealership owners and sales managers. It was very important to have their point of view. the result was interesting.
                </p>
                <div className='p-3 bg-dark text-light round shadow'>
                  <h4>Lesson learned from interviews:</h4>
                  <p>What I learned from interviews form both sides (buyers and sellers) is that there’s still a chance to make a powerful interface to connect buyers to sellers and make both sides happy. Although there are tough obstacles and challenges on the way I still think there’s enough room to give customers more awareness to have smart shopping. The fourth business owner was very knowledgeable and smart, despite all his negative points, his last words made me hopeful and optimistic.</p>
                </div>
                <div className='mt-5'>
                  <q className='text-muted font-italic'>270 million vehicles are in the U.S, and 40 million used vehicles are sold each year.
										(Autonews)</q>
                </div>
              </div>
            </div>
            <hr />
          </section>

          <section className="text-left">
            <h1 className="display-4 mt-5">Competitors</h1>
            <div className="d-flex justify-content-between flex-wrap">
              <div className='interview'>
                <p>
                  The big websites that have been around for a long time are as follow:</p>
                <ul className="list-group">
                  <ul className="list-group">
                    <li className='list-group-item bg-light font-weight-bold'>CarsforSale</li>
                    <li className='Answer list-group-item'>Carsforsale.com is an online automotive listing platform that connects buyers with sellers of vehicles. The company, headquartered in Sioux Falls, South Dakota, offers a product line to automotive dealers that includes Carsforsale.com vehicle listings, dealership websites, inventory distribution, and lead management.</li>
                  </ul>
                  <ul className="list-group">
                    <li className='list-group-item bg-light font-weight-bold'>Truecar</li>
                    <li className='Answer list-group-item'>TrueCar, Inc. is an automotive pricing and information website for new and used car buyers and dealers. TrueCar is paid by dealerships so they can obtain potential buyers' contact information.</li>
                  </ul>
                  <ul className="list-group">
                    <li className='list-group-item bg-light font-weight-bold'>Autotrader</li>
                    <li className='Answer list-group-item'>Autotrader.com, Inc. is an online marketplace founded in 1997, which functions as an online marketplace for car purchasers and sellers. It aggregates new, used, and certified second-hand cars from dealers and private sellers</li>
                  </ul>
                  <ul className="list-group">
                    <li className='list-group-item bg-light font-weight-bold'>CarGurus</li>
                    <li className='Answer list-group-item'>CarGurus is a Cambridge, Massachusetts-based automotive research and shopping website that assists users in comparing local listings for used and new cars, and contacting sellers. Listing cars are free but they charge dealers $99 per sold car</li>
                  </ul>
                  <ul className="list-group">
                    <li className='list-group-item bg-light font-weight-bold'>Edmunds</li>
                    <li className='Answer list-group-item'>Edmunds.com Inc. is an American online resource for automotive information. The company is headquartered in Santa Monica, California, and maintains an office in downtown Detroit, Michigan. Edmunds is privately held, with the Steinlauf family holding a majority stake.</li>
                  </ul>
                  <ul className="list-group">
                    <li className='list-group-item bg-light font-weight-bold'>CarsDirect</li>
                    <li className='Answer list-group-item'>CarsDirect is an American online automotive research portal and car buying service based in El Segundo, California that allows consumers to research, price, purchase, insure and finance a vehicle online. The company also provides lead generation and referral services to auto dealers</li>
                  </ul>
                  <ul className="list-group">
                    <li className='list-group-item bg-light font-weight-bold'>Carvana</li>
                    <li className='Answer list-group-item'>Carvana is an online used car retailer and technology business based in Tempe, Arizona</li>
                  </ul>
                  <ul className="list-group">
                    <li className='list-group-item bg-light font-weight-bold'>Carsaver</li>
                    <li className='Answer list-group-item'>Carsaver lists certified dealerships’ inventory and refer customers to dealers. They work with Walmart and provide lifetime warranty for engine, transmission and drivetrain. They charge dealers $350 as success service fee.</li>
                  </ul>
                </ul>
              </div>
              <div className='w-50'>
                <img className="img-fluid rounded" src="https://image.freepik.com/free-photo/group-business-people-ready-start-race-track_38335-103.jpg" alt=""></img>
                <p>
                  There is a good number of websites that connect users to dealers by providing great tools for users to narrow down the car they like on the website and great tools for sellers to manage and advertise their inventory. However, I haven’t found a big website offering online car affiliates like my project.
                </p>

              </div>
              <div className='mt-5 mx-auto table-responsive'>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col info"></th>
                      <th scope="col">Search Tools</th>
                      <th scope="col">Dealers Inventory Management</th>
                      <th scope="col">Evaluate cars</th>
                      <th scope="col">Connect buyers to sellers</th>
                      <th scope="col">Cars information</th>
                      <th scope="col">Affiliate program</th>
                      <th scope="col">Used and New cars</th>
                      <th scope="col">Financing</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Carsforsale</th>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10006;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10006;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                    </tr>
                    <tr>
                      <th scope="row">TrueCars</th>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10006;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                    </tr>
                    <tr>
                      <th scope="row">AutoTrader</th>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10006;</td>
                      <td>&#10004;</td>
                      <td>&#10006;</td>
                    </tr>
                    <tr>
                      <th scope="row">CarGurus</th>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                    </tr>
                    <tr>
                      <th scope="row">Edmunds</th>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10006;</td>
                    </tr>
                    <tr>
                      <th scope="row">CarsDirect</th>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10006;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10006;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                    </tr>
                    <tr>
                      <th scope="row">Carvana</th>
                      <td>&#10004;</td>
                      <td>&#10006;</td>
                      <td>&#10006;</td>
                      <td>&#10006;</td>
                      <td>&#10004;</td>
                      <td>&#10006;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                    </tr>
                    <tr>
                      <th scope="row">Carsaver</th>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                      <td>&#10004;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <hr />
          </section>

          <section className="user-persona text-left">
            <h1 className="display-4 mt-5">User Persona</h1>
            <p className="">
              Through my research, I created an user persona to understand users’ expectations, goals, and frustrations, and maintain a sense of empathy throughout the design process.
                </p>
            <p className="">
              <b>Let’s Meet Jose Ortiz Hernandez </b>
              From Mexico, Moved to the US 10 years ago. Father of 3 kids, Construction Technician. His oldest son just got DL and need a car. He also needs to change his truck for work.
                </p>
            <div className='d-flex flex-row'>
              <div className='p-3 border border-secondary'>
                <p><b>Age:</b> 38</p>
                <p><b>Occupation:</b> Construction Technician</p>
                <p><b>Status:</b> Married, has 3 kids</p>
                <p><b>Location:</b> Nashville</p>
                <img className="img-fluid rounded w-50" src="https://image.freepik.com/free-photo/pointing-sketch_1098-14323.jpg" alt=""></img>
              </div>
              <div>
                <ul className="list-group">
                  <ul className="list-group mb-5">
                    <li className='list-group-item bg-light font-weight-bold'>Goals:</li>
                    <li className='list-group-item'>Find a reliable and affordable car for his son as a birthday present</li>
                    <li className='list-group-item'>Manage expenses and save more money to make a better life for his kids</li>
                  </ul>
                </ul>
                <ul className="list-group mt-5">
                  <ul className="list-group">
                    <li className='list-group-item bg-light font-weight-bold'>Frustrations:</li>
                    <li className='list-group-item'>Unable to manage life costs as expected</li>
                    <li className='list-group-item'>Very busy at work and have little time for family</li>
                  </ul>
                </ul>

              </div>
              <div>
                <ul className="list-group">
                  <ul className="list-group mb-2">
                    <li className='list-group-item bg-light font-weight-bold'>He is:</li>
                    <li className='list-group-item'>Go getter</li>
                    <li className='list-group-item'>Outdoor activator</li>
                    <li className='list-group-item'>Kids-first</li>
                    <li className='list-group-item'>Planner</li>
                  </ul>
                </ul>
                <ul className="list-group mt-2">
                  <ul className="list-group">
                    <li className='list-group-item bg-light font-weight-bold'>Techs:</li>
                    <li className='list-group-item'>Cell phone user</li>
                    <li className='list-group-item'>New internet user</li>
                    <li className='list-group-item'>Basic computer knowledge</li>
                  </ul>
                </ul>
              </div>
            </div>
            <hr />
          </section>

          <section className="row text-left">
            <h1 className="col-sm display-4 mt-5">Journey Map</h1>
            <div>
              <p className='col-sm'>
                Customers can get a voucher and take it to the dealer and get discount. After purchasing a car, the buyer will upload the contract detail on the website then we will review the price and charge the dealer and pay a discount to the buyer through an online payment service.                  </p>
            </div>

            <div className='mt-5 mx-auto table-responsive'>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col info">Activity</th>
                    <th scope="col">Decide to buy a new car</th>
                    <th scope="col">Not sure how and where buy the car</th>
                    <th scope="col">Looking for a car or dealer</th>
                    <th scope="col">Select the car</th>
                    <th scope="col">Signing the contract</th>
                    <th scope="col">Make the down payment and fees</th>
                    <th scope="col">Delivered the car</th>

                  </tr>
                </thead>
                <tbody className='text-center'>
                  <tr>
                    <th scope="row">Touch points</th>
                    <td></td>
                    <td>Affcars website</td>
                    <td>Affcars website</td>
                    <td>Affcars website</td>
                    <td></td>
                    <td></td>
                    <td>Receive the cash-back discount</td>
                  </tr>
                  <tr>
                    <th scope="row">Emotions</th>
                    <td className='display-5'><span role="img" aria-label=''>&#128522;</span></td>
                    <td className='display-5'><span role="img" aria-label=''>&#129300;</span></td>
                    <td className='display-5'><span role="img" aria-label=''>&#128533;</span></td>
                    <td className='display-5'><span role="img" aria-label=''>&#128525;</span></td>
                    <td className='display-5'><span role="img" aria-label=''>&#128522;</span></td>
                    <td className='display-5'><span role="img" aria-label=''>&#128519;</span></td>
                    <td className='display-5'><span role="img" aria-label=''>&#129303;</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Equipment and Rsources</th>
                    <td></td>
                    <td>Laptop / smartphone</td>
                    <td>Laptop / smartphone</td>
                    <td>Laptop / smartphone</td>
                    <td></td>
                    <td></td>
                    <td></td>

                  </tr>
                  <tr>
                    <th scope="row">Moment of Truth</th>
                    <td></td>
                    <td>Found Affcars website</td>
                    <td></td>
                    <td>Found the best discount on the website</td>
                    <td></td>
                    <td></td>
                    <td>Refer the website to friends</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
          </section>


          <section className="sketching text-left">
            <h1 className="display-4 mt-5">Sketching and Prototyping</h1>
            <div className="d-flex flex-wrap">
              <p>
                After gathering all the information, I started prototyping and structure the information.
                I was aware that I should design for people who are not really internet users so it must be very
                clear, user friendly, well-organized and understanding for users. I really enjoyed this part of my job
                because I gave it a lot of thought to make it simple and easy to use.
             </p>
              <img className="m-1 img-fluid rounded" src="https://media-exp1.licdn.com/dms/image/C4E22AQE0kQV-HJObVg/feedshare-shrink_2048_1536/0?e=1583971200&v=beta&t=G8st7yzJsMEeuKGfcJJmr9uCT4rHpqDoIVCti4IV3IM" alt=""></img>
            </div>
            <hr />
          </section>

          <section className="wireframing row text-light wireframing text-left p-5">
            <h6 className="display-4 mt-5">Wireframing</h6>
            <div className="col-sm-12 my-3">
              <p>
                Again like my previews project I used Adobe XD for clickable wireframing.
                I was almost sure about the user work flow and I designed almost everything to make it applicable for both buyers and sellers. I included product filtering, searching, bookmarking,...
                I'll break it down every steps in following sections.
             </p>
            </div>
            <div className="col-md-6">
              <h1 className='text-warning display-4'>Home Page</h1>
              <ul>
                <li>
                  This is what I thought about the home page. It's pretty straight forward so users can search a spesific car or choose a desireable make and model. min/max price in their area.
                </li>
                <li>
                  <p>
                    I was thinking to design a slide show to offer hot deals of the week in a limited time span for buyers. Users can easily bookmark them or go ahead to buy it.
                </p>
                  <li>
                    In lower sections, I provided the possibility to find a car based on cars body style and customers budget. it will help them see varaities of options match with their budget.
                </li>
                  <p>In the lowest section, customers can find out most popular brands that have been sold lately, it helps them which brands are hot in the market</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img className="img-fluid rounded" src={HomePage} alt=''></img>
            </div>
            <hr />
          </section>

          <section className="wireframing row text-light wireframing text-left p-5">
            <div className="col-md-6">
              <h1 className='text-warning display-4'>Search Result </h1>
              <ul>
                <li>
                  Here is the search result page. In this page users can see the result of their search; however, on the left section, they are also able to change their search by changing variety of specifications provided on the left.
                </li>
                <li>
                  <p>
                    In result sections, users see summary information about the cars such as pictures, description, dicount value, retail price as well as some information about number of views, location and the duration of the listed car on the market.
                </p>
                  <li>
                    I added three icons on the picture to compare models, bookmarking, and a special icon like the logo which means if this car is under contract right now or not.
                </li>
                  <p>In the lowest section, customers can find out most popular brands that have been sold lately, it helps them which brands are hot in market</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img className="img-fluid rounded" src={SearchResult} alt=''></img>
            </div>
            <hr />
          </section>


        </div>
      </div>

    );
  }
}

export default AffcarsCaseStudy;