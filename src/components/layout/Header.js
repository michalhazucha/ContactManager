import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Header= (props)=> {
  const  {content: branding} = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
        <i className="fas-fa-home"></i>{branding}</Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/#/about" className="nav-link text-light"><i className="fas-fa-home"></i>About</Link></li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link text-light"> <i className="fas-fa-plus"></i>Add Contact</Link>
           </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
Header.defaultProps={
  content:'MyApp'
}

Header.propTypes={
  content: PropTypes.string.isRequired 
}

export default Header; 
