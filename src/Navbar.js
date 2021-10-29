import React from 'react';
import { FaFacebookSquare, FaInstagramSquare,  } from 'react-icons/fa';
import { AiFillGoogleSquare,  } from 'react-icons/ai';
import './Navbar.css';
import { BrowserRouter as Router } from 'react-router-dom' ;
import { NavLink } from 'react-router-dom';
 
function Navbar(){
    return(
        <div>
            <div>
                <center><h3>Single web page application</h3></center>
            </div>
            <nav class="main-nav">
            <div class="logo">
            <h1><i>InP Session Tutorial</i></h1>
            </div>
 
            <div class="main-link">
                <ul>
                   <li>
                        <NavLink to="/Home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Sessions">Sessions</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                   
                </ul>
            </div>
   
     {/* https://react-icons.github.io/react-icons/ */}
     <div class="social-media">
        <ul>
            <li>
                <a href="https://www.facebook.com/"><FaFacebookSquare /></a>
            </li>
            <li>
                <a href="https://www.instagram.com/"><FaInstagramSquare /></a>
            </li>
            <li>
                <a href="https://www.youtube.com/"><AiFillGoogleSquare /></a>
            </li>
        </ul>
     </div>
            </nav>
           
        </div>
    );
}
export default Navbar;
