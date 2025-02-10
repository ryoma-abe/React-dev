export const App = () => {
  const onClickButton = () => {
    alert("ボタン");
  };
  const contentStyle = {
    color: "red",
    fontSize: "20px",
  };
  return (
    <>
      <h1 style={contentStyle}>こんにちは！</h1>
      <p>お元気ですか</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
