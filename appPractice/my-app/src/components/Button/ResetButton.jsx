import { BaseButton } from "./BaseButton";
import { useContext } from "react";
import { CountContext } from "../../provider/CountProvider";
export const ResetButton = () => {
  const { setCountUp } = useContext(CountContext);

  const onClickReset = () => {
    setCountUp(0);
  };
  return <BaseButton onClickFn={onClickReset}>リセット</BaseButton>;
};
