import './Article.css';

export const Article =({article})=>{
    return (
      
            <li>
                  <article>
                <h2 className='article_h2'>{article.topic}</h2>
                <p className='articlep'>{article.text}</p>
                </article>
            </li>
        


    )
}