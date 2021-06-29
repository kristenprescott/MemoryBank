import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";
import useStyles from "./styles";
import "./App.css";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth="lg" className="App">
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
        <Typography
          className={classes.heading}
          variant="h2"
          align="center"
          style={{
            fontFamily: '"Corben"',
            fontSize: "52px",
            fontWeight: "700",
            color: "#0D1321",
            padding: "1rem",
            margin: "1rem",
          }}
        >
          MemoryBank
        </Typography>
        <img
          style={{ filter: "drop-shadow(5px 5px 2.5px rgba(0,0,0,0.75))" }}
          className={classes.image}
          src={memories}
          alt="memories"
          width="10%"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
