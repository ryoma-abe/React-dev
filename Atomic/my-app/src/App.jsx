import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";

export const App = () => {
  const WrapperStyle = {
    maxWidth: "800px",
    marginInline: "auto",
  };
  return (
    <div style={WrapperStyle}>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <br />
      <SearchInput />
    </div>
  );
};
