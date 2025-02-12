import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1>こんにちは！</h1>
      <ColorfulMessage color="blue" message="元気です" />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
