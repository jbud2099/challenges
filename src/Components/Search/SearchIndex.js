import React from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }
  }


  searchFunction = () => {
 return <div></div>
  }

 render() {
   return (
     <div>
       <Input type="text" placeholder='Search Here' />
       <h3>Results:</h3>
     </div>
   )
 }
}
 
export default SearchIndex;
