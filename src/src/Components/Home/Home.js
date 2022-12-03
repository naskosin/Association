import './Home.css';

import { Carousel } from '../Carousel/Carousel';

export const Home = () =>{
let obj = {
    name: 'Nasko',
    hobbies: ["fishing", 'diving']
}
let obj1 = {...obj, hobbies:[...obj.hobbies, 'watering'] }
console.log(obj1)
    return(
        <section>
        <Carousel/>
        </section>
    )
}