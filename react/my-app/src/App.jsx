import { ColorfulMessage } from "./components/ColorfulMessage";
export const App = () => {
  const onClickButton = () => {
    alert("ボタン");
  };

  return (
    <>
      <h1>こんにちは！</h1>
      <ColorfulMessage color="blue" message="元気です" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
