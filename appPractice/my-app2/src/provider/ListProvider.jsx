import { useState } from "react";

import { createContext } from "react";
export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
  const [incompleteTodos, setIncompleteTodos] = useState(["テストTodo"]);
  const [completeTodos, setCompleteTodos] = useState([]);
  return (
    <ListContext.Provider
      value={{
        incompleteTodos,
        setIncompleteTodos,
        completeTodos,
        setCompleteTodos,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
