import { useState, useEffect } from "react";
const image1 = "Пластична-хирургия.jpg";
const image2 = "Пластична-естетична-хирургия-1.webp";
const image3 = "estetikplastikverekonstruktifcerrahijpg_fc4a.jpg";
const image4 = "at-home-face-lift.jpg";

const par1 = "Help";
const par2 = "Закрила";
const par3 = "Съвет";
const par4 = "Помощ";

export const CarouselComponent = ({ image }) => {
  const [count, setCount] = useState(0);
  const [imgClassName, setImageClassName] = useState("div Active");
  const [images, setImages] = useState(image);
  const paragraphs = [par1, par2, par3, par4];

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

  const onTransitionEndHandler = () => {
    if (count === 4) {
      console.log("work");
      setImageClassName("div");
      setCount(0);
    }
  };

  return (
    <div className="container">
      <div className="divak">
        {image.map((item, index) => {
          return (
            <div
              key={index}
              className={imgClassName}
              style={{ transform: `translate(-${count * 100}%)` }}
              onTransitionEnd={onTransitionEndHandler}
            >
              <img className="slide" src={item} />
              <p className="slideInHome"
            style={
              count % 2 == 0
                ? { animationName: "fade", color: "black" }
                : { animationName: "fader" }
            }>{paragraphs[index]}</p>)
            </div>
          );
        })}
 <div
           
              className={imgClassName}
              style={{ transform: `translate(-${count * 100}%)` }}
              onTransitionEnd={onTransitionEndHandler}
            >
              <img className="slide" src={image[0]} />
              <p className="slideInHome"
            style={
              count % 2 == 0
                ? { animationName: "fade", color: "black" }
                : { animationName: "fader" }
            }>{paragraphs[0]}</p>)
            </div>

      </div>
    </div>
  );
};
