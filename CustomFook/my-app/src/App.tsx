import "./App.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

function App() {
  const { getUsers, userProfile, loading, error } = useAllUsers();
  const onClickUser = () => getUsers();
  return (
    <>
      <button onClick={onClickUser} className="border bg-blue-400 p-10 m-10">
        データ取得
      </button>
      <br />
      {error ? (
        <p>データ取得に失敗しました</p>
      ) : loading ? (
        <p>loading</p>
      ) : (
        <div className="flex flex-col gap-7">
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
