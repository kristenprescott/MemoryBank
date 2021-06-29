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

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
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
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <img style={{ width: "30%" }} src={MoreHorIcon} />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {" "}
        <Button size="small" color="primary" onClick={() => {}}>
          <img style={{ width: "30%" }} src={DeleteIcon} />
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <img style={{ width: "30%" }} src={ThumbsUpIcon} />
          <hr></hr>
          {post.likeCount}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
