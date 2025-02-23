import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./Home.jsx";
import { Page1 } from "./Page1.jsx";
import { Page2 } from "./Page2.jsx";
import { Page1DetailB } from "./Page1DetaileB.jsx";
import { Page1DetailA } from "./Page1DetailA.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div>
      <nav className="flex gap-3 mx-auto w-fit my-5">
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => {
            return (
              <Switch>
                <Route exact path={url}>
                  <Page1 />
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
    </div>
  </BrowserRouter>
);
