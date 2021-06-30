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
  const classes = useStyles();
  const dispatch = useDispatch();

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
        <Typography variant="h6">{post.creator}</Typography>
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
              &nbsp;
              {post.likeCount}
              &nbsp;
            </div>
            <img style={{ width: "30%", height: "30%" }} src={ThumbsUpIcon} />
          </div>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
