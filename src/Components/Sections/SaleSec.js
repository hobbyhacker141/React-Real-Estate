import React from 'react';
import purchaseImg1 from '../img/purchase-img1.jpeg';
import purchaseImg2 from '../img/purchase-img2.jpeg';
import purchaseImg3 from '../img/purchase-img3.jpeg';
import purchaseImg4 from '../img/purchase-img4.jpeg';
import purchaseImg5 from '../img/purchase-img5.jpeg';
import purchaseImg6 from '../img/purchase-img6.jpeg';
import purchaseImg7 from '../img/purchase-img7.jpeg';
import purchaseImg8 from '../img/purchase-img8.jpeg';
import purchaseImg9 from '../img/purchase-img9.jpeg';
import purchaseImg10 from '../img/purchase-img10.jpeg';


function SaleSec() {
    return <div>
        <section id="availableHome">
            <h2>Houses Available for purchase now</h2>
            <div id="available-wrapper">
                <a href="#" className="tiles">
                    <img src={purchaseImg1} alt="house for purchase" />
                    <h4 className="info-tiles info-tiles-header">₹2,00,00,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>3bd <i className="fa fa-bath"
                            aria-hidden="true"></i>2br 1201Sqft</span>
                    <p className="info-tiles info-tiles-p">Greenwoods, Mumbai</p>

                </a>

                <a href="#" className="tiles">
                    <img src={purchaseImg2} alt="house for purchase" />
                    <h4 className="info-tiles info-tiles-header">₹5,00,00,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>4bd <i className="fa fa-bath"
                            aria-hidden="true"></i>3br 1864Sqft</span>
                    <p className="info-tiles info-tiles-p">Plaze Elite Acres, Chennai</p>

                </a>
                <a href="#" className="tiles">
                    <img src={purchaseImg3} alt="house for purchase" />
                    <h4 className="info-tiles info-tiles-header">₹3,50,00,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>4bd <i className="fa fa-bath"
                            aria-hidden="true"></i>3br 1546Sqft</span>
                    <p className="info-tiles info-tiles-p">Little Earth, Kolkata</p>

                </a>
                <a href="#" className="tiles">
                    <img src={purchaseImg4} alt="house for purchase" />
                    <h4 className="info-tiles info-tiles-header">₹1,00,00,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>2bd <i className="fa fa-bath"
                            aria-hidden="true"></i>2br 984Sqft</span>
                    <p className="info-tiles info-tiles-p">Sky City, Pune</p>

                </a>
                <a href="#" className="tiles">
                    <img src={purchaseImg5} alt="house for purchase" />
                    <h4 className="info-tiles info-tiles-header">₹75,00,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>2bd <i className="fa fa-bath"
                            aria-hidden="true"></i>2br 865Sqft</span>
                    <p className="info-tiles info-tiles-p">Emerald Estate, Kerala</p>

                </a>

                <a href="#" className="tiles">
                    <img src={purchaseImg6} alt="house for purchase" />
                    <h4 className="info-tiles info-tiles-header">₹2,00,00,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>3bd <i className="fa fa-bath"
                            aria-hidden="true"></i>2br 1006Sqft</span>
                    <p className="info-tiles info-tiles-p">Triump Villa, Bangalore</p>

                </a>
                <a href="#" className="tiles">
                    <img src={purchaseImg7} alt="house for purchase" />
                    <h4 className="info-tiles info-tiles-header">₹1,50,00,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>3bd <i className="fa fa-bath"
                            aria-hidden="true"></i>2br 1090Sqft</span>
                    <p className="info-tiles info-tiles-p">Skyscape, Hyderabad</p>

                </a>
                <a href="#" className="tiles">
                    <img src={purchaseImg8} alt="house for purchase" />
                    <h4 className="info-tiles info-tiles-header">₹4,00,00,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>4bd <i className="fa fa-bath"
                            aria-hidden="true"></i>3br 1604Sqft</span>
                    <p className="info-tiles info-tiles-p">Park Square, New Delhi</p>

                </a>
                
                <a href="#" className="tiles">
                    <img src={purchaseImg9} alt="house for purchase" />
                    <h4 className="info-tiles info-tiles-header">₹2,50,00,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>3bd <i className="fa fa-bath"
                            aria-hidden="true"></i>2br 1232Sqft</span>
                    <p className="info-tiles info-tiles-p">Queen Greens, Chennai</p>

                </a>
                <a href="#" className="tiles">
                    <img src={purchaseImg10} alt="house for purchase" />
                    <h4 className="info-tiles info-tiles-header">₹1,00,00,000</h4>
                    <span className="info-tiles info-tiles-span"> <i className="fa fa-bed" aria-hidden="true"></i>2bd <i className="fa fa-bath"
                            aria-hidden="true"></i>2br 1022Sqft</span>
                    <p className="info-tiles info-tiles-p">Pyramid Elements, Mumbai</p>

                </a>
            </div>
        </section>
    </div>
}

export default SaleSec;