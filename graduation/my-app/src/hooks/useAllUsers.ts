import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users/")
      .then((res) => setUsers(res.data))
      .catch(() => {
        alert("ユーザーが取得出来ませんでした。");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getUsers, loading, users, setUsers };
};
