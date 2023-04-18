import React from "react";
import "./about-us.css";
import ImageCollumbus from "../assets/img/Cullumbers.png";
export default function aboutUs() {
  return (
    <div id="aboutUsPage">
      <img src={ImageCollumbus} alt="img" id="about-img" />
      <div id="aboutUs-text">
        <h3 id ="aboutUs-title"> Sobre nosotros. </h3>
        <p id="aboutUs-description">
Casa Esperanza para Niños es una organización sin fines de lucro fundada por Adonna Cullumber en 1999 en Hermosillo, México. La organización fue establecida como un hogar amoroso y cuidadoso para niños maltratados y abandonados, y ha crecido hasta tener cuatro casas y 45 niños en un rancho de 3.5 acres. <br /><br /> Su misión es impactar las vidas de los niños para el reino de Cristo, brindándoles un ambiente familiar cristiano donde se les muestra el amor de Cristo y satisfaciendo sus necesidades financieras, psicológicas y espirituales. La organización también anima a otros a servir a Cristo apoyando su misión. <br /><br /> En resumen, Casa Esperanza para Niños es una organización basada en la fe que proporciona un hogar seguro y amoroso para niños maltratados y abandonados, mientras que también comparte el amor de Cristo con aquellos que lo necesitan. </p>
  
      </div>
    </div>
  );
}
