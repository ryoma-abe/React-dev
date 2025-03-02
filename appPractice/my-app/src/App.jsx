import { useState } from "react";
import "./App.css";

export const App = () => {
  const [countUp, setCountUp] = useState(0);
  const onClickAdd = () => {
    setCountUp(countUp + 1);
  };
  const onClickPrev = () => {
    setCountUp(countUp - 1);
  };
  const onClickReset = () => {
    setCountUp(0);
  };

  return (
    <>
      <p>{countUp}</p>
      <button onClick={onClickAdd}>Add</button>
      <button onClick={onClickPrev}>Prev</button>
      <button onClick={onClickReset}>Reset</button>
    </>
  );
};

export default App;
