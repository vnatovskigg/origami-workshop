import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const HomePage = React.lazy(() => import("./pages/home-page/home-page"));
const ShareThoughtsPage = React.lazy(() => import("./pages/share-thoughts"));
const Register = React.lazy(() => import("./pages/register"));
const Login = React.lazy(() => import("./pages/login"));
const Profile = React.lazy(() => import("./pages/profile"));
const ErrorPage = React.lazy(() => import("./pages/error"));

const LazyNavigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<h1>Loading</h1>}>
          <Route exact path="/" component={HomePage} />
          <Route path="/share" component={ShareThoughtsPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile/:userid" component={Profile} />
          <Route component={ErrorPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};
export default LazyNavigation;
