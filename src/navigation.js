import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import ShareThoughtsPage from "./pages/share-thoughts";
import Register from "./pages/register";
import Login from "./pages/login";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/share" component={ShareThoughtsPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
