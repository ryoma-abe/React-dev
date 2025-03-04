import { useContext } from "react";
import { ListContext } from "../../provider/ListProvider";
import { Button } from "../atoms/Button";

export const CompleteTodoList = () => {
  const {
    incompleteTodos,
    setIncompleteTodos,
    completeTodos,
    setCompleteTodos,
  } = useContext(ListContext);
  const onClickReverse = (index) => {
    const NewCompleteTodos = [...completeTodos];
    NewCompleteTodos.splice(index, 1);
    setCompleteTodos(NewCompleteTodos);
    const NewInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(NewInCompleteTodos);
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
              <Button onClickFn={() => onClickReverse(index)}>戻す</Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
