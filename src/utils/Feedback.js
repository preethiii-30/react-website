import React from 'react'
import './Feedback.css'
import { useState } from "react";
import ColoredLine from './ColoredLine'


function Feedback() {
    
    const [details, setDetails] = useState("");
    const [address, setAddress] = useState("");
    const [date1, setDate1] = useState("");
    const [time1, setTime1] = useState("");
    const [date2, setDate2] = useState("");
    const [time2, setTime2] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

  return (
    <div className='feedback'>
      <div className='feedback__left'>
        <h3>You need in Oakland?</h3>
        <p> 
          Quickly get three quotes from these 
          local that people love in online reviews.
        </p>
        <ColoredLine color="blue" />
        <p className='middle'>
          Pick the whose estimate suits you best.
        </p>
        <ColoredLine color="blue" />
        <p>
          We then make sure the work i done to your complete satisfaction.
        </p>
        <br />
        <img src='images/feedback.png' alt='feedback-logo'></img>
        <p className='grey'>
          The businesses pay us a small fee for giving them the opportunity to bid on your job. 
          <br />
          <br />
          Plus we also save them time by clarifying your job description-time they would otherwise have to spend with you on the phone.
        </p>
        
      </div>
      <div className='feedback__right'>
      <form>
        <label>
          <h3>What do you need doing?</h3>
          <textarea className='details'
          placeholder='Type details here...' style={{"padding":"20px 20px" }}
          value={details}
          onChange={(e) => setDetails(e.target.value)}>
          </textarea>
        </label>
        <label>
          <h3>Where?</h3>
          <textarea 
           placeholder='Job Address' style={{"padding":"20px 20px"}}
           value={address}
           onChange={(e) => setAddress(e.target.value)}>
          </textarea>
        </label>
        <label >
          <h3>When?</h3>
          <div className='when'>
            <textarea
              placeholder='20/06/2020' style={{"padding":"5px"}}
              value={date1}
              onChange={(e) => setDate1(e.target.value)}>
            </textarea>
            <textarea
              placeholder='09:00 AM' style={{"padding":"5px"}}
              value={time1}
              onChange={(e) => setTime1(e.target.value)}>
            </textarea>
            <p style={{"marginTop":"5px"}}>or</p>
            <textarea
              placeholder='20/06/2020' style={{"padding":"5px"}}
              value={date2}
              onChange={(e) => setDate2(e.target.value)}>
            </textarea>
            <textarea
              placeholder='11:00 AM' style={{"padding":"5px"}}
              value={time2}
              onChange={(e) => setTime2(e.target.value)}>
            </textarea>
          </div>
        </label>
        <p style={{"marginTop":"20px" , "marginBottom":"20px"}}>
          Fill in your contact information so we can send you their estimates
          <br />
          (when quoting, businesses only see your job description and city).
        </p>
        <div className='name'>
          <textarea
           placeholder='Your Name' style={{"padding":"20px 20px"}}
           value={name}
           onChange={(e) => setName(e.target.value)}>
          </textarea>
          <textarea
           placeholder='Email address' style={{"padding":"20px 20px"}}
           value={email}
           onChange={(e) => setEmail(e.target.value)}>
          </textarea>
        </div>
        <button type = "submit" className = "submitBtn"> Request Quotes</button>
      </form>
      </div> 
    </div>
  )
}

export default Feedback;