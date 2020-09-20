import React, { Component } from 'react';

import List from './List';
import data from '../assets/data.json';

/**
* @author
* @class Product
**/

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[], 
      loading:true
    }
  }
  componentDidMount(){
    if(data){
      this.setState({
        data: data,
        loading:false
      })
    }
  }
 render() {
  return(
    <>
      <div className='container text-left display-4 font-weight-bold'>
        Products
      </div>
      {data?
      (
       <List data={data}/>  
      )
        :
        <h2>loading ..</h2>
      }
   </>
  );
   }
 }

export default Product