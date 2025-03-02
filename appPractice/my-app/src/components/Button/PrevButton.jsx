import { BaseButton } from "./BaseButton";
import { useContext } from "react";
import { CountContext } from "../../provider/CountProvider";
export const PrevButton = () => {
  const { countUp, setCountUp } = useContext(CountContext);

  const onClickPrev = () => {
    setCountUp(countUp - 1);
  };
  return <BaseButton onClickFn={onClickPrev}>減らす</BaseButton>;
};
