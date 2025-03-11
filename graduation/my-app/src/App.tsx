import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Router } from "./router/Router";
import { HeaderLoyout } from "./template/HeaderLoyout";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderLoyout />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
