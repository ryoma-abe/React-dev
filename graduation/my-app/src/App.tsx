import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Header } from "./components/oganisms/loyout/Header";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="max-w-3xl mx-auto py-3">
          <Router />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
