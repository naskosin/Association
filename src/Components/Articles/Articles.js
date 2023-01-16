

import './Articless.css'
import { useEffect, useReducer } from 'react';
import { useState} from 'react';
import {articlesService} from '../../articlesService'
import { Article } from '../Article/Article';

export const Articles = ()=>{
const [articles, setArticles] = useState([]);

function reducer(state, action){
return {
    email: action.email + state.email
}

}
const reduceHandler =()=>{
    dispatch( {email: 7})
}
    const [games, dispatch] =useReducer(reducer, {email: 6});
    
   
    useEffect(()=>{
        articlesService().then(data=>{
            setArticles(data); console.log(data)
        })
    }, [])
    return(
    
        <section className='articles'>
            <div><button onClick={reduceHandler}><p>{games.email}</p></button></div>
            <ul className='articlesUl' >
{ articles ? articles.map(x=><Article key = {x._id} article={x}/>) : <p>No articles!</p>}
            </ul>
     

        </section>

    )
}