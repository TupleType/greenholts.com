import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Blog from "../pages/blog/Blog";
import Error404 from "../pages/errors/error404/Error";

const CLIENT_SIDE_PATHS = ["/", "/home", "/blog", "/404"];

export default class Main extends Component {
  render() {
    // This is to process the route on the server side to return actual 404 code and load the 404.html page
    const pathname = window.location.pathname;
    if (!CLIENT_SIDE_PATHS.some((path) => pathname.startsWith(path))) {
      window.location.href = pathname;
      return true;
    }

    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/blog"
            render={(props) => <Blog {...props} theme={this.props.theme} />}
          />
          <Route
            path="/404"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={() => {
              window.location.href = window.location.pathname;
              return null;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
