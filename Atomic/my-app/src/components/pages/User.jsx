import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../orgnism/user/UserCard";
import { useLocation } from "react-router-dom";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://picsum.photos/1920/1080",
    name: "太郎",
    TEL: "001-000000000",
    mail: "っっっｓ@icloud.com",
    company: "hogehoge株式会社",
    web: "https://hogehoge.com",
  };
});

export const User = () => {
  const location = useLocation();
  const { state } = location;
  const isAdmin = state ? state.isAdmin : false;

  return (
    <Scontainer>
      <h2>User一覧です</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} isAdmin={isAdmin}/>
      ))}
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
  padding: 30px;
`;
