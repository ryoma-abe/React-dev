import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuButton } from "../../atoms/button/MenuButton";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-100 p-4 shadow-md">
      {/* モバイル用のハンバーガーメニュー表示/非表示ボタン */}
      <div className="text-lg font-bold">ユーザー管理アプリ</div>
      <MenuButton toggleMenu={toggleMenu} menuOpen={menuOpen} />

      {/* モバイル用のメニュー（開閉可能） */}
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
        <Link
          to="/"
          className="px-3 py-2 hover:bg-gray-200 rounded text-center"
        >
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
    </header>
  );
};
