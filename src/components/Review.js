import React from 'react';
import './Review.css';

function Review() {
  return (
    <div className='review'id='reviews'>
        <div className='review-img'>
            <img src='images/review.png' alt='review'></img>
            <h1>We read 1000000's of reviews on many websites...</h1>
        </div>
        <div className='gallery'>
            <div className='column'>
             <div className='row'><img src='images/1.png' alt='Tree Service'></img><p>Tree Service</p></div>
             <div className='row'><img src='images/7.png' alt='Alarms Security'></img><p>Alarms Security</p></div>
             <div className='row' id='row-1'><img src='images/13.png' alt='Garden Maintenance'></img><p id='row'>Garden Maintenance</p></div>
            </div>
            <div className='column'>
             <div className='row'><img src='images/2.png'alt='Electrical Contractor'></img><p>Electrical Contractor</p></div>
             <div className='row'><img src='images/8.png' alt='Gutter Specialist'></img><p>Gutter Specialist</p></div>
             <div className='row'><img src='images/14.png' alt='Hauling Contractor'></img><p>Hauling Contractor</p></div>
            </div>
            <div className='column'>
             <div className='row'><img src='images/3.png' alt='Roofing Contractor'></img><p>Roofing Contractor</p></div>
             <div className='row' id='row-1'><img src='images/9.png' alt='Appliance Repair Service'></img><p id='row'>Appliance Repair Service</p></div>
             <div className='row'><img src='images/15.png' alt='Cabinet Contractor'></img><p>Cabinet Contractor</p></div>
            </div>
            <div className='column'>
             <div className='row'><img src='images/4.png' alt='Concrete Driveway'></img><p>Concrete Driveway</p></div>
             <div className='row'><img src='images/10.png' alt='Heating & Air'></img><p>Heating & Air</p></div>
             <div className='row'><img src='images/16.png' alt='Architect Service'></img><p>Architect Service</p></div>
            </div>
            <div className='column'>
             <div className='row'><img src='images/5.png' alt='Window Covering'></img><p>Window Covering</p></div>
             <div className='row'><img src='images/11.png' alt='Gaming Service'></img><p>Gaming Service</p></div>
             <div className='row'><img src='images/17.png' alt='Remodeling Contractor'></img><p>Remodeling Contractor</p></div>
            </div>
            <div className='column'>
             <div className='row'><img src='images/6.png' alt='Painting Contractor'></img><p>Painting Contractor</p></div>
             <div className='row'><img src='images/12.png' alt='Window Cleaner'></img><p>Window Cleaner</p></div>
             <div className='row'><img src='images/18.png' alt='Carpet Cleaner'></img><p>Carpet Cleaner</p></div>
            </div>
        </div>
        <div className='experience'>
            <h1>They are delighted you too</h1>
            <div className='container'>
                <div className='container-1'>
                    <img src='images/Ellipse 1.png' alt='reviewer'></img>
                    <h6>Scarlett Howard</h6>
                    <p>Consequat incididunt ex dolor excepteur tempor magna deserunt. Laboris nostrud aute deserunt elit </p>
                </div>
                <div className='container-1'>
                    <img src='images/Ellipse 2.png'  alt='reviewer'></img>
                    <h6>Arlene Webb</h6>
                    <p>Consequat incididunt ex dolor excepteur tempor magna deserunt. Laboris nostrud aute deserunt elit </p>
                </div>
                <div className='container-1'>
                    <img src='images/Ellipse 3.png'  alt='reviewer'></img>
                    <h6>Shawn Wilson</h6>
                    <p>Consequat incididunt ex dolor excepteur tempor magna deserunt. Laboris nostrud aute deserunt elit </p>
                </div>
                <div className='container-1'>
                    <img src='images/Ellipse 4.png'  alt='reviewer'></img>
                    <h6>Lily Simmmons</h6>
                    <p>Consequat incididunt ex dolor excepteur tempor magna deserunt. Laboris nostrud aute deserunt elit </p>
                </div>
                <div className='container-1'>
                    <img src='images/Ellipse 5.png' alt='reviewer'></img>
                    <h6>Jacob Howard</h6>
                    <p>Consequat incididunt ex dolor excepteur tempor magna deserunt. Laboris nostrud aute deserunt elit </p>
                </div>
                <div className='container-1'>
                    <img src='images/Ellipse 6.png'  alt='reviewer'></img>
                    <h6>Connie Steward</h6>
                    <p>Consequat incididunt ex dolor excepteur tempor magna deserunt. Laboris nostrud aute deserunt elit </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review;
