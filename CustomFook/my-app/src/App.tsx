import axios from "axios";
import "./App.css";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import { useState } from "react";
import { UserProfile } from "./types/userProfile";

const user = {
  id: 1,
  name: "じゃけぇ",
  email: "aasadad@.com",
  address: "address",
};

function App() {
  const [userProfile, setUserProfile] = useState<Array<UserProfile>>([]);
  const onClickUser = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((r) => {
        const data = r.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUserProfile(data);
      });
  };
  return (
    <>
      <button onClick={onClickUser} className="border bg-blue-400 p-10 m-10">
        データ取得
      </button>
      {userProfile.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}

export default App;
