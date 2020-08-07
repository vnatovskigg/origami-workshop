import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import ShareThoughtsPage from "./pages/share-thoughts";
import Register from "./pages/register";
import Login from "./pages/login";
import Profile from "./pages/profile";
import ErrorPage from "./pages/error";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/share" component={ShareThoughtsPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile/:userid" component={Profile} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Navigation;
