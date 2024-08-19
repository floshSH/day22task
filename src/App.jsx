import React from 'react'
import FreeCard from './components/FreeCard'
import PlusCard from './components/PlusCard'
import ProCard from './components/ProCard'

const App = () => {
  return (
    <div className="container-fluid  d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
      <div >
      <div className="priceTable bg-primary d-flex justify-content-center align-items-center p-3">
        <FreeCard/>
        <PlusCard/>
        <ProCard/>
        
      </div>
      </div>
    </div>
  )
}

export default App