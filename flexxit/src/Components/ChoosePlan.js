import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChoosePlan = () => {
    const navigate = useNavigate();
    const handleClick = (event) =>{
    event.preventDefault()
    navigate('/planoptions')
    }
  return (
    <div className="chooseplan-body">

<div className="logo" style={{color:"red", fontSize:"55px", fontWeight:"bold", marginLeft:"45px"}}>Flexxit</div>
<div className="choose-plan">
    <div>
        <p>STEP 1 OF 3</p>
    <h1 style={{fontWeight:"bold"}}>Choose your plan.</h1>
    </div>
    <div  style={{marginTop:"40px", fontWeight:"bold"}}>
        <p><span style={{color:"red"}}>&#10004;</span> No commitments, cancel anytime.</p>
    </div>
    <div className="my-4" style={{fontWeight:"bold"}}>
        <p><span style={{color:"red"}}>&#10004;</span> Everything on Flexxit for one low price.</p>
    </div>
    <div className="my-4" style={{fontWeight:"bold"}}>
        <p><span style={{color:"red"}}>&#10004;</span> No ads and no extra fees. Ever.</p>
    </div>
    <div>
        <button className="btn btn-danger my-4" style={{width:"200px", marginLeft:"70px"}} onClick={handleClick}>Next</button>
    </div>
   
</div>










    </div>
  )
}

export default ChoosePlan