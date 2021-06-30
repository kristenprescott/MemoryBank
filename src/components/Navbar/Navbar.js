import useStyles from "./styles";
import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import memories from "../../images/memories.png";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../../constants/actionTypes";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    // JWT...
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar
      className={classes.appBar}
      position="static"
      color="inherit"
      style={{
        marginTop: "1.5rem",
        height: "15%",
        backgroundColor: "#A7754D",
        boxShadow: "10px 10px 15px 0px rgba(0,0,0,0.6)",
      }}
    >
      <div className={classes.brandContainer}>
        <img
          style={{ filter: "drop-shadow(5px 5px 2.5px rgba(0,0,0,0.75))" }}
          className={classes.image}
          src={memories}
          alt="memories"
          width="10%"
        />
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
          style={{
            fontFamily: '"Corben"',
            fontSize: "calc(2vw + 2vh + 1.5vmin)",
            fontWeight: "700",
            color: "#0D1321",
            padding: "1rem",
            margin: "1rem",
          }}
        >
          MemoryBank
        </Typography>
      </div>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.givenName}
              src={user?.result.imageUrl}
            >
              {user?.result.givenName.charAt(0)}
            </Avatar>
            <Typography className={classes.username} variant="h6">
              {user.result.givenName}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            className={classes.signin}
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
