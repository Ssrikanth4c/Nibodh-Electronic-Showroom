import React from 'react'

/**
* @author
* @function Description
**/

const Description = (props) => {
  return(
    <div className='row mt-5'>
        <div className="description quote py-5 px-4 col-md-6 d-none  d-md-block align-self-center">
            <h1>Experienced Professionals Who Get<span className='d-inline bg bg-danger text-white '> the Job Done Right</span></h1>
        </div>
        <div className="col-md-6 ">
            <div className="row text-left">
                <div className="col-12 lead  text-left">
                    <p><b className='h3 text-primary'>I</b>n operation since 1976, we are one of the most experienced electrical contractors in the area. We have successfully completed many electrical testing and domestic and commercial electrical work for all manner of industries.</p>
                </div>
                <div className="col-12 lead">
                    <p>
                    <b className='h3 text-primary'>W</b>hether you require domestic, industrial or commercial electrical work, K R Electrical is fully committed to professional and affordable electrical services. We carry out all aspects of electrical work, from design and consultation through to commissioning for clients in the domestic, commercial, industrial and agricultural sectors.
                    </p>
                </div>
                <div className="col-12 lead">
                    <p>
                    <b className='h3 text-primary'>W</b>e are an active member of the National Inspection Council for Electrical Installation Contractors. Enrolment with the NICEIC shows that a contractor has not only requested that the standard of their work be assessed against the required standard, but that they have achieved the standard and agree to further annual scrutiny of their work.
                    </p>
                </div>
            </div>
        </div>

    </div>
   )
  }


export default Description