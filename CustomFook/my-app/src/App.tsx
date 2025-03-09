import "./App.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "じゃけぇ",
  email: "aasadad@.com",
  address: "address",
};

function App() {
  return (
    <>
      <UserCard user={user} />
    </>
  );
}

export default App;
