import { useState } from "react";
import CommentForm from "./CommentForm";

//props = comment from map in Comments
const Comment = ({ oneComment, handleDeleteComment, handleSubmit }) => {
  const { commenter, comment, rating, id } = oneComment;

  const [viewCommentEditForm, toggleViewCommentEditForm] = useState(false);

  const toggleView = () => {
    toggleViewCommentEditForm(!viewCommentEditForm);
  };

  return (
    <div className="Comment">
      {viewCommentEditForm ? (
        <CommentForm
          commentDetails={oneComment}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h4>
            <span>Rating: {rating}</span>
          </h4>
          <h5>{commenter}</h5>
          <p>{comment}</p>
        </div>
      )}

      <h4>
        <span>Rating: {rating}</span>
      </h4>
      <h5>{commenter}</h5>
      <p>{comment}</p>
      <button onClick={() => handleDeleteComment(id)}>Delete Comment</button>
      <button onClick={toggleView}>Edit This Comment</button>
    </div>
  );
};

export default Comment;
