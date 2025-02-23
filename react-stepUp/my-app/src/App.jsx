import { useState } from "react";
import "./App.css";

export const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);
  const onChangeText = (e) => setText(e.target.value);
  const isOpen = () => setOpen(!open);

  return (
    <>
      <input
        className="border px-4"
        type="text"
        placeholder="aaa"
        value={text}
        onChange={onChangeText}
      />
      <button
        className="mt-5 block w-fit px-10 mx-auto border"
        onClick={isOpen}
      >
        表示
      </button>
    </>
  );
};
