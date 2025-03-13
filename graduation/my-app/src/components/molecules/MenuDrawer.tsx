import { FC } from "react";
import { Link } from "react-router-dom";

type MenuDrawerType = {
  menuOpen: boolean;
};

export const MenuDrawer: FC<MenuDrawerType> = ({ menuOpen }) => {
  return (
    <nav
      className={`
  flex 
  flex-col 
  gap-2 
  mt-4
  md:flex-row 
  md:gap-4 
  md:justify-center 
  md:mt-0
  ${menuOpen ? "block" : "hidden md:flex"}
`}
    >
      <Link to="/" className="px-3 py-2 hover:bg-gray-200 rounded text-center">
        ログイン
      </Link>
      <Link
        to="/home"
        className="px-3 py-2 hover:bg-gray-200 rounded text-center"
      >
        ホーム
      </Link>
      <Link
        to="/home/setting"
        className="px-3 py-2 hover:bg-gray-200 rounded text-center"
      >
        設定
      </Link>
      <Link
        to="/home/userManagement"
        className="px-3 py-2 hover:bg-gray-200 rounded text-center"
      >
        ユーザー
      </Link>
    </nav>
  );
};
