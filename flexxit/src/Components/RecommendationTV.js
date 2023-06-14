import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecommendationTV = (props) => {
  const navigate = useNavigate()
  // const [video, setVideo] = useState([])
  let{poster, title, overview, videoId} = props;

  
  const handleClick = () => {
    navigate('/videopage', {
      state: {
        videoId,
        poster,
        title,
        overview
      }
    });
  };



return (
  <>
 
  <div>

      <div id="box1">
        <img src={poster} onClick={handleClick} alt="Images"></img>
        {/* <button type="button" className="btn btn-primary change" onClick={()=>{window.open(video, '_blank')}}>Play</button> */}
      </div>
      
     
      
  </div>
  
  </>
)
}


export default RecommendationTV