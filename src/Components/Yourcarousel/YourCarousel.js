import { useState } from "react";
import { useEffect } from "react";
import "./YourCarousel.css";
export const YourCarousel = () => {
  const [count, setCount] = useState(0);

  const image1 = "Пластична-хирургия.jpg";
  const image2 = "Пластична-естетична-хирургия-1.webp";
  const image3 = "estetikplastikverekonstruktifcerrahijpg_fc4a.jpg";
  const image4 = "at-home-face-lift.jpg";


  const items = [
    <img src={image1} alt="CarouselImage"/>,
    <img src={image2} alt="CarouselImage"/>,
    <img src={image3} alt="CarouselImage"/>,
    <img src={image4} alt="CarouselImage"/>,
  ];




  const spanCount = items.map((item, index)=>(item=index)
      
)
const onClickHandler =(e)=>{
    const value =parseInt(e.target.title)
 setCount(value)
}
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 3) {
        setCount((state) => state + 1);
      } else {
        setCount(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [count]);

console.log(count)
 



  return (
      <>
    <i onClick={onClickHandler} className="fa-solid fa-chevron-left position__left"></i><i onClick={onClickHandler} className="fa-solid fa-chevron-right position__right"></i>
    <div  className="carousel-container">
      {items.map((item, index) => {
        return (
          <div
            className="carousel-item "
            style={{ transform: `translate(-${count * 100}%)` }}
            key={index}
          >
            {item}
            <p className="slideIn"
            // className={count % 2 == 0 ? "slideIn" : "slideIn2"}


            style= {count % 2 === 0 ?{ animationName: 'fade', color: 'black' } : { animationName: 'fader' }}
            >Help me</p>
          </div>
        );
      })}
    </div>
    <div className="dots">
     
{spanCount.map((item, index)=>{
  return  <span onClick={onClickHandler} className={count===spanCount[index] ? "myDots" : "myDots active"} ></span>
})}
    </div>
    </>
  );
};
