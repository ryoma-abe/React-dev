import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/Header";
import { FirstView } from "./components/FirstView";
import { About } from "./components/About";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <FirstView />
    <About />
  </StrictMode>
);
