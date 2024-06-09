import TableFormat from "./TableFormat";
import './CompanyList.css'

 import React from 'react'
 
 function CompanyList() {
  const companies = [
    {
      name: "The Lunt Marymor Company",
      phone: "+15 109 852 889",
    },
    {
      name: "Company Bucks",
      phone: "+15 109 852 889",
    },
    {
      name: "Divega Company",
      phone: "+15 109 852 889",
    },
  ];
  
  const renderedCompanies = companies.map((company, index) => (
    <div className="company-1" key={index}>
      <div className="company-details">
      <h3>{company.name}</h3>
      <h5>{company.phone}</h5>
      </div>
      
      <TableFormat />
    </div>
  ));

  return (
    <div className="company">
      {renderedCompanies}
    </div>
  )
 }
 
 export default CompanyList;
 


