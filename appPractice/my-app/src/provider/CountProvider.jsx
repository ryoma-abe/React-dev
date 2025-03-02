import { useState } from "react";
import { createContext } from "react";
export const CountContext = createContext({});

export const CountProvider = ({ children }) => {
  const [countUp, setCountUp] = useState(0);

  return (
    <CountContext.Provider value={{ countUp, setCountUp }}>
      {children}
    </CountContext.Provider>
  );
};
