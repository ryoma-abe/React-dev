import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか</p>
    </>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
