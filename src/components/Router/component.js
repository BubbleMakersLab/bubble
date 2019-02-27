import { arrayOf, bool, func, shape, string } from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

/**
 * Routes builder
 *
 * @param routes
 *
 * @example
 * <Router routes={routes} />
 *
 */
const Router = ({ routes }) => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ exact = true, path, component, id }) => (
        <Route key={id} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);

Router.propTypes = {
  routes: arrayOf(
    shape({
      exact: bool,
      path: string,
      component: func
    })
  )
};

Router.defaultProps = {
  routes: []
};

export default Router;
