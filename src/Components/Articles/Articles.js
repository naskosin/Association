import "./Articless.css";
import { useEffect } from "react";
import { useState } from "react";
import { articlesService } from "../../articlesService";
import { Article } from "../Article/Article";

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articlesService().then((data) => {
      setArticles(data);
      console.log(data);
    });
  }, []);
  return (
    <section className="articles">
      <ul className="articlesUl">
        {articles.length>0 ? (
          articles.map((x) => <Article key={x._id} article={x} />)
        ) : (
          <p className="loading">Loading   <i className="fas fa-spinner fa-pulse">
         </i></p>
        )}
      </ul>
    </section>
  );
};
