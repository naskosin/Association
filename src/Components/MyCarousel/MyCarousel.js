import { useState } from "react";
import { useEffect } from "react";
import "./MyCarousel.css";
export const MyCarousel = () => {
  const [count, setCount] = useState(0);
  const [imgClassName, setImageClassName] = useState("div Active");

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 4) {
        setImageClassName("div Active");
        setCount((state) => state + 1);
      } else {
        setCount(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  const image1 = "Пластична-хирургия.jpg";
  const image2 = "Пластична-естетична-хирургия-1.webp";
  const image3 = "estetikplastikverekonstruktifcerrahijpg_fc4a.jpg";
  const image4 = "at-home-face-lift.jpg";

  const clickHandler = () => {
    if (count < 4) {
      setImageClassName("div Active");
      setCount((state) => state + 1);
    } else {
      setCount(0);
    }
  };
  const onTransitionEndHandler = () => {
    if (count === 4) {
      console.log("work");
      setImageClassName("div");
      setCount(0);
    }
  };
  return (
    <div className="container">
      <div onClick={clickHandler} className="divak">
        <div
          className={imgClassName}
          style={{ transform: `translate(-${count * 100}%)` }}
          onTransitionEnd={onTransitionEndHandler}
        >
          <img className="slide" src={image1} />
          <p
            className="slideInHome"
            style={
              count % 2 == 0
                ? { animationName: "fade", color: "black" }
                : { animationName: "fader" }
            }
          >
            Помощ
          </p>
        </div>

        <div
          className={imgClassName}
          style={{ transform: `translate(-${count * 100}%)` }}
        >
          <img className="slide" src={image2} />
          <p
            className="slideInHome"
            style={
              count % 2 == 0
                ? { animationName: "fade", color: "black" }
                : { animationName: "fader" }
            }
          >
            Закрила
          </p>
        </div>

        <div
          className={imgClassName}
          style={{ transform: `translate(-${count * 100}%)` }}
        >
          <img className="slide" src={image3} />
          <p
            className="slideInHome"
            style={
              count % 2 == 0
                ? { animationName: "fade", color: "black" }
                : { animationName: "fader" }
            }
          >
            Надежда
          </p>
        </div>
        <div
          className={imgClassName}
          style={{ transform: `translate(-${count * 100}%)` }}
        >
          <img className="slide" src={image4} />
          <p
            className="slideInHome"
            style={
              count % 2 == 0
                ? { animationName: "fade", color: "black" }
                : { animationName: "fader" }
            }
          >
            Компетентен съвет
          </p>
        </div>
        <div
          className={imgClassName}
          style={{ transform: `translate(-${count * 100}%)` }}
        >
          <img className="slide" src={image1} />
          <p
            className="slideInHome"
            style={
              count % 2 == 0
                ? { animationName: "fade", color: "black" }
                : { animationName: "fader" }
            }
          >
            Помощ
          </p>
        </div>
      </div>
    </div>
  );
};
