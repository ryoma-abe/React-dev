import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { List } from "../atoms/List";

export const InputArea = () => {

  const onClickAdd = () => {
    // alert(setIncompleteTodos);
  };
  return (
    <div className="max-w-4xl mx-auto text-center py-10 flex">
      <Input placeholder={"Todoを入力してください"} />
      <Button onClickFn={onClickAdd}>送信する</Button>
    </div>
  );
};
