import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/home/Home'
import Product from '../components/Product';
import Contact from '../components/contact';
/**
* @author
* @function Routes
**/

const Routes = (props) => {
  return(
    <>
    <Switch>
        <Route exact path='/' render={()=><Home />} />
        <Route path='/product' render={()=><Product />} />
        <Route path='/contact' render={()=><Contact /> } />
    </Switch>
    </>
   )
  }


export default Routes