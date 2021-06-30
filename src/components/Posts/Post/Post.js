import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbsUpIcon from "../../../images/like.png";
import MoreHorIcon from "../../../images/more.png";
import DeleteIcon from "../../../images/delete.png";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
          <img style={{ width: "30%" }} src={ThumbsUpIcon} />
        </>
      ) : (
        <>
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
          <img style={{ width: "30%" }} src={ThumbsUpIcon} />
        </>
      );
    }

    return (
      <>
        &nbsp;Like
        <img style={{ width: "30%" }} src={ThumbsUpIcon} />
      </>
    );
  };

  return (
    <Card
      className={classes.card}
      style={{
        boxShadow: "6px 6px 10px 0px rgba(0,0,0,0.65)",
      }}
    >
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <img style={{ width: "50%", height: "50%" }} src={MoreHorIcon} />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <img
              style={{
                width: "30%",
                height: "30%",
              }}
              src={DeleteIcon}
            />
          </div>
        </Button>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <div
            style={{
              border: "1px solid transparent",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                fontSize: "22px",
                margin: "10px 0px 0px 10px",
              }}
            >
              <Likes />
            </div>
          </div>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
