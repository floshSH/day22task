import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark, faCheck} from "@fortawesome/free-solid-svg-icons"

const ProCard = () => {
  return (
    <div className='m-1'>
         <div className="card mx-auto p-3" style={{maxWidth:'18rem'}} >
  <div className="card-header " style={{background:"none"}}>
    <div className='mx-auto p-2 text-center' style={{opacity:"0.5"}}>
    PRO
    </div>
    <h2>
        $49/month
    </h2>
  </div>
  <div className="card-body">
     <p ><FontAwesomeIcon icon={faCheck} />  Single User</p>
     <p> <FontAwesomeIcon icon={faCheck} /> 50GB Storage</p>
    <p><FontAwesomeIcon icon={faCheck} />  Unlimited Public Projects</p>
    <p><FontAwesomeIcon icon={faCheck} /> Unlimited Private Projects </p>
    <p><FontAwesomeIcon icon={faCheck} /> Dedicated Phone Support </p>
    <p><FontAwesomeIcon icon={faCheck} /> Free Subdomain</p>
    <p><FontAwesomeIcon icon={faCheck} /> Monthly Status Reports </p>
  </div>
  <button className='btn btn-primary' style={{borderRadius:"15px"}}>BUTTON</button>

</div>
       </div>
  )
}

export default ProCard