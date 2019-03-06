import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './contact.css';
import {Consumer} from '../../Context';
import axios from 'axios';

class Contact extends Component {
  state={
    showContactInfo:false
  };
  onDeleteClick=async(id,dispatch)=>{
  try{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
   dispatch({type:'DELETE_CONTACT',payload:id})}
   catch(e){
   dispatch({ type: 'DELETE_CONTACT', payload: id });
  }};
  render() {
    const {id,name,email,phone}=this.props.contact;
    const {showContactInfo}=this.state;

    return (
      <Consumer>
        {value=>{
          const {dispatch}=value;
          return(
            <div className="card card-body mb-3">
            <div className="row">
                <div className="col-8"><h4>{name} <i onClick={() => { this.setState({ showContactInfo: !this.state.showContactInfo });}} className="fas fa-sort-down" style={{cursor:'pointer'}}></i>
              
                </h4></div><div className="col-4 py-2"><i className="fas fa-times " style={{ cursor: 'pointer', float: 'right', color: '#dc3545' }} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i> <Link to={`contact/edit/${id}`}><i className="fas fa-pencil-alt text-warning mx-2" style={{ cursor: 'pointer', float: 'right'}} ></i>
              </Link> </div></div>
              
        {showContactInfo ? <ul className="list-group">
                <li className="list-group-item">Email:{email}</li>
                <li className="list-group-item">Phone:{phone}</li>
              </ul>: null}
            </div>
          )
        }}
      </Consumer>
    )
  };
}
Contact.propTypes={
  contact: PropTypes.object.isRequired
}
  
export default Contact;
