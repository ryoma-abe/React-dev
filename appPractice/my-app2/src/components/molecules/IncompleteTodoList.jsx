import { useContext } from "react";
import { ListContext } from "../../provider/ListProvider";
import { Button } from "../atoms/Button";

export const IncompleteTodoList = () => {
  const {
    incompleteTodos,
    setIncompleteTodos,
    completeTodos,
    setCompleteTodos,
  } = useContext(ListContext);
  const onClickComplete = (index) => {
    const NewInCompleteTodos = [...incompleteTodos];
    NewInCompleteTodos.splice(index, 1);
    setIncompleteTodos(NewInCompleteTodos);
    const NewCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(NewCompleteTodos);
  };
  const onClickDelete = (index) => {
    const NewInCompleteTodos = [...incompleteTodos];
    NewInCompleteTodos.splice(index, 1);
    setIncompleteTodos(NewInCompleteTodos);
  };
  return (
    <>
      <ul className="mt-10 w-full flex flex-col gap-2">
        {incompleteTodos.map((todo, index) => (
          <li
            key={index}
            className="bg-gray-200 p-3 flex justify-between items-center"
          >
            {todo}
            <div className="flex gap-4">
              <Button onClickFn={() => onClickComplete(index)}>完了</Button>
              <Button onClickFn={() => onClickDelete(index)}>削除</Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
