import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CommentForm(props) {
  let { id } = useParams();
  const { commentDetails } = props;

  const [comment, setComment] = useState({
    commenter: "",
    comment: "",
    rating: 0,
    song_id: id,
  });

  const handleTextChange = (e) => {
    setComment({ ...comment, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (commentDetails) {
      setComment(commentDetails);
    }
  }, [id, commentDetails, props]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(comment, id);
    if (commentDetails) {
      props.toggleView();
    }
    setComment({
      commenter: "",
      comment: "",
      rating: 0,
      song_id: id,
    });
  };
  return (
    <div className="Edit">
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="commenter">Commenter:</label>
        <input
          id="commenter"
          value={comment.commenter}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <label htmlFor="comment">Comment:</label>
        <input
          id="comment"
          type="text"
          required
          value={comment.comment}
          onChange={handleTextChange}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          name="rating"
          min="0"
          max="5"
          step="1"
          value={comment.rating}
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
      <hr></hr>
    </div>
  );
}

export default CommentForm;
