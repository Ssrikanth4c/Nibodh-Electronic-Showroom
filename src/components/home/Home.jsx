import React, { Component } from 'react';

import Description from './Description';
import History from './History';
import Clients from './Clients';

/**
* @author
* @class Home
**/

class Home extends Component {
 state = {
   clients:[
    'https://www.kr-electrical-products.co.uk/wp-content/uploads/2015/10/client-logo-01.jpg',
    'https://www.kr-electrical-products.co.uk/wp-content/uploads/2015/10/client-logo-02.jpg',
    'https://www.kr-electrical-products.co.uk/wp-content/uploads/2015/10/client-logo-03.jpg',
    'https://www.kr-electrical-products.co.uk/wp-content/uploads/2015/10/client-logo-01.jpg',
    'https://www.kr-electrical-products.co.uk/wp-content/uploads/2015/10/client-logo-02.jpg',
    'https://www.kr-electrical-products.co.uk/wp-content/uploads/2015/10/client-logo-01.jpg' 
   ]
 }
 render() {
  return(
   <div className='container'>
     <Description />
     <History />
     <Clients  clients={this.state.clients}/>
   </div>
    )
   }
 }

export default Home