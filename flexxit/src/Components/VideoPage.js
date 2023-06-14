import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const VideoPage = () => {
  const [video, setVideo] = useState([])
  const location = useLocation();
  const {state} = location;
 
useEffect(()=>{
    if (!state) {
        // Handle the case when state is null
      console.error("Error: No video data found")
      return;
      }
      const { title } = state;
      const apiKey = "AIzaSyCbOgm-wXNvkdVkACEsfEmTftKKG1w8gJ0";
      const videoTitle = title
      const fetchyoutube = async  () =>{
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(videoTitle)}&key=${apiKey}`
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log('data', data)
        
        const videoId = data.items[0]?.id?.videoId || '';
        console.log('videoId', videoId)
        const videourl = `https://www.youtube.com/watch?v=${videoId}`;
        setVideo(videourl)
       }
      
       fetchyoutube()
      

     }, [state])
  
if(!state){
    return <div>Error: No Title found</div>
}
  
const {title, overview, poster} = state;


   
        
    

  return (
    <div className="videoitem">
      
     
      <img className="my-4" src={poster} style={{marginLeft:"350px", marginTop:"40px"}}alt={title} />
       <h1 style={{marginLeft:"250px", color:"red"}}>{title}</h1>
       <p style={{color:"white", marginLeft:"70px"}}>{overview}</p>
       <button onClick = {()=>{window.open(video, "_blank")}}style={{marginLeft:"430px"}} type="button" className="btn btn-danger my-4">Play</button>
    
    </div>
  );
};

export default VideoPage;
