import { useState } from "react";
import { MenuButton } from "../../atoms/button/MenuButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-100 p-4 shadow-md fixed w-full">
      {/* モバイル用のハンバーガーメニュー表示/非表示ボタン */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">ユーザー管理アプリ</div>
        <MenuButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </div>
      <MenuDrawer menuOpen={menuOpen} />
    </header>
  );
};
