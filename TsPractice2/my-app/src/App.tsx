import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const onclickAdd = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p className="text-center text-3xl p-10">{count}</p>
      <button onClick={onclickAdd} className="p-5 m-10 border">
        カウントアップ
      </button>
    </>
  );
}

export default App;
