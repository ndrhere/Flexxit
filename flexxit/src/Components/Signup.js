import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import poster from './netflix-recommendations-main5.webp';

const Signup = () => {
    const port = 'http://localhost:7000'
    const [register, setRegister] = useState({name: '', email: '', password: '', cpassword: ''})
   

    const navigate = useNavigate()

   


     const handleChange = (e) =>{
      setRegister({...register, [e.target.name]: e.target.value})
    }
    
    const handleSignin = (e) =>{
     e.preventDefault();
     navigate('/login')
    }
    
    const handleClick = async(e) =>{
        e.preventDefault();
        const response = await fetch(`${port}/createuser`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({name:register.name, email:register.email, password:register.password, cpassword: register.cpassword})

            })
            const data = await response.json()
            console.log(data)
           if(data.authToken){
            navigate('/login')
             }else{
                prompt('Internal Error occurred')
             }
    }
  return (
<>
<div className="navbar">
 <div className="logo" style={{color:"red", fontSize:"55px", fontWeight:"bold", marginLeft:"45px"}}>Flexxit</div>
 <div style={{marginRight:"40px"}} ><button onClick={handleSignin} className="button-signin">Sign In</button></div>
</div>

<div className="main-container">
  <div className="mini-container">
 <img src={poster} style={{maxWidth:"100%", opacity:"0.5", height:"140vh"}} alt="Poster"></img>
</div>
</div>

<div style={{color: "white", fontWeight: "bold" ,position:"absolute", top:"240px", left:"170px"}}>
        <h1 style={{fontSize:"70px", width:"61vw", fontFamily:"sans-serif"}}>Unlimited movies, TV shows and more</h1>
        <div className="my-4">
        <h4>Watch anywhere. Cancel anytime</h4>
        <h5 className="my-4" style={{color:"yellow"}}>Ready to watch ? Register here to start streaming!</h5>
        </div>
      </div>

    <div className="signup">

     

<div class="mb-3 my-4">
  <label for="exampleFormControlInput1" class="form-label"></label>
  <input style={{textAlign:"center", backgroundColor:"transparent", color: 'white'}}type="text" class="form-control" id="exampleFormControlInput1" name="name" placeholder="Enter Your name" required onChange={handleChange}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput2" class="form-label"></label>
  <input  style={{textAlign:"center",backgroundColor:"transparent",color:"white"}}type="email" class="form-control" id="exampleFormControlInput2" name = "email" placeholder="Enter your Email" required onChange={handleChange}/>
</div>
<label for="inputPassword5" class="form-label"></label>
<input  style={{textAlign:"center",backgroundColor:"transparent",color:"white"}}type="password" id="inputPassword5" class="form-control" placeholder="Enter your password"aria-labelledby="passwordHelpBlock" name="password" required onChange = {handleChange}></input>

<div className="my-4">
<label for="inputPassword6" class="form-label"></label>
<input  style={{textAlign:"center",backgroundColor:"transparent",color:"white"}}type="password" id="inputPassword6" class="form-control"placeholder="Confirm your password" aria-labelledby="passwordHelpBlock" name="cpassword" required onChange = {handleChange}></input>
</div>

<div style={{marginTop: "35px"}}>
<button style={{marginLeft:"155px", width:"200px", padding:"5px", backgroundColor:"red", color:"white", borderRadius:"10px"}} type="button" onClick = {handleClick}>Register</button>
</div>



    </div>
    </>
  )
  
}

export default Signup