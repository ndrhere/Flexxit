import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()

  const [login, setLogin] = useState({email:"", password:""})
  const port = 'http://localhost:7000'

  const handleChange = (event) =>{
    setLogin({...login, [event.target.name]: event.target.value})
  }

  const handleClick = async (event) =>{
  event.preventDefault();
  const response = await fetch(`${port}/login`,{
  method: 'POST',
  headers: {
  "Content-Type": "application/json"
  },
  body: JSON.stringify({email:login.email, password: login.password})
}
  )
   const data = await response.json()
   console.log(data)
   if(data.authToken){
    localStorage.setItem('token', data.authToken)
    navigate('/chooseplan')
   }


  }
  return (
<body className="login-page">
<div className="login-content">

<div className="login-items" >
  <div>
    <h3 style={{fontWeight:"bold", fontFamily:"sans-serif"}}>Sign In</h3>
  </div>
  <label for="exampleFormControlInput1" class="form-label"></label>
  <input type="email" class="form-control" name="email" onChange={handleChange} id="exampleFormControlInput1" style={{backgroundColor:"transparent", color:"white", padding:"13px"}}placeholder="Enter your email"/>

<div>
<label for="inputPassword5" className="form-label"></label>
<input type="password" id="inputPassword5" name="password" onChange={handleChange} placeholder ="Enter your password" style={{backgroundColor:"transparent", color:"white", padding:"13px"}} className="form-control" aria-labelledby="passwordHelpBlock"></input>

</div>
<div style={{marginTop:"70px"}}>
<button style={{width:"300px", zIndex:"1", position:"relative"}} type="button" onClick = {handleClick} className="btn btn-danger">Sign In</button>
<div>
  <h5 style={{color:"red", marginTop:"30px", marginLeft:"52px"}}>Haven't signed up yet? </h5>
  <Link style={{color:"white", fontWeight:"bold", marginLeft:"65px"}} to="/">Click here to signup !</Link>
</div>


</div>


</div>



</div>
</body>
  )
}

export default Login