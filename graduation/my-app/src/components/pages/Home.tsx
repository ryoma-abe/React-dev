import { FC, memo, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toast } from "../atoms/Toast";

export const Home: FC = memo(() => {
  const [showToast, setShowToast] = useState(true);

  // コンポーネントがマウントされたときに一度だけ実行される
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {showToast && <Toast message="ログインしました" />}
      <Outlet />
    </div>
  );
});
