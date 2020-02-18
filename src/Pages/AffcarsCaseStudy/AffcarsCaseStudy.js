import React from 'react';
import './AffcarsCaseStudy.scss';
import { Link } from 'react-router-dom';
import UserFlow from '../../image/affcars/Wireframing/UserFlow.jpg';
import Wireframing from '../../image/affcars/Wireframing/Wireframing.jpg';
import HomePage from '../../image/affcars/Wireframing/HomePage.jpg';
import SearchResult from '../../image/affcars/Wireframing/SearchResult.jpg';
import ProductPage from '../../image/affcars/Wireframing/ProductPage.jpg';
import BuyerLogin from '../../image/affcars/Wireframing/BuyerLogin.jpg';
import BuyerCPanelSaveCars from '../../image/affcars/Wireframing/BuyerCPanelSaveCars.jpg';
import BuyerCPanelProfile from '../../image/affcars/Wireframing/BuyerCPanelProfile.jpg';
import TestDrive from '../../image/affcars/Wireframing/TestDrive.jpg';
import VoucherPage from '../../image/affcars/Wireframing/VoucherPage.jpg';
import BuyerCPanel from '../../image/affcars/Wireframing/BuyerCPanel.jpg';
import UploadDocs from '../../image/affcars/Wireframing/UploadDocs.jpg';
import CreateAlerts from '../../image/affcars/Wireframing/CreateAlerts.jpg';
import PaymentSetup from '../../image/affcars/Wireframing/PaymentSetup.jpg';
import DealerLogin from '../../image/affcars/Wireframing/DealerLogin.jpg';
import DealerCPanel from '../../image/affcars/Wireframing/DealerCPanel.jpg';
import SoldInventory from '../../image/affcars/Wireframing/SoldInventory.jpg';
import Reports from '../../image/affcars/Wireframing/Reports.jpg';
import Profile from '../../image/affcars/Wireframing/Profile.jpg';
import DealerPaymentSetup from '../../image/affcars/Wireframing/DealerPaymentSetup.jpg';
import AddCar1 from '../../image/affcars/Wireframing/AddCar1.jpg';
import AddCar2 from '../../image/affcars/Wireframing/AddCar2.jpg';
import AddCar3 from '../../image/affcars/Wireframing/AddCar3.jpg';
import AddCar4 from '../../image/affcars/Wireframing/AddCar4.jpg';
import Mockup from '../../image/affcars/Wireframing/Mockup.jpg';
import sec1pic from '../../image/affcars/Wireframing/sec1pic.jpg';
import LogoDesign from '../../image/affcars/Wireframing/LogoDesign.jpg';

class AffcarsCaseStudy extends React.Component {

