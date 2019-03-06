   import React, { Component } from 'react';
   import {Consumer} from '../../Context';
   import TextInputGroup from '../layout/TextInputGroup'; 
   import axios from 'axios';
class AddContact extends Component {
  state={name:'',email:'',phone:'',errors:{}};
  //check for errors
  
  //e.target.name catch name of input 
  onChange=e=>this.setState({[e.target.name]:e.target.value});
  onSubmit=async (dispatch, e)=>{
    e.preventDefault();
    const {name,email,phone}=this.state;
    
    if(name===''){
      this.setState({errors:{name:'Name is required'}});
      return;
    } else if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    else if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' }})
      return;;
    } 
    else{
      const newContact={ 
      name,
      email,
      phone
    };
     const res= await axios.post('https://jsonplaceholder.typicode.com/users',newContact);
      dispatch({ type: 'ADD_CONTACT', payload: res.data });
    
    this.setState({
      name:'',
      email:'',
      phone:''
    })};
    this.props.history.push('/');
     
  }
    
  render() {
    const {name,email,phone,errors}=this.state;
    return (<Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <div className="card mb-3">
            <div className="card-header">Add Contact</div><div className="card-body">
              <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                <TextInputGroup label="Name" name="name" placeholder="Enter name" value={name} onChange={this.onChange} error={errors.name}></TextInputGroup>
                <TextInputGroup label="E-mail" name="email" type="email" placeholder="Enter email" value={email} onChange={this.onChange} error={errors.email}></TextInputGroup>
                <TextInputGroup label="Phone" name="phone" placeholder="Enter phone number" value={phone} onChange={this.onChange} error={errors.phone}></TextInputGroup>
                
                <input type="submit" value="Add Contact" className="btn btn-block btn-primary" />
              </form>
            </div>
          </div>
        )
      }
      }
    </Consumer> )
    
};
}
export default AddContact;