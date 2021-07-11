import useStyles from "./styles";
import { useDispatch } from "react-redux";
import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
  console.log("comment section");
  console.log("post: ", post);

  const classes = useStyles();
  const [comments, setComments] = useState([1, 2, 3, 4]);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const handleClick = () => {
    const finalComment = `${user.result.name}: ${comment}`;
    dispatch(commentPost(finalComment, post._id));
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            <span>Comments: </span>
          </Typography>
          {comments &&
            comments.map((comment, idx) => (
              <Typography key={idx} gutterBottom variant="subtitle1">
                Comment {idx}
              </Typography>
            ))}
        </div>
        <div style={{ width: "70%" }}>
          <Typography gutterBottom variant="h6">
            Write a Comment:
          </Typography>
          <TextField
            fullWidth
            rows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <Button
            style={{ marginTop: "10px" }}
            fullWidth
            disabled={!comment}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

// export default CommentSection = () => {
//

//   return (
//     <div className="CommentSection">
//       <h1>Comments:</h1>
//     </div>
//   );
// };

export default CommentSection;
