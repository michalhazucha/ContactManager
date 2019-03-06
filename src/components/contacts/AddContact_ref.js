import React, { Component } from 'react'

class AddContact extends Component {
  constructor(props){
    super(props);
    this.nameInuput = React.createRef();
    this.emailInuput = React.createRef();
    this.phoneInput = React.createRef();
  }
  //e.target.name catch name of input 
 
  onSubmit = e => {
    e.preventDefault();
    const contact={
     name:this.nameInput.cu.value,
     email: this.emailInuput.current.value,
     phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };
  static defaultProps={
    name:'Fred Smith',
    email:'fred@yahoo.com',
    phone:'777-777-777'
  }
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div><div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control form-control-lg" placeholder="Enter name" name="name" defaultValue={name} ref={this.nameInuput} />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="text" className="form-control form-control-lg" placeholder="Enter e-mail" name="email" defaultValue={email} ref={this.emailInput} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control form-control-lg" placeholder="Enter phone number" name="phone" defaultValue={phone} ref={this.phoneInput} />
            </div>
            <input type="submit" value="Add Contact" className="btn btn-block btn-primary" />
          </form>
        </div>
      </div>
    )
  }
}
export default AddContact;