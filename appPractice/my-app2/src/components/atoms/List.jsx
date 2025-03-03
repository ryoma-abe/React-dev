import { useContext } from "react";
import { ListContext } from "../../provider/ListProvider";

export const List = () => {
  const { incompleteTodos } = useContext(ListContext);
  return (
    <>
      <ul className="mt-10 w-full flex flex-col gap-2">
        {incompleteTodos.map((todo, index) => (
          <li key={index} className="bg-gray-200 p-3">
            {todo}
          </li>
        ))}
      </ul>
    </>
  );
};
