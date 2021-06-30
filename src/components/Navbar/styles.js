import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginRight: "15px",
  },
  toolbar: {
    // border: "2px solid red",
    // display: "flex",
    // justifyContent: "flex-end",
    // alignItems: "center",
  },
  profile: {
    display: "flex",
    justifyContent: "flex-end",
    // width: "400px",
  },
  username: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    marginLeft: "3px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight: "10px",
    marginLeft: "10px",
  },
  logout: {
    marginLeft: "15px",
  },
  signin: {
    padding: "5px 50px",
    textAlign: "center",
  },
}));
