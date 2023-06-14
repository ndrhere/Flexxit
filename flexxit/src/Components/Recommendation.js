import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Recommendation = (props) => {
  const navigate = useNavigate()
  // const [hovered, setHovered] = useState(false)
 
    let{poster, title, overview, language, vote, videoId} = props;

   const length = (overview) =>{
     const splitting = overview.split(' ')
     console.log('cut', splitting)
     const required = splitting.slice(0,14)
     return required.join(' ')
   }

   

    const handleClick = () => {
     navigate('/videopage', {
      state: {
        videoId,
        overview,
        title, 
        poster
      }
     })
    };
    
  
 

  return (
    <>
   
    <div>

        <div className="poster-screen">
          <img onClick = {handleClick} src={poster} alt="Images"></img>
          {/* <p>{length(overview)}</p>
          <p>{language}|{vote}</p> */}
          {/* <button type="button" className="btn btn-primary change" onClick={()=>{window.open(video, '_blank')}}>Play</button> */}
         
        </div>
        
       
        
    </div>
    
    </>
  )
}

export default Recommendation