import { Button } from "../atoms/Button";

export const ButtonArea = () => {
  return (
    <div className="w-full flex gap-2">
      <Button>すべて</Button>
      <Button>未完了のTodo</Button>
      <Button>完了のTodo</Button>
    </div>
  );
};
