import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <nav className="flex gap-4 justify-center">
        <Link to="/" className="px-3 py-2 hover:bg-gray-200 rounded">ホーム</Link>
        <Link to="/login" className="px-3 py-2 hover:bg-gray-200 rounded">ログイン</Link>
        <Link to="/setting" className="px-3 py-2 hover:bg-gray-200 rounded">設定</Link>
        <Link to="/userManagement" className="px-3 py-2 hover:bg-gray-200 rounded">ユーザー</Link>
      </nav>
    </header>
  );
};
