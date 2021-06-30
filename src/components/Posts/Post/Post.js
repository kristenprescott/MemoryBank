import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core/";
import ThumbsUpIcon from "../../../images/like.png";
import MoreHorIcon from "../../../images/more.png";
import DeleteIcon from "../../../images/delete.png";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { likePost, deletePost, getPost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          &nbsp;
          {post?.likes?.length > 2
            ? ` ${post.likes.length - 1} `
            : `${post.likes.length} ${post.likes.length > 1 ? "" : ""}`}
          <img alt="Thumbs up" style={{ width: "5vmin" }} src={ThumbsUpIcon} />
        </>
      ) : (
        <>
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "" : ""}
          <img alt="Thumbs up" style={{ width: "5vmin" }} src={ThumbsUpIcon} />
        </>
      );
    }

    return (
      <>
        <img alt="Thumbs up" style={{ width: "5vmin" }} src={ThumbsUpIcon} />
      </>
    );
  };

  const openPost = (e) => {
    dispatch(getPost(post._id, history));

    history.push(`/posts/${post._id}`);
  };

  return (
    <Card
      className={classes.card}
      style={{
        boxShadow: "6px 6px 10px 0px rgba(0,0,0,0.65)",
      }}
      raised
      elevation={6}
    >
      {/* <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      > */}
      {/* <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={post.title}
        /> */}
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
      {(user?.result?.googleId === post?.creator ||
        user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(post._id);
            }}
            style={{ color: "white" }}
            size="small"
          >
            <img
              alt="Tap to see more"
              style={{ width: "5vmin" }}
              src={MoreHorIcon}
            />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message.split(" ").splice(0, 20).join(" ")}...
        </Typography>
      </CardContent>
      <Button onClick={openPost}>More...</Button>
      {/* </ButtonBase> */}

      <CardActions className={classes.cardActions}>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "center",
                width: "18vmin",
              }}
            >
              <img
                alt="Throw away"
                style={{
                  width: "30%",
                  height: "30%",
                }}
                src={DeleteIcon}
              />
            </div>
          </Button>
        )}
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <div
            style={{
              fontSize: "22px",
              margin: "10px 0px 0px 10px",
            }}
          >
            <Likes />
          </div>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
