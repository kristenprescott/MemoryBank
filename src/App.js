import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import useStyles from "./styles";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container maxwidth="lg" className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
