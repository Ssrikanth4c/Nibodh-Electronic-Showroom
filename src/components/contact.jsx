import React, { Component } from 'react'
import { FormControl, Form, Row, Button } from 'react-bootstrap'
import MapAddress from './Map';
/**
* @author
* @class Contact
**/

class Contact extends Component {
 state = {
     Api_KEY:'AIzaSyDKV9J3jYSHRdmAZKhMI8-n0EU2eukT62c'
 }
 render() {
  return(
      <>
        <div className='container mt-5 pt-5'>
           <div className="row">
               <div className="col-xl-6">
                   <h2>Contact us</h2>
                   <div className="contactBox">
                       <Form className='formContainer m-0'>
                           <Row>
                               <FormControl className='border-0 h3 font-weight-bold text-uppercase' placeholder='First Name' required type='text' size='md' />
                            </Row>
                            <br/>
                            <Row>
                               <FormControl className='border-0 h3 font-weight-bold text-uppercase' placeholder='Last Name' required type='text' size='md' />
                            </Row>
                            <br/>
                            <Row>
                               <FormControl className='border-0 h3 font-weight-bold' placeholder='Email-id' required type='email' size='md' />
                            </Row>
                            <br/>
                            <Row>
                               <FormControl className='border-0 h3 font-weight-bold' placeholder='Phone Number' required type='tel' size='md' />
                            </Row>
                            <br/>
                            <Button className='font-weight-bold' type='submit'block active variant='danger' size="lg">Submit</Button>
                       </Form>
                   </div>
               </div>
               <div className="col-xl-6 m-0">
                   <h2>Map</h2>
                   <MapAddress  isMarkerShown/>
               </div>
           </div>
        </div>
      </>
    )
   }
 }


export default Contact;