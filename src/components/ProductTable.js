import React from 'react';
import PropTypes from 'prop-types';

     export default function ProductTable({tableau}) {
      
    return(
      <table style={{textAlign:"center",fontFamily:'arial',margin:'160px'  }} >
      <tr style={{color:'White',fontSize:'80px',backgroundColor:'black'}}>
      <th style={{padding:'40px'}} >Name</th>
      <th style={{padding:'40px'}}>Category</th>
      <th style={{padding:'40px'}}>price</th>
      </tr>
      
    {  tableau.map((element,i) => 
    <tr style={{fontSize:'50px', backgroundColor:'red',fontFamily:'Times'}}>
     <td >{element.name}</td>
    <td>{element.category}</td>
    <td>{element.price}</td>
     </tr>
     ) }  
    </table>
    )};

    
ProductTable.propTypes={
  tableau:PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number})),};