  render() {

    return (
      <div className="container">
        <div>
          <div className="d-flex pt-2 ml-1 justify-content-left">
            <Link className="proj-link nav-link" to="/"><i className="fas fa-home mr-2"></i>Home</Link>
            <Link className="proj-link nav-link" to="/projects"><i className="fas fa-project-diagram mr-2"></i>Projects</Link>
          </div>
        </div>

        <div className='col-sm-12 my-5'>
          <h3 className="my-5 font-weight-bolder text-center"> Online Used Cars Affiliate website. I named it ‘Affcars’</h3>
        </div>

        <section id="section1" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-sm-12'>
              <h2 className="sec-title ">Project Overview</h2>
            </div>

            <div className='sec1-par col-sm-6'>
              <p>
                This is my personal UX/UI project focusing on used car affiliate marketing helping people to buy more reliable cars with the best cash-back discount.
                In this project, dealers can add their inventory and assign discounts for each car then customers will be able to find the cars with the best price and discount.
              The goal is increasing traffic to car dealers to boost their sales and help buyers to get a more affordable and reliable car.</p>
            </div>
            <div className='sec1-pic col-sm-6 m-0'>
              <img className="img-fluid rounded" src={sec1pic} alt=''></img>
            </div>
          </div>
        </section>

        <section id="section2" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-sm-12'>
              <h2 className="sec-title ">My Role</h2>
            </div>

            <div className="sec2-par col-sm-6">
              <ul>I worked on this case study from ground up. I was responsible for:
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
                <li>Again testing, improving, testing, testing...</li>
              </ul>
            </div>
            <div className='sec1-pic col-sm-6 mx-auto my-auto'>
              <img className="m-1 img-fluid rounded" src="https://image.freepik.com/free-photo/creative-web-designer-planning-application-developing-template-layout-framework-mobile-phone_1418-2315.jpg" alt=""></img>
            </div>
          </div>
        </section>

        <section id="section3" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-sm-12'>
              <h2 className="sec-title ">Problem Statement</h2>
            </div>

            <div className="sec3-par col-sm-6">
              <p>
                How might we create a website that users can easily search, filter and narrow their filtering to reach a car that they need with the best cash-back discount People with bad credit, low budget for down-payment, people who can’t buy a car from main dealers or anyone who in particular looking for a car with real discount have this chance to save some money for part of down payment or tax. As I researched the problem is most of these people really don’t know that they can buy a cheaper car.
                The real problem is a lack of buyers' awareness. I’m trying to solve this problem by giving more awareness to these people by providing the right tools to help them buy a car through awareness.
              </p>
            </div>
            <div className='sec1-pic col-sm-6 mx-auto my-auto'>
              <img className="m-1 img-fluid rounded" src="https://image.freepik.com/free-photo/man-solving-rubik-s-cube_23-2147711117.jpg" alt=""></img>
            </div>
          </div>
        </section>

        <section id="section4" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-sm-12'>
              <h2 className="sec-title ">Challenges</h2>
            </div>

            <div className="sec4-par col-sm-12">
              <ul>Buyers:
                <li>The target users are not really internet users, some of them really don’t use the internet to buy a car, they prefer to walk in car lots to see the cars and buy a car with shut eyes. Some of them are immigrants that really don’t know English. </li>
              </ul>
              <ul>Sellers:
                <li>They don’t clarify the real car price, they really don’t like to let the customers know about the (hidden) fees and real final price. They can play with price and fees and change them in the middle of a contract to recover the amount of discount they have already given to the buyer. If we make them clarify the information for customers, they might refuse to list their inventory on the website </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="section5" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-sm-12'>
              <h2 className="sec-title ">Key Questions</h2>
            </div>

            <ul className="list-group col-sm-4">
              <li className='list-group-item  font-weight-bold'>What’s worth doing?</li>
              <li className=' list-group-item'>Help car dealers sell more cars and help customers to find more affordable cars</li>
            </ul>
            <ul className="list-group col-sm-4">
              <li className='list-group-item font-weight-bold'>What are we creating?</li>
              <li className=' list-group-item'> We are creating a website that dealers can add their inventory and specify a discount for each car then we will do online marketing to connect customers to dealers. Customers can download a voucher and take it to the dealer and get a discount.</li>
            </ul>
            <ul className="list-group mb-3 col-sm-4">
              <li className='list-group-item font-weight-bold'>What value does it provide?</li>
              <li className=' list-group-item'> The value is that it makes an easier way for customers to find a car and it will help them to cover part of their down payment or tax; on the other hand, it helps dealers to boost their sales.</li>
            </ul>
            <ul className="list-group mb-3 col-sm-4">
              <li className='list-group-item font-weight-bold'>Who are our users?</li>
              <li className=' list-group-item'> People who have poor or fair credit or individuals who have a hard time paying down payment for cars or finding a reliable car or anyone who is interested in discounts. Dealers, on the hand, can boost their sales</li>
            </ul>
            <ul className="list-group mb-3 col-sm-4">
              <li className='list-group-item font-weight-bold'>What do they expect?</li>
              <li className=' list-group-item'> They expect to get help for part of down payment and find a reliable car</li>
            </ul>
            <ul className="list-group mb-3 col-sm-4">
              <li className='list-group-item font-weight-bold'>Why do these things matter to them?</li>
              <li className=' list-group-item'> Because most of them have trouble for paying down payment, on the other hand, dealers never pay a penny unless they sale a car.</li>
            </ul>
            <ul className="list-group mb-3 col-sm-4">
              <li className='list-group-item font-weight-bold'>Why will people visit/use/buy from us?</li>
              <li className=' list-group-item'>We show all the car lots inventory with great filtering and best discount so they have a chance to buy a less expensive car rather than walk-in car lots</li>
            </ul>
            <ul className="list-group mb-3 col-sm-4">
              <li className='list-group-item font-weight-bold'>How will we measure success?</li>
              <li className=' list-group-item'> We will try to drive more traffic to the website by online marketing so we will create powerful tools to measure the number of sold cars through the website. We will design great tools for dealers to monitor their sales through our website.</li>
            </ul>
            <ul className="list-group mb-3 col-sm-4">
              <li className='list-group-item font-weight-bold'>How does this website fit into your overall strategy?</li>
              <li className=' list-group-item'>Everything depends on the number of our visitors and how many people are interested to buy a car through this website. We will work hard to contract with more dealers to enrich our inventory then visitors will have tons of options. Our strategy is getting the best discount and provide it for buyers. We want to make it easier for individuals who have trouble paying for a car for any reason.</li>
            </ul>

          </div>
        </section>


        <section id="section6" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-12'>
              <h2 className="sec-title ">Interview and opinion polling with customers</h2>
            </div>

            <div className="sec6-par col-md-6">
              <ul className="list-group">
                <li className='list-group-item text-light bg-dark'>Here is the result:</li>
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
                <li className='list-group-item'>%95 were excited about getting $100 to $500 cash-back discount and only %5 expressed they really don’t need it</li>
              </ul>
            </div>
            <div className='sec6-pic col-md-6 mx-auto my-auto'>
              <img className="img-fluid rounded my-3" src="https://image.freepik.com/free-photo/hands-with-blue-pen-application-form-students-taking-exams-writing-examination_4236-1679.jpg" alt=""></img>
              <p>
                I did opinion polling with a couple of customers who already bought a used car from dealers, I also discuss about their creteria, concerns and expectations when they need a new used car.
                They were a combination of Hispanic people, African Americans, Asians and White Americans.
                </p>
            </div>
          </div>
        </section>

        <section id="section7" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-sm-12'>
              <h2 className="sec-title ">Interview with dealership owners</h2>
            </div>

            <div className="sec7-par col-sm-6">
              <ul className="list-group">
                <li className='list-group-item bg-dark text-light'>Here is the result:</li>
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
            <div className='sec7-pic col-sm-6 mx-auto my-auto'>
              <img className="img-fluid rounded" src="https://image.freepik.com/free-photo/friendly-executive-interviewing-job-candidate_1262-9619.jpg" alt=""></img>
              <p>
                In the next step, I made an appointment with four dealership owners and sales managers. It was very important to have their point of view. the result was interesting.
                </p>
              <div className='p-3 bg-dark text-light round shadow'>
                <h4>Lesson I learned from interviews:</h4>
                <p>What I learned from interviews form both sides 'buyers and sellers'
                   is that there’s still a chance to make a powerful interface to connect
                   buyers to sellers and make both sides happy. Although there are tough
                   obstacles and challenges on the way I still think there’s enough room
                   to give customers more awareness to have smart shopping. The fourth
                   business owner was very knowledgeable and smart, despite all his
                   negative points, his last words made me hopeful and optimistic.</p>
              </div>
              <div className='mt-5'>
                <q className='text-muted font-italic'>270 million vehicles are in the U.S, and 40 million used vehicles are sold each year.	'Autonews'</q>
              </div>
            </div>
          </div>
        </section>

        <section id="section8" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-12'>
              <h2 className="sec-title ">Competitors</h2>
            </div>

            <p className='mx-2'>
              The big websites that have been around for a long time are as follow:
              </p>
            <ul className="list-group col-sm-6">
              <li className='list-group-item bg-light font-weight-bold'>CarsforSale</li>
              <li className='Answer list-group-item'>Carsforsale.com is an online automotive listing platform that connects buyers with sellers of vehicles. The company, headquartered in Sioux Falls, South Dakota, offers a product line to automotive dealers that includes Carsforsale.com vehicle listings, dealership websites, inventory distribution, and lead management.</li>
            </ul>
            <ul className="list-group col-sm-6">
              <li className='list-group-item bg-light font-weight-bold'>Truecar</li>
              <li className='Answer list-group-item'>TrueCar, Inc. is an automotive pricing and information website for new and used car buyers and dealers. TrueCar is paid by dealerships so they can obtain potential buyers' contact information.</li>
            </ul>
            <ul className="list-group col-sm-6">
              <li className='list-group-item bg-light font-weight-bold'>Autotrader</li>
              <li className='Answer list-group-item'>Autotrader.com, Inc. is an online marketplace founded in 1997, which functions as an online marketplace for car purchasers and sellers. It aggregates new, used, and certified second-hand cars from dealers and private sellers</li>
            </ul>
            <ul className="list-group col-sm-6">
              <li className='list-group-item bg-light font-weight-bold'>CarGurus</li>
              <li className='Answer list-group-item'>CarGurus is a Cambridge, Massachusetts-based automotive research and shopping website that assists users in comparing local listings for used and new cars, and contacting sellers. Listing cars are free but they charge dealers $99 per sold car</li>
            </ul>
            <ul className="list-group col-sm-6">
              <li className='list-group-item bg-light font-weight-bold'>Edmunds</li>
              <li className='Answer list-group-item'>Edmunds.com Inc. is an American online resource for automotive information. The company is headquartered in Santa Monica, California, and maintains an office in downtown Detroit, Michigan. Edmunds is privately held, with the Steinlauf family holding a majority stake.</li>
            </ul>
            <ul className="list-group col-sm-6">
              <li className='list-group-item bg-light font-weight-bold'>CarsDirect</li>
              <li className='Answer list-group-item'>CarsDirect is an American online automotive research portal and car buying service based in El Segundo, California that allows consumers to research, price, purchase, insure and finance a vehicle online. The company also provides lead generation and referral services to auto dealers</li>
            </ul>
            <ul className="list-group col-sm-6">
              <li className='list-group-item bg-light font-weight-bold'>Carvana</li>
              <li className='Answer list-group-item'>Carvana is an online used car retailer and technology business based in Tempe, Arizona</li>
            </ul>
            <ul className="list-group col-sm-6">
              <li className='list-group-item bg-light font-weight-bold'>Carsaver</li>
              <li className='Answer list-group-item'>Carsaver lists certified dealerships’ inventory and refer customers to dealers. They work with Walmart and provide lifetime warranty for engine, transmission and drivetrain. They charge dealers $350 as success service fee.</li>
            </ul>
            <div className='sec8-table mt-5 table-responsive'>
              <table className="table table-bordered m-auto">
                <thead>
                  <tr className='text-center'>
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
            <div className='sec8-pic col-sm-6 mx-auto my-auto'>
              <img className="img-fluid rounded mb-3" src="https://image.freepik.com/free-photo/group-business-people-ready-start-race-track_38335-103.jpg" alt=""></img>
              <p>
                There is a good number of websites that connect users to dealers by providing great tools for users to narrow down the car they like on the website and great tools for sellers to manage and advertise their inventory. However, I haven’t found a big website offering online car affiliates like my project.
                </p>
            </div>

          </div>
        </section>

        <section id="section9" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-12'>
              <h2 className="sec-title ">User Persona</h2>
            </div>

            <div className="sec9-par">
              <div className='col-12'>
                <p>
                  Through my research, I created an user persona to understand users’ expectations, goals, and frustrations, and maintain a sense of empathy throughout the design process.
                </p>
                <p>
                  <b>Let’s Meet Jose Ortiz Hernandez </b>
                  From Mexico, Moved to the US 10 years ago. Father of 3 kids, Construction Technician. His oldest son just got DL and need a car. He also needs to change his truck for work.
                </p>
              </div>

              <div className='row p-5'>
                <div className='col-md-4'>
                  <img className="img-fluid rounded" src="https://image.freepik.com/free-photo/pointing-sketch_1098-14323.jpg" alt=""></img>
                  <div className='mt-3'>
                    <p><b>Age:</b> 38</p>
                    <p><b>Occupation:</b> Construction Technician</p>
                    <p><b>Status:</b> Married, has 3 kids</p>
                    <p><b>Location:</b> Nashville</p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <ul className="list-group">
                    <ul className="list-group mb-2">
                      <li className='list-group-item bg-light font-weight-bold'>Goals:</li>
                      <li className='list-group-item'>Find a reliable and affordable car for his son as a birthday present</li>
                      <li className='list-group-item'>Manage expenses and save more money to make a better life for his kids</li>
                    </ul>
                  </ul>
                  <ul className="list-group mt-2">
                    <ul className="list-group">
                      <li className='list-group-item bg-light font-weight-bold'>Frustrations:</li>
                      <li className='list-group-item'>Unable to manage life costs as expected</li>
                      <li className='list-group-item'>Very busy at work and have little time for family</li>
                    </ul>
                  </ul>
                </div>
                <div className='col-md-4'>
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
            </div>
          </div>
        </section >


        <section id="section10" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-12'>
              <h2 className="sec-title ">Journey Map</h2>
            </div>

            <div className="sec10-par col">
              <div className='col-12'>
                <p className='col-sm'>
                  Customers can get a voucher and take it to the dealer and get discount. After purchasing a car, the buyer will upload the contract detail on the website then we will review the price and charge the dealer and pay a discount to the buyer through an online payment service.
               </p>
              </div>

              <div className='sec10-table mt-5 table-responsive'>
                <table className="table table-bordered m-auto">
                  <thead>
                    <tr className='text-center'>
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
            </div>
          </div>
        </section>


        <section id="section12" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-12'>
              <h2 className="sec-title ">User flow</h2>
            </div>

            <div className="sec12-par col">
              <div className='col-12'>
                <p>
                  In this step, I tried to figure out how users navigate through the website, I mean, how is it really going to work? so I illustrated all the routes from the beginning to the end.
             </p>
                <img className="img-fluid rounded" src={UserFlow} alt=''></img>
              </div>
            </div>
          </div>
        </section>

        <section id="section13" className='shadow-lg rounded text-light'>
          <div className='row'>
            <div className='col-12'>
              <h2 className="sec-title ">Logo design</h2>
            </div>

            <div className="sec13-par col">
              <div className='col-12'>
                <p>
                  As far as I have been working as a graphic designer, I couldn't help designing a logo for my project.
                  After Sketching a lot on paper, I ended up with this concept so I designed it in Adobe Illustrator.
                  I believe it completely speaks for itself and describes the goal of this project. hands like cars are
                  shaking hands which represents an agreement, contract, cooperation and affiliate marketing in the car industry.
             </p>
                <div className='text-center'>
                  <img className="img-fluid rounded w-50" src={LogoDesign} alt=''></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section11" className='shadow-lg rounded'>
          <div className='row'>
            <div className='col-12'>
              <h2 className="sec-title ">Sketch</h2>
            </div>

            <div className="sec11-par col">
              <div className='col-12'>
                <p>
                  After gathering all the information, I started prototyping and structure the information.
                  I was aware that I should design for people who are not really internet users so it must be very
                  clear, user friendly, well-organized and understanding for users. I really enjoyed this part of my job
                  because I gave it a lot of thought to make it simple and easy to use.
             </p>
                <img className="m-1 img-fluid rounded" src="https://media-exp1.licdn.com/dms/image/C4E22AQE0kQV-HJObVg/feedshare-shrink_2048_1536/0?e=1583971200&v=beta&t=G8st7yzJsMEeuKGfcJJmr9uCT4rHpqDoIVCti4IV3IM" alt=""></img>
              </div>
            </div>
          </div>
        </section>

        <section id="section13" className="wireframing row text-light wireframing text-left p-2">
          <div className='col-12'>
            <h2 className="sec-title ">Wireframing</h2>
          </div>
          <div className="col-md-12">
            <img className="img-fluid rounded" src={Wireframing} alt=''></img>
          </div>
          <div className="col-sm-12 my-3">
            <p>
              Again like my previews project I used Adobe XD for clickable wireframing.
              I was almost sure about the user work flow and I designed almost everything to make it applicable for both buyers and sellers. I included product filtering, searching, bookmarking,...
              I'll break it down every steps in following sections.
             </p>
          </div>
          <div className="col-md-6">
            <h2 className='  my-5'>Home Page</h2>
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

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Search Result </h2>
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
              <li>
                <p>When user clicks on car picture, he/she will see the product page</p>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={SearchResult} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Product Page </h2>
            <ul>
              <li>
                Here is the product page where users can get more information about the car. on top of the page, you will see the car pictures. In the middle tables, there are all information about car make and model, estimate payment and down payment, statistics, social media, sale time span and car specs and features.
                </li>
              <li>
                The 'Check Availability'button will open a popup window and let the user ask an agent about car avaialability. Below that there is a ' See Deal Detail' button that users can get more spesific details as well as the dealer information after signing up in the website.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={ProductPage} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Buyer Login</h2>
            <ul>
              <li>
                Before users could get more information about the deal details they must create an account. As I was talking to some dealers, they usually don't like competitors know their prices and inventory so in order to prevent non-real buyers see the deal detail, users must create an account to proceed.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={BuyerLogin} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Deal Details</h2>
            <ul>
              <li>
                The deal detail page is similar to the product page but the differences are dealer contact information and get the discount voucher. After users log in, they are able to see the accurate deal numbers as well as dealer information, working hours and dealer rate.
  They can read and write a review for the dealer too. They also have access to this dealer inventory.Eventually, by clicking on the 'Make it Yours' button, they canget the discount voucher and book this car.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={TestDrive} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Recieve the Voucher</h2>
            <ul>
              <li>
                This is the voucher that contains all the information about the car,seller, buyer, and deal. Buyers can receive it in their e-mail.This voucher is only valid until 72 hours which means others are not able to request and buy this car at the same time. If buyer doesn't buy it within the next 72 hours, the car will be available for others on the market again.A copy of this voucher also will be sent to sellers so the seller is able to get some information about buyer before signing the contract.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={VoucherPage} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Buyer C-Panel</h2>
            <ul>
              <li>
                Buying a car process and getting the voucher was explained. So in a few simple steps, buyers can find their cars, make an appointmnet and download the voucher. Now, I'm going to explain about the buyer and seller control panel. Let's start by buyer control panel, There are a couple of useful sections such as saved cars, upload documents, create alerts, profile, and payment setupthat I'll explain each.
                </li>

            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={BuyerCPanel} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Save Cars</h2>
            <ul>
              <li>
                In this steps, as you see in the picture, buyers can manage the deales they have bookmarked. They are able to delete or go head and buy them.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={BuyerCPanelSaveCars} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Upload Documents</h2>
            <ul>
              <li>
                This is the most important section. As a policy, buyers must upload the bill of sale or contract in order to get the discount. After they sign the contract and buy a car, they must upload the contract so their discount will be calculated based on the formula which buyer has defined for this car.
              </li>
              <li>
                In the first section, buyer must enter the VIN number of the car and all the car and buyer information will be displayed on the page. Then, they can upload the documents in the box provided on the left side.
              </li>
              <li>
                Support team will review the documents and process the discount to be deposited in their bank account.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={UploadDocs} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Create Alerts</h2>
            <ul>
              <li>
                If someone is looking for a specific car, he/she can create an alert then he/she will be notified by email or text in case the car is available on the market around his/her area.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={CreateAlerts} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Profile</h2>
            <ul>
              <li>
                In this section, users can update thir profile information and change their password.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={BuyerCPanelProfile} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Payment Setup</h2>
            <ul>
              <li>
                In the payment section, users must enter their bank account informationto receive the discount. they can also see the deal information, if they have already bought a car.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={PaymentSetup} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Dealer Login</h2>
            <ul>
              <li>
                In the next sections, I'm going to explain the dealers'control panel and the features that are considered for them in this project. this is the account creation and login page as shown.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={DealerLogin} alt=''></img>
          </div>
          <hr />
        </section>


        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className=' '>Active Inventory</h2>
            <ul>
              <li>
                In the active inventory section, sellers can see all their active inventory, edit or delete the cars from the marketplace.
                After they list a new car, it will be shown here. Each card has some primary information about the car such as picture, price, discount, make, model mileage. stock number, number of days the car was on the market and number view.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={DealerCPanel} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Sold Inventory</h2>
            <ul>
              <li>
                In the sold inventory section as is obviues, sellers will see a quick report about the car they have sold. Like active inventory section, they can filter the result by some components provided in navbar above.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={SoldInventory} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Reports and Stats</h2>
            <ul>
              <li>
                Reports and stats section is going to provide complete tools and data for sellers in order to see their activity in the market and analysis the value of the car compared to competitors in the market.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={Reports} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Update Profile</h2>
            <ul>
              <li>
                Needless to say, sellers also are able to update their profile and reset password in this section.
                they can upload and assign a logo so it will be shown on their information on the market as well.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={Profile} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Payment Setup</h2>
            <ul>
              <li>
                Sellers are asked to provide their credit card information so discounts could be transferred to buyers' account. They will be charged the amount of discount they have assigned to each car after they sell a car.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={DealerPaymentSetup} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Add New car Step 1</h2>
            <ul>
              <li>
                Adding a new car is designed into four sections so make it easier for the seller to list their car. I tried to make it as easier as possible to list their car faster.
                </li>
              <li>
                Through the 'Add New car' button on top left side of the page, sellers can start listing.
                </li>
              <li>
                A progress bar also designed on the top of the page to show the four steps.
                </li>
              <li>
                sellers can add a new car by inserting the VIN number of the car so the webiste will decode the information or they can list manually by selecting Make, Model, Year, and trim of the car. Needless to say that listing through VIN number is more accurate and faster.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={AddCar1} alt=''></img>
          </div>
          <hr />
        </section>


        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Add New car Step 2</h2>
            <ul>
              <li>
                In the second step, after all the information was decoded by the VIN number, seller can add photos.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={AddCar2} alt=''></img>
          </div>
          <hr />
        </section>


        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Add New car Step 3</h2>
            <ul>
              <li>
                In the third step, sellers should provide more information about the car such as mileage, color, interior fabric and description (advertising message)
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={AddCar3} alt=''></img>
          </div>
          <hr />
        </section>


        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col-md-6">
            <h2 className='  my-5'>Add New car Step 4</h2>
            <ul>
              <li>
                And the last step and the most important one. In this section, sellers should define the discount amount, car price, down payment and sale time frame if they are interested.
                </li>
              <li>
                They can define that the car is going to be sold in cash or financing. Then they can assign a discount based on a percentage of car value or down payment.
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={AddCar4} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col">
            <h2 className='my-5'>Usability test</h2>
            <div className='row px-5'>
              <p className='mt-5'>
                Feel free to usability testing and find ot how does it work. <em>(Optimized for desktop view)</em>
              </p>
              <p>
                <Link className="display-4 text-decoration-none" target='_blank' to="/projects/DemoAffcar/demoAffcar">Live Demo</Link>
              </p>
            </div>
          </div>
        </section>


        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col">
            <h2 className='my-5'>Color Theme</h2>
            <div className='row px-5'>
              <div className='color1 col'>#263238</div>
              <div className='color2 col text-dark'>#ECEFF1</div>
              <div className='color3 col'>#D93D4A</div>
              <p className='mt-5'>
                These are three colors I considered for visual design of the website. Dark gray and light gray are used for background and red color is the accent color.
              </p>
            </div>


          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col">
            <h2 className='  my-5'>High Fidelity Mockup</h2>
            <p>
              This is the high fidelity visual design of the website that created with Figma. For this project I used Figma rather than Adobe XD to discover and learn more. I really enjoyed
              working with Figma. It was very easy to use, fast, and enjoyable.
                </p>
          </div>
          <div className="col-md-12">
            <img className="img-fluid rounded" src={Mockup} alt=''></img>
          </div>
          <hr />
        </section>

        <section className="wireframing row text-light wireframing text-left p-2">
          <div className="col">
            <h2 className='  my-5'>Lesson I learned</h2>
            <p>
              It was like a real project for me. I spent lots of time on each corner of this project. Talking and interviewing with buyers and sellers taught me how to organize my questions and design an effective opinion polling. It really improved my communication skills too. I learned how to apply their points of view in my design process. This project also improved my sketchingskills. I changed the sketches several times before start designing the wireframe.
              </p>
            <p>
              I learned how competitors work in the car industry. which features and tools they provided for customers. How's their business model.
                          </p>
            <p>
              I improved my skills using Adobe Xd for wireframing and using Figma for visual design.
            </p>
            <p>
              I practiced the UX design process: Discover > Define > Design > Usability testing > Develop > Coding.
            </p>

          </div>
          <hr />
        </section>

      </div >

    );
  }
}

export default AffcarsCaseStudy;