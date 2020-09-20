import React from 'react'

/**
* @author
* @function Clients
**/

const Clients = (props) => {
    const {clients}= props;
  return(
      <>
      <div className='d-inline bg-danger text-white h3'>Clients</div>
        <div className="row text-center my-5">
            {
                clients.map((client, ind)=>(
                    <div className='col-sm-3 align-center my-3'>
                        <img src={client} alt={ind}/>
                    </div>
                ))
            }
        </div>

      </>
   )
  }


export default Clients