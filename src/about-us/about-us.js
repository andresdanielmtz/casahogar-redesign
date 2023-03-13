import React from "react";
import "./about-us.css";
import ImageCollumbus from "../assets/img/Cullumbers.png"
export default function aboutUs() {
  return (
    <div id="aboutUsPage">
      <img src={ImageCollumbus} alt = "img" id = "about-img"/>
      <div id="aboutUs-text">
        
        <h3> Sobre nosotros. </h3>
        <p>
          {" "}
          Casa Hogar esperanza Casa Esperanza para Niños was founded as a result
          of a life-long dream of Adonna Cullumber. Adonna has always had a
          strong passion for children, and has always had a very special place
          in her heart for the children of Mexico in need. In 1999, Adonna took
          a leap of faith and started her journey toward building a loving and
          caring home for abused and abandoned children in Hermosillo, Mexico.
          This came to fruition when Casa opened in 1999 with seven children at
          a home in Hermosillo. In 2009, Casa purchased and moved to a 3.5 acre
          ranch just outside of Hermosillo city- limits as the Casa family was
          outgrowing the space of a house in the city. Casa now has four houses
          on the Ranch and a recreation center where the children are able to do
          their homework in the computer lab, play games, and eat meals. Today,
          45 children call Casa home. Casa is focused on allowing people the
          opportunity to be obedient to God’s word by loving the poor, clothing
          the naked, feeding the hungry, and caring for the widows and orphans
          by sharing the love of Jesus. These experiences have radically changed
          the perspectives of many and brings a sense of fulfillment that makes
          each a stronger follower of Christ who is excited to do local outreach
          as well. Casa is passionate about impacting the lives of the children
          for Christ’s kingdom and strives to be an organization that allows
          others to serve Christ by meeting urgent financial, psychological, and
          spiritual needs of the children. Casa cares for children who have been
          abused and abandoned by bringing them into a Christian family
          environment where they are shown Christ’s love.
        </p>
      </div>
    </div>
  );
}
