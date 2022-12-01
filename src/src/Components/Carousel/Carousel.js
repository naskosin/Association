import './Carousel.css';
import  AliceCarousel  from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const image1 = 'Пластична-хирургия.jpg';
const image2 ='Пластична-естетична-хирургия-1.webp';

export const Carousel =()=>{

    const items = [
       <img  className="item" src={image1}/>,
       <img  className="item" src={image2}/>,
        
    ];

    return(

       
            <AliceCarousel
                mouseTracking
                items={items}
                autoPlay
                autoPlayInterval="3000"
                controlsStrategy="alternate"
            />
        );
    
}
