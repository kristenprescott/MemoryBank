import useStyles from "./styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPost, getPostsBySearch } from "../../actions/posts";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import moment from "moment";
import CommentSection from "./CommentSection";

const PostDetails = () => {
  const classes = useStyles();
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (post) {
      if (post.id) {
        dispatch(getPost(id));
      }
    }
  }, []);

  useEffect(() => {
    if (post) {
      if (post.tags) {
        dispatch(
          getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
        );
      }
    }
  }, []);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

  // if (isLoading) {
  //   return (
  //     <Paper elevation={6} className={classes.loadingPaper}>
  //       <CircularProgress size="7em" />
  //     </Paper>
  //   );
  // }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper
      className={classes.PostDetails}
      style={
        {
          // filter: "drop-shadow(7px 7px 10px rgba(0,0,0,0.55))",
          // height: "100vh",
          // width: "100%",
          // padding: "20px",
          // borderRadius: "15px",
        }
      }
      elevation={6}
    >
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.post.title && <span>{post.post.title}</span>}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.post.tags && (
              <span>{post.post.tags.map((tag) => `#${tag} `)}</span>
            )}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.post.message && <span>{post.post.message}</span>}
          </Typography>
          <Typography variant="h6">
            Created by:
            {post.post.name && <span>{post.post.name}</span>}
          </Typography>
          <Typography variant="body1">
            {post.post.createdAt && (
              <span>{moment(post.post.createdAt).fromNow()}</span>
            )}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />

          {/* <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography> */}
          {/* <Divider style={{ margin: "20px 0" }} /> */}
          {post.post && <CommentSection post={post.post} />}
          <Divider style={{ margin: "20px 0" }} />
        </div>

        <div className={classes.imageSection}>
          {post.post.selectedFile && post.post.title && (
            <img
              className={classes.media}
              src={post.post.selectedFile}
              alt={post.post.title}
              // style={{ width: "20%" }}
            />
          )}
        </div>
      </div>
      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might like:{" "}
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, message, name, likes, selectedFile, _id }) => (
                <div>{title}</div>
              )
            )}
          </div>
        </div>
      )}
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, name, message, likes, selectedFile, _id }) => (
                <div
                  style={{ margin: "20px", cursor: "pointer" }}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Typography gutterBottom variant="h6">
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {message}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Likes: {likes.length}
                  </Typography>
                  <img src={selectedFile} width="200px" />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;
