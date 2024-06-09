import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="left-side">
            <p>© ALL RIGHTS RESERVED</p>
            <p>Terms and Conditions</p>
        </div>
        <div className="right-side">
            <div className='list'>
                <ul>
                    <li>
                        <a href='/service'>Search for Service</a>
                    </li>
                    <li>
                        <a href='/reviews'>Reviews</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact</a>
                    </li>
                </ul>
            </div>
            
            <div className="social-icons">
                <img href="#" src='images/tw copy.png' alt='twitter'></img>
                <img href='#' src='images/fb copy.png' alt='facebook'></img>
                <img href='#' src='images/ins copy.png' alt='instagram'></img>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

