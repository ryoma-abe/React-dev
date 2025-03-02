import "./App.css";
import { AddButton } from "./components/Button/AddButton";
import { PrevButton } from "./components/Button/PrevButton";
import { ResetButton } from "./components/Button/ResetButton";
import { DisplayComponent } from "./components/DisplayComponent";
import { CountProvider } from "./provider/CountProvider";

export const App = () => {
  return (
    <>
      <CountProvider>
        <DisplayComponent />
        <AddButton />
        <PrevButton />
        <ResetButton />
      </CountProvider>
    </>
  );
};

export default App;
