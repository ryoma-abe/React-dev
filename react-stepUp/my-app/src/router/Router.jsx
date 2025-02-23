import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1Routeres } from "./Page1Routeres";
import { Page2Routeres } from "./Page2Routeres";


export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/about"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routeres.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routeres.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};
