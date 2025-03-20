import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data && !Array.isArray(res.data)) {
            setLoginUser(res.data);
            navigate("/home");
          } else {
            alert();
          }
        })
        .catch(() => {
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 2000);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate]
  );
  return { login, loading, showToast };
};
