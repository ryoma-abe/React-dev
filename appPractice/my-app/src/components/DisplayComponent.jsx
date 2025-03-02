import { useContext } from "react";
import { CountContext } from "../provider/CountProvider";

export const DisplayComponent = () => {
  const { countUp} = useContext(CountContext);

  return <p>{countUp}</p>;
};
