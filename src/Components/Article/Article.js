import './Article.css';
import { Link } from 'react-router-dom';
export const Article =({article})=>{
    return (
      
            <li>
                  <article>
                <h2 className='article_h2'>{article.topic}</h2>
                <p className='articlep'>{article.text}</p>
                <span className='ArticleSpan'><Link to={`/contacts/${article._id}`}>Read more</Link></span>
                </article>
            </li>
        


    )
}