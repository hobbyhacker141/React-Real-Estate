import React, { useState } from 'react';
import swal from 'sweetalert';



function HomeSec() {

    const [searchBar, setSearchBar] = useState('');
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [mail, setMail] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName == "admin" && mail == "admin@gmail.com" && pass == "admin") {
            swal("Successfull Login", "Welcome to Dream World","success");
        }
        else {
            swal("Wrong Crendentials", "Please try again", "error");
        }
    }

    return <div>
        <section id="home">
            <h1><u><b>Discover Your Own Heaven</b></u></h1>
            <div id="homesection">                
                <a href="#availableHome" className="home-btn">Buy</a>
                <a href="#rent" className="home-btn">Rent</a>
                <br />
                <br />
                <div role="search" id="search-form">
                    <input placeholder="Search cities, localities, etc." type="search" id="searchInput" value={searchBar} onChange={(e) => setSearchBar(e.target.value)} />
                    <button id="searchButton" type="submit">
                        <i className="fa fa-search" aria-hidden="true">Search</i>
                    </button>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <form onSubmit={handleSubmit}>
                        
                        <input id="signInput" placeholder="Enter Username" style={{float: "right"}} type="text" value={userName} onChange={(e) => setUserName(e.target.value)} autoFocus/>
                        <label style={{float: "right"}}><i>UserName : </i></label>

                        <br />
                        <br />
                        
                        <input id="signInput" placeholder="Enter Email" style={{float: "right"}} type="email" value={mail} onChange={(e) => setMail(e.target.value)} autoFocus />
                        <label style={{float: "right"}}><i>Email : </i></label>
                        
                        <br />
                        <br />

                        <input id="signInput" placeholder="Enter Password" style={{float: "right"}} type="password" value={pass} onChange={(e) => setPass(e.target.value)} autoFocus/>
                        <label style={{float: "right"}}><i>Password : </i></label>

                    
                        <br />
                        <br />
                        <button style={{float: "right"}} type="submit" className="sign-btn">SIGN UP</button>
                    </form>
                </div>
                
                
            
            </div>
        </section>
    </div>
}

export default HomeSec;