import { useState } from "react";

export const Input = ({ placeholder }) => {
  const [inputText, setInputText] = useState("テキスト");
  const onChangeInputText = (e) => {
    setInputText.apply(e.target.value);
  };
  return (
    <input
      className="border p-2 w-full"
      type="text"
      placeholder={placeholder}
      value={inputText}
      onChange={onChangeInputText}
    />
  );
};
