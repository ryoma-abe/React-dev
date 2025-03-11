import { FC } from "react";
import { Header } from "../components/oganisms/loyout/Header";
import { Outlet } from "react-router-dom";

export const HeaderLoyout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
