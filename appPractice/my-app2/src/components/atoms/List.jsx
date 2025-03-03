import { useContext } from "react";
import { ListContext } from "../../provider/ListProvider";
import { Button } from "./Button";

export const List = () => {
  const { incompleteTodos, setIncompleteTodos } = useContext(ListContext);
  const onClickComplete = () => {
    alert();
  };
  const onClickDelete = (index) => {
    const NewInCompleteTodos = [incompleteTodos];
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
              <Button onClickFn={onClickComplete}>完了</Button>
              <Button onClickFn={onClickDelete}>削除</Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
