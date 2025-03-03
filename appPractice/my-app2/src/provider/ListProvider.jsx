import { useState } from "react";
import { createContext } from "react";
export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
  const [incompleteTodos, setIncompleteTodos] = useState(["テストTodo"]);
  return (
    <ListContext.Provider value={{ incompleteTodos, setIncompleteTodos }}>
      {children}
    </ListContext.Provider>
  );
};
