import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:"black", color: "white", height:"300px"}}>
        <footer class="footer">
  <div className="container" style={{marginTop:"70px"}}>
    <div className="row row-spacing ">
      <div className="col-md-3">
        <h3 style={{color:"red"}}>Content</h3>
        <p>Help Centre</p>
        <p>Privacy</p>
        <p>Speed Test</p>
      </div>
      <div className="col-md-3">
        <h3 style={{color:"red"}}>Contact</h3>
        <p>Email: ndrhere550@gmail.com</p>
        <p>Phone: +918130124194</p>
      </div>
      
      <div className="col-md-3">
        <h3 style={{color:"red"}}>Accounts</h3>
        <p>Ways to watch</p>
        <p>Corporate Information</p>
      </div>
      <div className="col-md-3">
        <h3 style={{color:"red"}}>FAQ</h3>
        <p>Media Centre</p>
        <p>Terms of use</p>
      </div>
    
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer