import React from "react";
import Navbar from "./Navbar";
import API from "./API";
import VideoPage from "./VideoPage";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <API />
      <VideoPage/>
     
     <div >
     <Footer/>
     </div>
     
      
    </div>
  );
};

export default Home;
