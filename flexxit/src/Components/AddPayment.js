import React from 'react';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

const AddPayment = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:7000'
    const navigate = useNavigate()
    const [values, setValues] = useState({CardNumber:null, ExpirationDate: "", CVV: null, FirstName:"", LastName: ""})
    const handleChange = (event) =>{
    setValues({ ...values, [event.target.name]: event.target.value})
   }

    const handleClick = async(event) =>{
    event.preventDefault()
    

    const response = await fetch(`${backendUrl}/addpayment`,{
     method: "POST",
     headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify({CardNumber: values.CardNumber,  ExpirationDate: {
        month: Number(values.ExpirationDate.slice(0, 2)),
        year: Number(values.ExpirationDate.slice(4))
      }, CVV: values.CVV, FirstName: values.FirstName, LastName: values.LastName })
    })
    const data = await response.json()
    console.log("data for endpoint", data)
    if(data){
        navigate('/home')
    }

    }

  return (
    <div className="page-body">
<div className="logo" style={{color:"red", fontSize:"55px", fontWeight:"bold", marginLeft:"45px"}}>Flexxit</div>

<div className="add-details">
<div>
    <p>STEP 3 OF 3</p>
</div>
<div>
<h1 style={{color:"white"}}>Set up your credit or debit card</h1>
</div>
<div>
   
    <input type="number" id="card-number" name="CardNumber" style={{width:"465px"}} placeholder=" Card Number" required onChange={handleChange}></input>
</div>
<span>
    
<InputMask
  mask="99 / 99"
  maskChar=" "
  id="expiration-date"
  name="ExpirationDate"
  placeholder="MM / YY"
  required
  onChange={handleChange}
/>

</span>
<span>
   
    <input style={{width:"91px", marginLeft:"5px"}} type="number" id="CVV"  name="CVV" placeholder="CVV" required onChange={handleChange}></input>
</span>
<div>
    
    <input type="text" id="first-name" name="FirstName" style={{width:"465px"}} placeholder="First name" required onChange={handleChange}></input>
</div>
<div>
   
    <input type="text" id="last-name" name="LastName" style={{width:"465px"}} placeholder="Last name" required onChange={handleChange}></input>
</div>
<div style={{marginTop: "70px"}}>
    <p>Any payment above ₹ 2000 shall need additional authentication.</p>

<p>By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Flexxit will automatically continue your membership and charge the membership fee to your payment method until you cancel. You may cancel at any time to avoid future charges.
</p>
</div>
<div>
    
    <input  style={{width:"30px", height:"30px", marginTop:"10px"}}type="checkbox" id="check-box" name="check-box" required></input>
    <label style={{marginRight:"70px", position:"relative", bottom:"10px", left:"5px"}} for="check-box">I agree.</label>
</div>
<div>
    <button style={{marginTop:"50px", marginLeft:"170px"}}className="btn btn-danger" onClick={handleClick}>Start Membership</button>
</div>











    </div>
    </div>
  )
}

export default AddPayment
