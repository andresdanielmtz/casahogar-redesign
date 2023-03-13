import React from "react";
import background from "../assets/logo/child-playing.mp4";
import './Home.css'
import Logo from '../assets/logo/logo.png'

export default function Home() {
    return (
  <div>
    <div id = "workaround-video">
    <video autoPlay loop muted id="home-video-background">
      
      <source src={background} type="video/mp4" />
    </video>
    </div> 
    <img src = {Logo} id = "video-logo" alt = "video-logo"/> 
  </div>
    )
};
