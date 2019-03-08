import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Contacts from './components/contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from './Context';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test'

class App extends Component {
  render() {
     return (
       <Provider>
         <Router>
            <div className="App">
              <Header content="Contact Manager"/>
              <div className="container">
              <Switch>
                <Route exact path='/' component={Contacts}></Route>
                <Route exact path='/contact/add' component={AddContact}></Route>
                <Route exact path='/contact/edit/:id' component={EditContact}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/test" component={Test}></Route>
                <Route component={NotFound}></Route>
              </Switch>
                
              </div>
            </div>
         </Router>
      </Provider>
     );
  }
}

export default App;
