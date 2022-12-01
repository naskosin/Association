import "./Comment.css";
import { useState } from "react";
import { editOneComment } from "../../cmmentService";
export const Comment = ({ comment, updateData }) => {
  const [editMode, setEditMode] = useState(false);

  const editModeHandler = () => {
    setEditMode(true);
  };
  const readingMode = () => {
    setEditMode(false);
  };
  const token = localStorage.getItem("user");
  const tokenId = JSON.parse(token);

  
  const editHandler = (e) => {
    e.preventDefault(e);
    console.log(e.currentTarget);
    const data = new FormData(e.currentTarget);
    const text = data.get("text");
    const email = comment.email
    const commentData ={text, email }
    console.log(comment._id)
    editOneComment(tokenId.accessToken, commentData, comment._id).then(()=>{updateData()});
    readingMode();
  };

 

  const reading = (
    <form className="editComment" onSubmit={editHandler}>
      <input defaultValue={comment.text} name="text"></input>

      <div className="editButtons">
        <button type="button" onClick={readingMode}>
          Cancel
        </button>
        <button type="submit">Complete</button>
      </div>
    </form>
  );

  const editing = (
    <div className="down">
      <p className="text">{comment.text}</p>

      <button className="buttons" onClick={editModeHandler}>
        Edit
      </button>
      <button className="buttons" onClick={editModeHandler}>
        Delete
      </button>
    </div>
  );

  return (
    <div className="comment">
      <p className="user">{comment.email}</p>
      {editMode ? reading : editing}
    </div>
  );
};
