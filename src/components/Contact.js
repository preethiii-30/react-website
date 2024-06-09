import React from 'react';
import './Contact.css';
import Feedback from '../utils/Feedback';
import CompanyList from '../utils/CompanyList'


function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact__up'>
        <div className='contact__up-left'>
          <h1>
            Do you have any doubt?<br />
            Contact us<br />
            <button type='button'>Contact</button>
          </h1>
        </div>
        <div className='contact__up-right'>
          <img className='selfie' src='images/selfie-doodle.png' alt='Selfie-Doodle'></img>
          <img className='vector' src='images/vector.png' alt='background'></img>
        </div>  
      </div>
      <div className='contact__down'>
        <h3>
          There are 194 plumbers in Oakland<br />
          Here are theree of the highest-rated on social media
        </h3>
        <img src='images/map.png' alt='map'></img>
        <CompanyList/>
      </div>
      <Feedback/>
    </div>
  )
}

export default Contact;