import React from "react";
import { useNavigate } from "react-router-dom";

const PlanOptions = () => {
    const navigate = useNavigate();

    const handleClick = (event) =>{
        event.preventDefault();
        navigate('/addpayment')
    }

  return (
    <div className="planoptions-body">
      <div
        className="logo"
        style={{
          color: "red",
          fontSize: "55px",
          fontWeight: "bold",
          marginLeft: "45px",
        }}
      >
        Flexxit
      </div>
      <div className="plan-options">
        <div>
          <p>STEP 2 OF 3</p>
        </div>
        <div>
          <h1>Choose the plan that’s right for you</h1>
        </div>
        <div className="first-option my-4">
          <input type="radio" id="mobile" name="options"></input>
          <label for="mobile">
            <span style={{ fontWeight: "bold" }}>Mobile</span>
            <span className="mx-2"style={{fontWeight:"bold"}}>&#8377; 149/month</span>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                Good video quality. Watch in 480p (SD). Downloads available.
                Watch on your mobile phone and tablet.
              </p>
            </div>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "40px" }}>
                With any plan, you can:
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Watch all you
                want.
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Enjoy
                recommendations just for you.
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Change or cancel
                your plan anytime.
              </p>
            </div>
          </label>
        </div>


        <div className="first-option my-4">
          <input type="radio" id="mobile" name="options"></input>
          <label for="mobile">
            <span style={{ fontWeight: "bold" }}>Basic</span>
            <span className="mx-2"style={{fontWeight:"bold"}}>&#8377; 199/month</span>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                Good video quality. Watch in 720p (HD). Downloads available.
                Watch on your TV, computer, mobile phone and tablet.
              </p>
            </div>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "40px" }}>
                With any plan, you can:
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Watch all you
                want.
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Enjoy
                recommendations just for you.
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Change or cancel
                your plan anytime.
              </p>
            </div>
          </label>
        </div>



        <div className="first-option my-4">
          <input type="radio" id="mobile" name="options"></input>
          <label for="mobile">
            <span style={{ fontWeight: "bold" }}>Standard</span>
            <span className="mx-2"style={{fontWeight:"bold"}}>&#8377; 499/month</span>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
              Great video quality. Watch in 1080p (Full HD). Downloads available. Watch on your TV, computer, mobile phone and tablet.
              </p>
            </div>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "40px" }}>
                With any plan, you can:
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Watch all you
                want.
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Enjoy
                recommendations just for you.
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Change or cancel
                your plan anytime.
              </p>
            </div>
          </label>
        </div>

        <div className="first-option my-4">
          <input type="radio" id="mobile" name="options"></input>
          <label for="mobile">
            <span style={{ fontWeight: "bold" }}>Premium</span>
            <span className="mx-2" style={{fontWeight:"bold"}}>&#8377; 649/month</span>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
              Our best video quality. Watch in 4K (Ultra HD) and HDR. Downloads available. Watch on your TV, computer, mobile phone and tablet.
              </p>
            </div>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "40px" }}>
                With any plan, you can:
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Watch all you
                want.
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Enjoy
                recommendations just for you.
              </p>
            </div>
            <div>
              <p>
                <span style={{ color: "red" }}>&#10004;</span>Change or cancel
                your plan anytime.
              </p>
            </div>
          </label>
        </div>
        <div className="my-4">
         <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device       capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
        <div className="my-2">
         Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
       </div></p>
     </div>

     <div>
        <button className="btn btn-danger" style={{width:"500px", height:"70px", marginLeft:"15px",fontWeight:"bold", fontSize:"25px"}} onClick ={handleClick}>Next</button>
     </div>














      </div>
    </div>
  );
};

export default PlanOptions;
