import React from 'react';
 
// ", { Component }"  goes to line 1

const CatList = (props) => {
 return (
   <div>
     {props.breeds.map((cat) => { return <li>{cat}</li>} )}
   </div>
 )
}
 
export default CatList;
