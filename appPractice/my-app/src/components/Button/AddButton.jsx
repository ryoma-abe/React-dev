import { BaseButton } from "./BaseButton";
import { useContext } from "react";
import { CountContext } from "../../provider/CountProvider";
export const AddButton = () => {
  const { countUp, setCountUp } = useContext(CountContext);

  const onClickAdd = () => {
    setCountUp(countUp + 1);
  };
  return <BaseButton onClickFn={onClickAdd}>増加する</BaseButton>;
};
