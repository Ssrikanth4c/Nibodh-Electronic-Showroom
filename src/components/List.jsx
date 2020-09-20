import React from 'react'
import { Card, Button } from 'react-bootstrap';

/**
* @author
* @function List
**/

const List = (props) => {
    const {data}=props;
  return(
    <>
    <div className='container'>
        <div className="row text-center ">
            {data.map((item, ind)=>(
                <div className="col-xl-4 col-md-6 col-sm-12 mb-3 rounded">
                   <Card key={ind+ item.id}>
                        <Card.Img  src={item.img} variant='top' />
                        <h3 className='text-danger font-weight-bold'>{item.name}</h3>
                        <Card.Text>
                            <h2 className='text-black-50 font-weight-bold'>${item.price}</h2>
                            <button className='btn btn-outline-warning px-4 rounded-pill font-weight-bold text-dark mb-4' >Add To Cart </button>
                        </Card.Text>
                    </Card>
                </div>
            ))}
        </div>
    </div>
    </>
   )
  }


export default List