import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export const InputArea = () => {
  return (
    <div className="max-w-4xl mx-auto text-center p-10">
      <Input placeholder={"Todoを入力してください"} />
      <Button>送信する</Button>
    </div>
  );
};
