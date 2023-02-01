import { useState } from "react";
import "./Procedures.css";
const image1 = "Пластична-хирургия.jpg";
const image2 = "Пластична-естетична-хирургия-1.webp";
const image3 = "estetikplastikverekonstruktifcerrahijpg_fc4a.jpg";
const image4 = "at-home-face-lift.jpg";
const image5 = "AESTHETIC-PLASTIC-RECONSTRUCTIVE-SURGERY-main.webp";
const image6 = "570463944other-procedures.png";

export const Procedures = () => {
  const procedures = ["Лице", "Скули", "Чело", "Устни", "Вежди", "Нос"];
  const [width, setWidth] = useState(400);
  const [targetImage, setImage] = useState(image1);
  const [imgStyle, setImgStyle] = useState("carouselImg ImgTransitionOn");
  const [price, setPrice] = useState('200');
  const [count, setCount] = useState(2);
 
  const images = [
    <img
      className="carouselImg"
      src={image1}
      style={{ transform: `translate(-${count * 100}%)` }}
      alt="CarouselImage"
    />,
    <img
      className="carouselImg"
      src={image2}
      style={{ transform: `translate(-${count * 100}%)` }}
      alt=""
    />,
    <img
      className="carouselImg"
      src={image3}
      style={{ transform: `translate(-${count * 100}%)` }}
      alt=""
    />,
    <img
      className="carouselImg"
      src={image4}
      style={{ transform: `translate(-${count * 100}%)` }}
      alt=""
    />,
    <img
      className="carouselImg"
      src={image5}
      style={{ transform: `translate(-${count * 100}%)` }}
      alt=""
    />,
    <img
      className="carouselImg"
      src={image6}
      style={{ transform: `translate(-${count * 100}%)` }}
      alt=""
    />,
  ];

  const changeOption = (e) => {
    switch(e.target.value){
      case "Лице": setPrice(10); break;
      case "Чело": setPrice(20); break;
      case "Скули": setPrice(40); break;
      default: setPrice(0); break;}
  };

  const clickHandler = (e)=>{
    setImage(e.target.src)
  }

  

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

    if (count === 8) {
      setImgStyle("carouselImg");
      setCount(2);
    }
    if (count === 1) {
      setImgStyle("carouselImg");
      setCount(7);
    }
  };

  return (
    <section className="carouselSection">
      <select  name='procedures' onChange={changeOption}>
        {procedures.map((x, index) => (
          <option  key={index}>
            {x}
          </option>
        ))}
      </select>
      <p>{price}</p>
      <div>
        <p>{procedures[count - 2]}</p>
      </div>
      <i
        type="button"
        onClick={clickHandlerLeft}
        className="fa-solid fa-chevron-left position__left"
        active="true"
        disabled={true}
      ></i>
      <i
        onClick={clickHandlerRight}
        className="fa-solid fa-chevron-right position__right"
      ></i>

      <div className="carousel" >
        <div className="carouselDiv" onClick={clickHandler}>
          <img
          className={imgStyle}
            src={image5}
            style={{ transform: `translate(-${count * 100}%)` }}
            alt="CarouselImage"
          />
          <img
                    className={imgStyle}

            src={image6}
            style={{ transform: `translate(-${count * 100}%)` }}
            alt="CarouselImage"
          />
          <img
                              className={imgStyle}

            src={image1}
            style={{ transform: `translate(-${count * 100}%)` }}
            alt="CarouselImage"
          />
          <img
                              className={imgStyle}

            src={image2}
            style={{ transform: `translate(-${count * 100}%)` }}
            alt="CarouselImage"
          />
          <img
                              className={imgStyle}

            src={image3}
            style={{ transform: `translate(-${count * 100}%)` }}
            alt="CarouselImage"
          />
          <img
                              className={imgStyle}

            src={image4}
            style={{ transform: `translate(-${count * 100}%)` }}
            alt="imag"
          />
          <img
                              className={imgStyle}

            src={image5}
            style={{ transform: `translate(-${count * 100}%)` }}
            alt="imag"
          />
          <img
                              className={imgStyle}

            src={image6}
            style={{ transform: `translate(-${count * 100}%)` }}
            alt="imag"
          />
          <img
                              className={imgStyle}

            src={image1}
            style={{ transform: `translate(-${count * 100}%)` }}
            alt="imag"
            onTransitionEnd={changeStyle}
          />
          <img
                              className={imgStyle}

            src={image2}
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
      <div className="img">
        <img
          src={targetImage}
          style={{ width: `${width}px` }}
          alt="CarouselImage"
        />
      </div>
      <p id="controls">
        <label className="label" htmlFor="in"></label>
        Zoom:
        <input
          id="in"
          type="range"
          onInput={(e) => setWidth(e.target.value)}
          defaultValue={width}
          max={800}
          min={400}
        />
      </p>
    </section>
  );
};
