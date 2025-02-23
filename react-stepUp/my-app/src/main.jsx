import { BrowserRouter, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./router/Router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div>
      <nav className="flex gap-3 mx-auto w-fit my-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/page2">Page2</Link>
      </nav>
      <Router />
    </div>
  </BrowserRouter>
);
