import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { useContext, useState } from "react";
import { ListContext } from "../../provider/ListProvider";

export const InputArea = () => {
  const [inputText, setInputText] = useState("テキスト");
  const onChangeInputText = (e) => {
    setInputText(e.target.value);
  };

  const { incompleteTodos, setIncompleteTodos } = useContext(ListContext);

  const onClickAdd = () => {
    if (inputText === "") return;
    const newIncompleteTodos = [...incompleteTodos, inputText];
    setIncompleteTodos(newIncompleteTodos);
    setInputText("");
  };
  return (
    <div className="max-w-4xl mx-auto text-center py-10 flex">
      <Input
        placeholder={"Todoを入力してください"}
        inputText={inputText}
        onChangeInputText={onChangeInputText}
      />
      <Button onClickFn={onClickAdd}>送信する</Button>
    </div>
  );
};
