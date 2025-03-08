import "./App.css";
import { Button } from "./Button";
import { Display } from "./Display";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1);
  const onClickAdd = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Display count={count} />
      <Button onClickAdd={onClickAdd} />
    </>
  );
}

export default App;
