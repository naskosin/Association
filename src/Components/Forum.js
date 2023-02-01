import "./Forum.css";
import { commentService } from "../cmmentService";
import { createComment } from "../cmmentService";
import { Comment } from "./Comment/Comment";
import { useAuthContext } from "../authContext";
import { useEffect, useState } from "react";
export const Forum = () => {
  const [comments, setComments] = useState([]);
  const [dateState, setDateState] = useState(new Date());

const {user } = useAuthContext();


  useEffect(() => {
    commentService().then((data) => {
      console.log(data);
      setComments(data);
    });
    setInterval(() => {
      setDateState(new Date());
    }, 30000);
  }, []);
  //const token = localStorage.getItem("user");
  //const user = JSON.parse(token);
  const email = user.email;
  
  const updateData = () => {
    commentService().then((data) => {
      console.log(data);
      setComments(data);
    });
  };

  const createCommentHandler = (e) => {
    e.preventDefault();
    const { text } = Object.fromEntries(new FormData(e.currentTarget));
  const data = {text, email}
    createComment(user.accessToken, data).then(data=>{
        setComments(state=>[...state, data])
    })
  };

  return (
    <section>
   
      {dateState.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
      {/* <img src='iprc_seized_banner.png'/> */}

      <div className="comments">
        {comments ? (
          comments.map((x) => (
            <Comment updateData={updateData} key={x._id} comment={x} />
          ))
        ) : (
          <p>No comments!</p>
        )}
      </div>
      <form onSubmit={createCommentHandler}>
        <input name="text" className="newComment" />
        <button className="createButton" type='submit'>Create comment</button>
      </form>
    </section>
  );
};
