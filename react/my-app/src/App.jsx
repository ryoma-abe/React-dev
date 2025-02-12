import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const [isShowFace, setIshowFace] = useState(false);
  const onClickToggle = () => {
    setIshowFace(!isShowFace);
  };
  const onClickButton = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0 || String(num).includes("3")) {
        isShowFace || setIshowFace(true);
      } else {
        isShowFace && setIshowFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1>こんにちは！</h1>
      <ColorfulMessage color="blue" message="元気です" />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>＼(^o^)／</p>}
    </>
  );
};
