
import './DetailsCard.css';
export const DetailsCard = ({article})=>{
    return(<article className="DetailsSection">
    <h2 className="DetailsH2">{article.topic}</h2>
    <div className="DetailsDiv"  >
    <img className="DetailsImgcontainer"   src={article.img}/>
      
      <p className="DetailsParagraph">{article.text}</p>
      </div>
    </article>)
}