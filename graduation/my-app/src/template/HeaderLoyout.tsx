import { FC } from "react";
import { Header } from "../components/oganisms/loyout/Header";
import { Outlet, useLocation } from "react-router-dom"; // useLocation を追加

export const HeaderLoyout: FC = () => {
  const location = useLocation(); // location オブジェクトを取得
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Header />}
      <Outlet />
    </>
  );
};
