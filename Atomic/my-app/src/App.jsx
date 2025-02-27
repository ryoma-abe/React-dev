import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/orgnism/user/UserCard";

export const App = () => {
  const WrapperStyle = {
    maxWidth: "800px",
    marginInline: "auto",
  };

  const user = {
    image: "https://picsum.photos/1920/1080",
    name: "太郎",
    TEL: "001-000000000",
    mail: "っっっｓ@icloud.com",
    company: "hogehoge株式会社",
    web: "https://hogehoge.com",
  };
  return (
    <div style={WrapperStyle}>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <br />
      <UserCard user={user} />
      <SearchInput />
    </div>
  );
};
