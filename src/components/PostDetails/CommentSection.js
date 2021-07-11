import useStyles from "./styles";
import { useDispatch } from "react-redux";
import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";

const CommentSection = ({ post }) => {
  console.log("comment section");
  console.log("post: ", post);

  return (
    <div className="CommentSection">
      <h1>Comments:</h1>
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
