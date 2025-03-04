import { useContext } from "react";
import { ListContext } from "../../provider/ListProvider";
import { Button } from "../atoms/Button";

export const CompleteTodoList = () => {
  const { completeTodos, setIncompleteTodos } = useContext(ListContext);
  const onClickReverse = () => {
    alert();
  };
  return (
    <>
      <ul className="mt-10 w-full flex flex-col gap-2">
        {completeTodos.map((todo, index) => (
          <li
            key={index}
            className="bg-gray-200 p-3 flex justify-between items-center"
          >
            {todo}
            <div className="flex gap-4">
              <Button onClickFn={onClickReverse}>戻す</Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
