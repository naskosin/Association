

import './Articless.css'
import { useEffect } from 'react';
import { useState} from 'react';
import {articlesService} from '../../articlesService'
import { Article } from '../Article/Article';

export const Articles = ()=>{
const [articles, setArticles] = useState([]);

    useEffect(()=>{
        articlesService().then(data=>{
            setArticles(data); console.log(data)
        })
    }, [])
    return(
        <section className='articles'>
            <ul className='articlesUl'>
{ articles ? articles.map(x=><Article key = {x._id} article={x}/>) : <p>No articles</p>}
            </ul>
        </section>
    )
}