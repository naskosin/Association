import './Article.css';

export const Article =({article})=>{
    return (
      
            <li>
                  <article>
                <h2>{article.topic}</h2>
                <p>{article.text}</p>
                </article>
            </li>
        


    )
}