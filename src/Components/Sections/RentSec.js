import React from 'react';
import rentImg1 from '../img/rent-img1.jpeg';
import rentImg2 from '../img/rent-img2.jpeg';
import rentImg3 from '../img/rent-img3.jpeg';
import rentImg4 from '../img/rent-img4.jpeg';
import rentImg5 from '../img/rent-img5.jpeg';
import rentImg6 from '../img/rent-img6.jpeg';
import rentImg7 from '../img/rent-img7.jpeg';
import rentImg8 from '../img/rent-img8.jpeg';
import rentImg9 from '../img/rent-img9.jpeg';
import rentImg10 from '../img/rent-img10.jpeg';


function RentSec() {
    return <div>
        <section id="rent">
            <h2>Apartments Available for rent</h2>
            <div id="rent-wrapper">
                <a href="#" className="tiles">
                    <img src={rentImg1} alt="apartment for rent" />
                    <h4 className="info-tiles info-tiles-header">₹30,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>2bd <i className="fa fa-bath"
                            aria-hidden="true"></i>1br 490Sqft</span>
                    <p className="info-tiles info-tiles-p">Tri Nagar, New Delhi</p>

                </a>
                <a href="#" className="tiles">
                    <img src={rentImg2} alt="apartment for rent" />
                    <h4 className="info-tiles info-tiles-header">₹50,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>2bd <i className="fa fa-bath"
                            aria-hidden="true"></i>2br 846Sqft</span>
                    <p className="info-tiles info-tiles-p">Rohini Sector 2, Chennai</p>

                </a>
                <a href="#" className="tiles">
                    <img src={rentImg3} alt="apartment for rent" />
                    <h4 className="info-tiles info-tiles-header">₹40,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>2bd <i className="fa fa-bath"
                            aria-hidden="true"></i>1br 452Sqft</span>
                    <p className="info-tiles info-tiles-p">Friends Colony East, Chennai</p>

                </a>
                <a href="#" className="tiles">
                    <img src={rentImg4} alt="apartment for rent" />
                    <h4 className="info-tiles info-tiles-header">₹60,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>3bd <i className="fa fa-bath"
                            aria-hidden="true"></i>2br 1006Sqft</span>
                    <p className="info-tiles info-tiles-p">Patel Nagar, Mumbai</p>

                </a>
                <a href="#" className="tiles">
                    <img src={rentImg5} alt="apartment for rent" />
                    <h4 className="info-tiles info-tiles-header">₹22,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>1bd <i className="fa fa-bath"
                            aria-hidden="true"></i>1br 305Sqft</span>
                    <p className="info-tiles info-tiles-p">Kailash Nagar, New Delhi</p>

                </a>
                <a href="#" className="tiles">
                    <img src={rentImg6} alt="apartment for rent" />
                    <h4 className="info-tiles info-tiles-header">₹30,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>1bd <i className="fa fa-bath"
                            aria-hidden="true"></i>1br 605Sqft</span>
                    <p className="info-tiles info-tiles-p">Defence Colony, Pune</p>

                </a>
                <a href="#" className="tiles">
                    <img src={rentImg7} alt="apartment for rent" />
                    <h4 className="info-tiles info-tiles-header">₹35,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>2bd <i className="fa fa-bath"
                            aria-hidden="true"></i>1br 705Sqft</span>
                    <p className="info-tiles info-tiles-p">Tagore Garden, Kolkata</p>

                </a>
                <a href="#" className="tiles">
                    <img src={rentImg8} alt="apartment for rent" />
                    <h4 className="info-tiles info-tiles-header">₹25,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>1bd <i className="fa fa-bath"
                            aria-hidden="true"></i>1br 305Sqft</span>
                    <p className="info-tiles info-tiles-p">Green Colony, Kerala</p>

                </a>
                <a href="#" className="tiles">
                    <img src={rentImg9} alt="apartment for rent" />
                    <h4 className="info-tiles info-tiles-header">₹50,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>2bd <i className="fa fa-bath"
                            aria-hidden="true"></i>2br 605Sqft</span>
                    <p className="info-tiles info-tiles-p">Pandav Nagar, Navi Mumbai</p>

                </a>
                <a href="#" className="tiles">
                    <img src={rentImg10} alt="apartment for rent" />
                    <h4 className="info-tiles info-tiles-header">₹45,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>2bd <i className="fa fa-bath"
                            aria-hidden="true"></i>1br 705Sqft</span>
                    <p className="info-tiles info-tiles-p">Nehru Garden, Bangalore</p>

                </a>
                </div>
        </section>
    </div>
}

export default RentSec;