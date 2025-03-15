import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data && !Array.isArray(res.data)) {
            console.log(res.data);

            navigate("/home");
          } else {
            alert("ユーザーが見つかりません");
          }
        })
        .catch(() => {
          alert("ログイン出来ません");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate]
  );
  return { login, loading };
};
