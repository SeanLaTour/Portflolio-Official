import React from "react";
import { Helmet } from 'react-helmet'
import Header from "./Header";
import { Switch, Route } from "react-router";
import Home from "./HomePage/Home";
import Footer from "./Footer";
import About from "./About/About";
import Apps from "./Apps/Apps";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
    <Helmet>
          <title>{ "Sean La Tourette" }</title>
        </Helmet>
    <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/development">
          <Apps />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
