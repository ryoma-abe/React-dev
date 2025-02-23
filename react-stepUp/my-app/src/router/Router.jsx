import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { About } from "../About";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/about"
        render={({ match: { url } }) => {
          return (
            <Switch>
              <Route exact path={url}>
                <About />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          );
        }}
      />

      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
