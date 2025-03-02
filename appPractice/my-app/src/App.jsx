import "./App.css";
import { AddButton } from "./components/Button/AddButton";
import { DisplayComponent } from "./components/DisplayComponent";
import { CountProvider } from "./provider/CountProvider";

export const App = () => {
  return (
    <>
      <CountProvider>
        <DisplayComponent />
        <AddButton />
      </CountProvider>
    </>
  );
};

export default App;
