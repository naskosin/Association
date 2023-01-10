import { useState } from "react";
import './CarouselCard.css';

export const CarouselCard =({images })=>{
    const [imgStyle, setImgStyle] = useState("carouselImg ImgTransitionOn");
    const [count, setCount] = useState(2);

    const clickHandlerRight = (e) => {
        if (count < 8) {
          setImgStyle("carouselImg ImgTransitionOn");
    
          setCount((state) => state + 1);
        } else {
          return;
        }
      };
      const clickHandlerLeft = (e) => {
        if (count > 1) {
          setImgStyle("carouselImg ImgTransitionOn");
    
          setCount((state) => state - 1);
        } else {
          return;
        }
      };
      const changeStyle = (e) => {
        console.log(count);
        if (count === 8) {
          console.log(count);
          setImgStyle("carouselImg");
          setCount(2);
        }
        if (count === 1) {
          console.log(count);
          setImgStyle("carouselImg");
          setCount(7);
        }
      };
    return(
    <section className="carouselSection">
    <i
      
      onClick={clickHandlerLeft}
      className="fa-solid fa-chevron-left position__left"
      
    ></i>
    <i
      onClick={clickHandlerRight}
      className="fa-solid fa-chevron-right position__right"
    ></i>

    <div className="carousel">
      <div className="carouselDiv" >
      <img
          className={imgStyle}
          src={images[images.length-2]}
          style={{ transform: `translate(-${count * 100}%)` }}
          alt="imag"
        />
        <img
          className={imgStyle}
          src={images[images.length-1]}
          style={{ transform: `translate(-${count * 100}%)` }}
          alt="imag"
        />
        {images.map((item, index)=>
        <img
          className={imgStyle}
          src={item}
          style={{ transform: `translate(-${count * 100}%)` }}
          alt="imag"
          onTransitionEnd={changeStyle}
        />)}
        <img
          className={imgStyle}
          src={images[0]}
          style={{ transform: `translate(-${count * 100}%)` }}
          alt="imag"
        />
        <img
          className={imgStyle}
          src={images[1]}
          style={{ transform: `translate(-${count * 100}%)` }}
          alt="imag"
        />
      </div>

      {images.map((item, index) => {
        return (
          <span
            key={index}
            className={
              count - 2 === index
                ? "carousel__span"
                : "carousel__span__active"
            }
          ></span>
        );
      })}
    </div>
    
  </section>)
}