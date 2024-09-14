import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons"

const App = () => {
  return (
    <div className="container-fluid  mt-5 d-flex flex-wrap justify-content-center align-items-center" style={{ height: "90vh" }}>

      <div className="priceTable  bg-primary d-flex flex-wrap justify-content-center align-items-center p-3" style={{ maxWidth: "100vw" }}>
        <div className='m-1'>
          <div className="card mx-auto p-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header " style={{ background: "none" }}>
              <div className='mx-auto p-2 text-center' style={{ opacity: "0.5" }} >
                FREE
              </div>
              <h2>
                $0/month
              </h2>
            </div>
            <div className="card-body">
              <p ><FontAwesomeIcon icon={faCheck} />  Single User</p>
              <p> <FontAwesomeIcon icon={faCheck} /> 50GB Storage</p>
              <p><FontAwesomeIcon icon={faCheck} />  Unlimited Public Projects</p>
              <p style={{ opacity: "0.5" }}><FontAwesomeIcon icon={faXmark} /> Unlimited Private Projects </p>
              <p style={{ opacity: "0.5" }}><FontAwesomeIcon icon={faXmark} /> Dedicated Phone Support </p>
              <p style={{ opacity: "0.5" }}><FontAwesomeIcon icon={faXmark} /> Free Subdomain</p>
              <p style={{ opacity: "0.5" }}><FontAwesomeIcon icon={faXmark} /> Monthly Status Reports </p>
            </div>
            <button className='btn btn-primary' style={{ borderRadius: "15px" }}>BUTTON</button>
          </div>
        </div>
        <div className='m-1'>
          <div className="card mx-auto p-3" style={{ maxWidth: '18rem' }} >
            <div className="card-header " style={{ background: "none" }}>
              <div className='mx-auto p-2 text-center' style={{ opacity: "0.5" }}>
                PLUS
              </div>
              <h2>
                $9/month
              </h2>
            </div>
            <div className="card-body">
              <p ><FontAwesomeIcon icon={faCheck} />  Single User</p>
              <p> <FontAwesomeIcon icon={faCheck} /> 50GB Storage</p>
              <p><FontAwesomeIcon icon={faCheck} />  Unlimited Public Projects</p>
              <p><FontAwesomeIcon icon={faCheck} /> Unlimited Private Projects </p>
              <p><FontAwesomeIcon icon={faCheck} /> Dedicated Phone Support </p>
              <p><FontAwesomeIcon icon={faCheck} /> Free Subdomain</p>
              <p style={{ opacity: "0.5" }}><FontAwesomeIcon icon={faXmark} /> Monthly Status Reports </p>
            </div>
            <button className='btn btn-primary' style={{ borderRadius: "15px" }}>BUTTON</button>

          </div>
        </div>
        <div className='m-1'>
          <div className="card mx-auto p-3" style={{ maxWidth: '18rem' }} >
            <div className="card-header " style={{ background: "none" }}>
              <div className='mx-auto p-2 text-center' style={{ opacity: "0.5" }}>
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
            <button className='btn btn-primary' style={{ borderRadius: "15px" }}>BUTTON</button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default App