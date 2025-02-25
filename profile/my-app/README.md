# React Router v6 完全ガイド - 改訂版

## 1. React Router の導入と基本設定

インストール方法:

```bash
npm install react-router-dom
```

基本的なセットアップ:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 2. 基本的なページ遷移

ページ間の移動には `Link` コンポーネントを使用します:

```jsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">ホーム</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

## 3. ネストされたルーティング

v6 では、ネストされたルーティングが簡単に実装できます:

```jsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// 親レイアウトコンポーネント内で子ルートの表示位置を指定
function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* 子ルートがここに表示される */}
      </main>
      <Footer />
    </>
  );
}

// 子ルートも同様に自分の子要素を表示できる
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>会社情報...</p>
      <Outlet /> {/* Team コンポーネントがここに表示される */}
    </div>
  );
}
```

## 4. 別々のコンポーネントとして定義（非ネスト）

ネストせずに別々のページとして定義することもできます:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/team" element={<Team />} /> {/* 独立したルート */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
```

ネストとフラットなルート構造のどちらを選ぶかは、UI の構造とデータの共有によります。共通のレイアウトや親子関係がない場合は、フラットな構造が適しています。

## 5. URL パラメータの取得

URL パラメータを使用して動的なルーティングを実装できます:

```jsx
// App.jsx
<Route path="/users/:userId" element={<UserDetail />} />;

// UserDetail.jsx
import { useParams } from "react-router-dom";

function UserDetail() {
  const { userId } = useParams();
  return <div>ユーザーID: {userId}</div>;
}
```

## 6. クエリパラメータの取得と設定

URL 内のクエリパラメータ（?name=value）を扱います:

```jsx
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const sort = searchParams.get("sort") || "asc";

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setSearchParams({ q: e.target.value, sort })}
      />
      <select
        value={sort}
        onChange={(e) => setSearchParams({ q: query, sort: e.target.value })}
      >
        <option value="asc">昇順</option>
        <option value="desc">降順</option>
      </select>
    </div>
  );
}
```

## 7. データをルート間で渡す方法

### Link を使用する場合

```jsx
import { Link } from "react-router-dom";

function ProductList() {
  const products = [
    { id: 1, name: "商品A" },
    { id: 2, name: "商品B" },
  ];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`} state={{ productData: product }}>
            {product.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
```

### プログラム的なナビゲーションの場合

```jsx
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "商品A" },
    { id: 2, name: "商品B" },
  ];

  const handleClick = (product) => {
    navigate(`/products/${product.id}`, { state: { productData: product } });
  };

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <button onClick={() => handleClick(product)}>{product.name}</button>
        </li>
      ))}
    </ul>
  );
}
```

### データの受け取り方

```jsx
import { useLocation, useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const location = useLocation();
  const { productData } = location.state || {};

  return (
    <div>
      <h1>商品詳細</h1>
      <p>商品ID: {productId}</p>
      {productData ? (
        <p>商品名: {productData.name}</p>
      ) : (
        <p>商品情報がありません</p>
      )}
    </div>
  );
}
```

**注意**: `location.state` は、ブラウザのリロードや新しいタブで開いた場合には失われます。永続的なデータ保存には向いていません。

## 8. プログラムによるナビゲーション（useNavigate）

フォーム送信後やボタンクリック時など、ユーザーアクションに応じて、コードでページ遷移を行う方法:

```jsx
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginUser(username, password);

    if (success) {
      // ダッシュボードへ遷移
      navigate("/dashboard");
    }
  };

  return <form onSubmit={handleSubmit}>{/* フォーム要素 */}</form>;
}
```

履歴を置き換える（戻るボタンで前のページに戻れなくする）:

```jsx
navigate("/dashboard", { replace: true });
```

## 9. 戻るボタンの実装

履歴の一つ前のページに戻るボタンを実装する方法:

```jsx
import { useNavigate } from "react-router-dom";

function DetailPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 履歴の1つ前に戻る
  };

  return (
    <div>
      <h1>詳細ページ</h1>
      <button onClick={handleGoBack}>戻る</button>
    </div>
  );
}
```

数値引数:

- `-1`: 履歴の 1 つ前に戻る
- `1`: 履歴の 1 つ先に進む (「戻る」の後の「進む」)
- `-2`: 履歴の 2 つ前に戻る

## 10. 404 ページの設定

存在しないルートへのアクセスを処理します:

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 他のルート */}

        {/* 最後に配置: どのルートにもマッチしなかった場合に表示 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - ページが見つかりません</h1>
      <Link to="/">ホームへ戻る</Link>
    </div>
  );
}
```

## 11. アクティブなリンクのスタイリング

現在のルートに基づいてナビゲーションリンクのスタイルを変更できます:

```jsx
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        ホーム
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        About
      </NavLink>
    </nav>
  );
}
```

CSS:

```css
.active-link {
  font-weight: bold;
  color: blue;
}
```

## 12. ルートの保護（認証が必要なルート）

認証が必要なルートを実装する方法:

```jsx
import { Navigate, Outlet } from "react-router-dom";

// 認証状態を確認するカスタムフック（例）
function useAuth() {
  return { user: localStorage.getItem("user") };
}

function ProtectedRoutes() {
  const { user } = useAuth();

  // 認証されていない場合はログインページにリダイレクト
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 認証済みの場合は子ルートを表示
  return <Outlet />;
}

// Appコンポーネント内での使用
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* 保護されたルート */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
```

## 13. ルート定義の分割（大規模アプリケーション向け）

大規模なアプリケーションでは、ルート定義を分割すると管理が容易になります:

```jsx
// routes/index.jsx
import { createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./mainRoutes";
import { authRoutes } from "./authRoutes";
import { adminRoutes } from "./adminRoutes";

export const router = createBrowserRouter([
  ...mainRoutes,
  ...authRoutes,
  ...adminRoutes,
]);

// routes/mainRoutes.jsx
import { RootLayout } from "../layouts/RootLayout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const mainRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
];

// App.jsx
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}
```

## 14. データローディングの最適化

React Router v6.4 以降は、ルートローダーを使ってデータのフェッチを最適化できます:

```jsx
// routes.jsx
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "users",
        element: <Users />,
        loader: async () => {
          const res = await fetch("/api/users");
          return res.json();
        },
      },
    ],
  },
]);

// Users.jsx
import { useLoaderData } from "react-router-dom";

function Users() {
  const users = useLoaderData();

  return (
    <div>
      <h1>ユーザー一覧</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 15. バージョン間の主な違い

React Router v5 と v6 の主な違い：

| 機能               | v5                         | v6                           |
| ------------------ | -------------------------- | ---------------------------- |
| ルート一致         | `<Switch>`                 | `<Routes>`                   |
| ルートネスト       | 複雑                       | シンプル（`<Outlet>`を使用） |
| パラメータアクセス | `useParams`                | 同じ（`useParams`）          |
| クエリパラメータ   | `useLocation` + クエリ解析 | `useSearchParams`            |
| プログラム的遷移   | `useHistory`               | `useNavigate`                |
| 戻るボタン         | `history.goBack()`         | `navigate(-1)`               |
| アクティブリンク   | `activeClassName` プロップ | `className` 関数プロップ     |
| データローディング | 自前で実装                 | ルートローダー（v6.4 以降）  |

## まとめ

React Router v6 は、以前のバージョンと比較してより宣言的でシンプルな API を提供しています。重要な違いを把握しておくことで、効率的なルーティングを実装できます。

- ネストしたルートが簡単になり、`Outlet`を使用して子ルートをレンダリング
- プログラムでのナビゲーションは`useNavigate`を使用し、前に戻るには`navigate(-1)`
- データ受け渡しには`state`プロパティを使用（ページリロードでは失われる点に注意）
- 大規模アプリでは`createBrowserRouter`を使ったルート定義の分割が便利
- v6.4 以降はデータローディングとフォーム処理の新 API が追加

このガイドを参考に、React Router を活用した快適なユーザー体験を提供しましょう。
