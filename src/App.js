import React from 'react';
import{Switch,Route} from 'react-router-dom';
import {Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/navbar';
import Productlist from './Components/productlist';
import Details from './Components/details';
import Cart from './Components/Cart';
import Defaults from './Components/default';
import Modal from './Components/Modal';
class  App extends Component {
  render()
  {
  return (

<React.Fragment>
<Navbar />
 <Switch>
 <Route exact  path="/" component={   Productlist}/>
 <Route path="/details" component={Details}/>
  <Route path="/cart" component={Cart}/>
    <Route component={Defaults}/>
 </Switch>
 <Modal />
</React.Fragment>

  );

}
}

export default App;
