import { useParams } from "react-router-dom";

import { useState } from "react";
import { useAuthContext } from "../../authContext";
import { articleDetailsService } from "../../articlesService";
import { useEffect } from "react";
import './ArticleDetails.css'
import { useLocation } from "react-router-dom";
import { DetailsCard } from "../DetailsCard/DetailsCard";

export const ArticleDetails = () => {
    
    const {user} = useAuthContext();
    
    const token = user.accessToken;
    const {pathname} = useLocation();
    const { id } = useParams();
    console.log(pathname)
    const [ article, setArticle] = useState()
    useEffect(()=>{
        articleDetailsService( token, id).then((data)=>{ setArticle(data)})
    }, [token, id])
 

  return (
   article ? 
    (<section className="DetailsSection">
  
      <DetailsCard article={article}/>
    </section>) : <p>No Articles</p>
  );
};
