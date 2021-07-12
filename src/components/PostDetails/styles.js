import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "500px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
  },
  imageSection: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  PostDetails: {
    filter: "drop-shadow(7px 7px 10px rgba(0,0,0,0.55))",
    height: "auto",
    width: "100%",
    padding: "20px",
    borderRadius: "15px",
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  commentsInnerContainer: {
    height: "200px",
    height: "auto",
    width: "100%",
    // overflowY: "auto",
    // overflowY: "scroll",
    marginRight: "30px",
  },
}));
