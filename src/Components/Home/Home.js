import './Home.css';
import { CarouselComponent } from '../Carousel/CarouselComponent';
import { useReducer } from 'react';

const image1 = "Пластична-хирургия.jpg";
const image2 = "Пластична-естетична-хирургия-1.webp";
const image3 = "estetikplastikverekonstruktifcerrahijpg_fc4a.jpg";
const image4 = "at-home-face-lift.jpg";
export const Home = () =>{
//const initialState = {email: 6};
//const reducer = (state, action)=>{
//
//return {email: action.email}
//
//}
//
//    const [games, dispatch] =useReducer(reducer, initialState);
//    dispatch( {email: 9});
    
const images = [image1, image2, image3, image4]
    return(
        <section>
       
       <CarouselComponent image={images}/> 
        </section>
    )
}