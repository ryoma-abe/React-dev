import "./App.css";
import axios from "axios";

function App() {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((r) => {
      console.log(r.data);
    });
  };
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users?id=1").then((r) => {
      console.log(r.data);
    });
  };
  return (
    <>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1</button>
    </>
  );
}

export default App;
