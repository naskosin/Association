import { useState } from "react";
import { CarouselCard } from "./CarouselCard/CarouselCard";
import "./MyCarousel.css";
const image1 = "Пластична-хирургия.jpg";
const image2 = "Пластична-естетична-хирургия-1.webp";
const image3 = "estetikplastikverekonstruktifcerrahijpg_fc4a.jpg";
const image4 = "at-home-face-lift.jpg";
const image5 = "AESTHETIC-PLASTIC-RECONSTRUCTIVE-SURGERY-main.webp";
const image6 = "570463944other-procedures.png";

export const MyCarousel = () => {
  

  
 
  const images = [
    image1,
image2,
image3,
image4,
image5,
image6
  ];



 

  return (
   <CarouselCard images={images} />
  );
};
