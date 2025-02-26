import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { BaseInput } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <div>
      <BaseInput placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
};
