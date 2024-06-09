import React from 'react';
import './Hero.css';
import Dropdown from '../utils/Dropdown';

function Hero() {
    const where=[
        {value:"Oakland ", label:"Oakland"},
        {value:"Hyderabad ", label:"Hyderabad"},
        {value:"Oakland ", label:"Oakland"},
    ]
    const service=[
        {value:"Plumber", label:"Plumber"},
        {value:"Carpenter", label:"Carpenter"},
        {value:"Plumber", label:"Plumber"},
    ]

  return (
   <>
   <div className='hero'>
        <div className='hero-text'>
            <div className='hero__left'>
                <h1>Tired of wading through
                    thousands of online reviews
                    just to find a good plumber?
                </h1>
                <p>Here's a list of East Bay businesses
                    people <img className='heart' src='images/heart.png' alt='red-heart'></img> on online review sites
                </p>
                <div className='hero__left-box'>
                    <h3>Find the professional you need in 1 minute</h3>
                    <br/>
                    <div className='elements'>
                        <div className='input'>
                            <p>Where?</p>
                            <Dropdown className='dropdown' placeHolder="Oakland" options={where}/>
                        </div>
                        <div className='input'>
                            <p>Service?</p>
                            <Dropdown placeHolder="Plumber" options={service}/>
                        </div>
                        <div className='input'>
                            <p>
                                <br />
                            </p>
                            <div className='btn'>
                                <button type='button'>Find</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='hero__right'>
                <p>With ******** I found the<br/> perfect professional in only<br/> 1 minute!</p>
                <img src='images/image.png' alt='profession'></img>
            </div>
        </div>
    </div>
   </>
  )
}

export default Hero;
