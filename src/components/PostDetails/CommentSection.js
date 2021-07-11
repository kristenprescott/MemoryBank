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
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  const handleClick = () => {
    const finalComment = `${user.result.name}: ${post.comment}`;
    dispatch(commentPost(finalComment, post.post._id));
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            <span>Comments: </span>
          </Typography>
          {post.post.comments &&
            post.post.comments.map((comment, idx) => (
              <Typography key={idx} gutterBottom variant="subtitle1">
                Comment {idx}
              </Typography>
            ))}
        </div>
        {/* BELOW: don't throw a hissy is the user doesn't exist */}
        {user?.result?.name && (
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
        )}
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
