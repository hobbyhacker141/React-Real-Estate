import './App.css';
import './css/styles.css';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import HomeSec from './Components/Sections/HomeSec';
import SaleSec from './Components/Sections/SaleSec';
import RentSec from './Components/Sections/RentSec';
import Gold from './Components/Pricing/Gold';
import Platinum from './Components/Pricing/Platinum';
import Diamond from './Components/Pricing/Diamond';


function App() {

  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [signInMail, setSignInMail] = useState('');
  const [signInPass, setSignInPass] = useState('');

  return (
    <div>
    <header id="header">
        <NavBar />
    </header>
    <div id="container">
        <HomeSec />
        <SaleSec />
        <RentSec />
        
        <section id="pricing">
            <h1 id="pricing-header">Packages available</h1>
            <div className="house-tag">
                <Gold />
                <Platinum />
                <Diamond />
            </div>
        </section>
    </div>
    <footer>
        <div id="foot">
            <h1></h1>
            <h3>About us</h3>
            <br />
            <h3>Contact</h3>
            <br />
            <h3>Follow us</h3>
        </div>
        <div id="subscribe">
            <p>Sign up with us and stay up to date </p>
            <input id="subcribe-email" type="email" placeholder="Enter your email" />
            <br />
            <br />
            <button className="home-btn">signup</button>
        </div>
        <div id="copyright">
            <p>All rights reserve &copy; copy right 2021</p>
        </div>
    </footer>
    </div>
  );
}

export default App;
