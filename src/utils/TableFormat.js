import React from 'react';
import './Tableformat.css';

function TableFormat() {
  return (
    <div className='table-format'>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum nunc, sed lorem enim, volutpat mattis. Eget vulputate ut consectetur gravida. Maecenas quis massa vehicula facilisis nec lectus sit viverra. Commodo sed nulla eu purus mauris sit.
            Eget sit egestas eget maecenas. Vel mauris lacus dolor ullamcorper vitae dolor aliquet eu.
        </p>
        <p className='italic'>
            “They saved me $800”, “I recommend Lunt Marymor”, “We've had an excellent experience”, “Skilled and professional”, “Took care of everyting professionally”.
        </p>
        <table >
            <tbody>
                <tr>
                    <td >Yelp</td>
                    <td className='c-2' ><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#DADADA"}}></i></td>
                    <td className='c-3'>407 Reviews</td>
                </tr>
                <tr>
                    <td >BBB</td>
                    <td className='c-2'>A+ Rating</td>
                    <td className='c-3'>2 Reviews</td>
                </tr>
                <tr>
                    <td >Houzz</td>
                    <td className='c-2'><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#FEA41D"}}></i><i className="fa-solid fa-star" style={{"color":"#DADADA"}}></i></td>
                    <td className='c-3'></td>
                </tr>
                <tr>
                    <td >Nextdoor</td>
                    <td className='c-2'>No</td>
                    <td className='c-3'>No</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableFormat;
