import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-100 p-4 shadow-md">
      {/* モバイル用のハンバーガーメニュー表示/非表示ボタン */}
      <div className="flex justify-between items-center md:hidden">
        <div className="text-lg font-bold">サイト名</div>
        <button onClick={toggleMenu} className="p-2 rounded hover:bg-gray-200">
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

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
