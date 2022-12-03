import './Carousel.css';
import  AliceCarousel  from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const image1 = 'Пластична-хирургия.jpg';
const image2 ='Пластична-естетична-хирургия-1.webp';
const image3 ='estetikplastikverekonstruktifcerrahijpg_fc4a.jpg';
const image4 ='at-home-face-lift.jpg';

export const Carousel =()=>{

    const items = [
      <div className='div'> <img className="item"  src={image1}/><p className='paragraph slide-left'>Помогни ми</p></div> ,
      <img  className="item" src={image2}/>,
      <img  className="item" src={image3}/>,
      <img  className="item" src={image4}/>,
        
    ];

    return(

       
            <AliceCarousel
                mouseTracking
                items={items}
                autoPlay='true'
                animationType='fadeout'
                animationDuration='3000'
                autoPlayInterval='3000'
                infinite='true'
                controlsStrategy="alternate"
            />
        );
    
}
