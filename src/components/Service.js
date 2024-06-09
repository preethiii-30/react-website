import React from 'react';
import './Service.css';

function Service() {
  return (
    <div className='service' id='service'>
      <h1>We've done the legwork for you</h1>
      <h6 className='sub-heading'>We locket at thousands of local businesses, 
           then handpicket “the Best of the Best”
      </h6>
      <div className='element'>
        <p className='element__left'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dignissim suspendisse auctor leo consectetur blandit. Neque orci ut nibh cras id. Facilisis vitae pellentesque sit amet id lectus convallis. Sed proin nisi, a felis facilisi. Sollicitudin laoreet malesuada turpis tincidunt risus iaculis nunc. Purus tortor proin non semper enim ut. Viverra amet nibh vitae arcu, quam lobortis tortor, nulla. Mus massa arcu odio eleifend arcu. Risus aliquet arcu, volutpat eget.
        <br /> <br />Blandit viverra bibendum consectetur non tristique lectus habitasse leo. Non dignissim feugiat eu porta sit vestibulum ultricies facilisi feugiat. Viverra ipsum sapien odio pellentesque. Ut pulvinar porta nulla volutpat neque. Tincidunt aliquam tortor, ipsum nunc etiam fermentum faucibus cum viverra. Et orci massa.
        </p>
        <div className='element__right'>
          <div className='element__right-header'>
            <img src='images/Logo.png' alt='logo'></img>
            <h1>Report Card</h1>
          </div>
          <div className='element__right-body'>
            <h2>Jim Dandy Home Repair</h2>
            <div className='table'>
            <table>
              <tbody>
                  <tr>
                      <td className='bold'>Yelp</td>
                      <td className='light'><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#DADADA"}}></i></td>
                      <td className='bold'>Reviews</td>
                  </tr>
                  <tr>
                      <td className='bold'>Google</td>
                      <td className='light'><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#DADADA"}}></i></td>
                      <td className='bold'>365</td>
                  </tr>
                  <tr>
                      <td className='bold'>BBB</td>
                      <td className='light'>A rated</td>
                      <td className='bold'>122</td>
                  </tr>
                  <tr>
                      <td className='bold'>Angies's List</td>
                      <td className='light'>A</td>
                      <td className='bold'></td>
                  </tr>
                  <tr>
                      <td className='bold'>Diamond Certified</td>
                      <td className='light'>Yes</td>
                      <td className='bold'></td>
                  </tr>
                  <tr>
                      <td className='bold'>NextDoor</td>
                      <td className='light'>45 Recommendations</td>
                      <td className='bold'>128</td>
                  </tr>
              </tbody>
            </table>
            </div>
            <h6 className='live'>
              <i>*See for yourself: Click any site name for LIVE verification</i>
            </h6>
            <p>
              Sentiment analysis by ReviewsIQ.
            </p>
            <p>
              “We Read the Reviews so You Don't Have To”
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;
