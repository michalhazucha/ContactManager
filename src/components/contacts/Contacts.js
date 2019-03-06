import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../../Context';

class Contacts extends Component {
  
  render() {
    return(
      <Consumer>
        {value=>{
          const {contacts}=value;
           return(
             <React.Fragment>
               <div className="card mb-3"><h1 className=" card-header text-center display-5 text-light bg-danger p-3">Contact List</h1>
               <div className="card-body">{contacts.map(contact => (
                 <Contact
                   key={contact.id}
                   contact={contact}
                 />
               ))}
               </div>
               </div>
             </React.Fragment>
             )
        }}
      </Consumer>
    )
  };
} 
export default Contacts;