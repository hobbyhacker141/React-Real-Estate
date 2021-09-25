import React from 'react';
import navLogo from '../img/nav-bar-logo.jpeg';


function NavBar() {

    return <div>
        <nav id="nav-bar">
            <div className="wrapper"><a href="#home"><img id="header-img" src={navLogo} alt="Real Estate Logo" /></a></div>
            <label htmlFor="dropdown" className="toggle">
                <div className="bars-wrapper">
                    <span className="bars"></span>
                    <span className="bars"></span>
                    <span className="bars"></span>
                </div>
            </label>
            <input type="checkbox" id="dropdown" />
            <ul className="menu">
                <li>
                    <a href="#availableHome" className="nav-link">Available Homes</a>
                </li>
                <li>
                    <a href="#pricing" className="nav-link">Pricing</a>
                </li>
            </ul>
        </nav>
    </div>
}

export default NavBar;