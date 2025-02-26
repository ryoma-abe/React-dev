# React レンダリングの最適化

## 9. 再レンダリングが起きる条件

- state が変更された時
- props が変更された時
- 親コンポーネントが再レンダリングされた時
- context の値が変更された時

```jsx
function Child({ count }) {
  console.log("Child rendering"); // 親の再レンダリングで毎回実行される
  return <div>{count}</div>;
}

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <Child count={count} />
    </>
  );
}
```

## 10. memo による最適化

props が変更されない限り再レンダリングをスキップする

```jsx
const Child = memo(({ count }) => {
  console.log("Child rendering"); // props が変更された時のみ実行
  return <div>{count}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <>
      <button onClick={() => setOther((o) => o + 1)}>
        関係ない state の更新
      </button>
      <Child count={count} /> {/* other が変更されても再レンダリングされない */}
    </>
  );
}
```

## 11. useCallback による最適化

関数の再生成を防ぎ、子コンポーネントの不要な再レンダリングを防ぐ

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  // 毎回新しい関数が作られる
  const badHandler = () => {
    setCount((c) => c + 1);
  };

  // 依存配列が変更されない限り同じ関数を使い回す
  const goodHandler = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // 空の依存配列なので初回レンダリング時のみ作成

  return (
    <Child onClick={goodHandler} /> // memo化された Child は再レンダリングされない
  );
}

const Child = memo(({ onClick }) => {
  return <button onClick={onClick}>Click me</button>;
});
```

これらの最適化は以下の場合に特に効果的です：

- 大きなリストのレンダリング
- 複雑な計算を含むコンポーネント
- 頻繁に更新される親コンポーネントの子要素

ただし、過剰な最適化は逆にコードを複雑にする可能性があるため、パフォーマンスの問題が実際に発生している箇所にのみ適用することをお勧めします。

# React における様々な CSS 手法

## 13. Inline Styles

React 要素に直接スタイルを適用する手法

```jsx
function App() {
  return (
    <div
      style={{
        backgroundColor: "blue",
        padding: "20px",
        // キャメルケースで記述
        borderRadius: "8px",
      }}
    >
      Hello
    </div>
  );
}
```

## 14. CSS Modules

コンポーネントスコープの CSS を実現する

```css
/* Button.module.css */
.button {
  background: blue;
  color: white;
}

.primary {
  background: green;
}
```

```jsx
import styles from "./Button.module.css";

function Button() {
  return (
    <button className={`${styles.button} ${styles.primary}`}>Click me</button>
  );
}
```

## 15. Styled JSX

Next.js がデフォルトでサポートする CSS in JS

```jsx
function Button() {
  return (
    <>
      <button className="button">Click me</button>
      <style jsx>{`
        .button {
          background: blue;
          color: white;
        }
      `}</style>
    </>
  );
}
```

Vite での設定:

```bash
npm install styled-jsx
```

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["styled-jsx/babel"],
      },
    }),
  ],
});
```

## 16. styled-components

人気の CSS in JS ライブラリ

```bash
npm install styled-components
```

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "blue" : "white")};
  color: white;
  padding: 10px 20px;
`;

function App() {
  return <Button primary>Click me</Button>;
}
```

## 17. Emotion

柔軟な CSS in JS ソリューション

```bash
npm install @emotion/react @emotion/styled
```

```jsx
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const TextStyle = css`
  font-size: 100px;
  color: red;
`;

export const Child = ({ open }) => {
  return (
    <>
      <div>{open && <p css={TextStyle}>子コンポーネント</p>}</div>
    </>
  );
};
```

Vite での設定:

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
});
```

各アプローチの特徴:

- Inline Styles: 簡単だが、疑似クラスやメディアクエリが使えない
- CSS Modules: コンポーネントスコープで CSS が書ける
- Styled JSX: Next.js と相性が良い
- styled-components: 動的スタイリングが容易
- Emotion: パフォーマンスが良く、柔軟性が高い

# React Router

## 18. React Router バージョンの注意点

React Router はバージョンによって構文や機能が大きく異なります。バージョン 6 以降が最新で、最も推奨されています。このガイドでは v6 の文法を使用しています。

## 19. React Router 導入＆事前準備

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

## 20. 基本的なページ遷移

ページ間の移動には`Link`コンポーネントを使用します:

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

## 21. ネストされたページ遷移

ネストされたルーティングの実装:

```jsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// 親レイアウトコンポーネント
function Layout() {
  return (
    <>
      <header>ヘッダー</header>
      <Outlet /> {/* 子ルートがここにレンダリングされる */}
      <footer>フッター</footer>
    </>
  );
}
```

## 22. ルート定義の分割

大規模アプリケーションでのルーティング管理:

```jsx
// routes.jsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsLayout from "./layouts/ProductsLayout";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "products",
        element: <ProductsLayout />,
        children: [
          { index: true, element: <ProductList /> },
          { path: ":productId", element: <ProductDetail /> },
        ],
      },
    ],
  },
]);

// App.jsx
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}
```

## 23. URL パラメータを取る

動的な URL パラメータの利用:

```jsx
// URLパターン: /users/:userId
import { useParams } from "react-router-dom";

function UserDetail() {
  const { userId } = useParams();

  return <div>ユーザーID: {userId}</div>;
}
```

## 24. クエリパラメータを扱う

URL のクエリパラメータ（?name=value）の取得:

```jsx
// 例: /search?query=react&sort=asc
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const sort = searchParams.get("sort") || "desc";

  const handleSort = (newSort) => {
    setSearchParams({ query, sort: newSort });
  };

  return (
    <div>
      <p>検索クエリ: {query}</p>
      <p>並び順: {sort}</p>
      <button onClick={() => handleSort(sort === "asc" ? "desc" : "asc")}>
        並び順を変更
      </button>
    </div>
  );
}
```

## 25. state を渡すページ遷移

リンク間でステート（状態）を渡す方法:

```jsx
import { Link, useLocation } from "react-router-dom";

// 送信側
function ProductList() {
  const products = [
    { id: 1, name: "商品A", price: 1000 },
    { id: 2, name: "商品B", price: 2000 },
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

// 受信側
function ProductDetail() {
  const location = useLocation();
  const { productData } = location.state || {};

  return (
    <div>
      {productData ? (
        <>
          <h2>{productData.name}</h2>
          <p>価格: {productData.price}円</p>
        </>
      ) : (
        <p>商品情報がありません</p>
      )}
    </div>
  );
}
```

## 26. Link を使わないページ遷移

プログラム的にナビゲーションを行う方法:

```jsx
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ログイン処理...
    const success = await loginUser(username, password);

    if (success) {
      // ログイン成功時にダッシュボードへリダイレクト
      navigate("/dashboard", { replace: true });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* フォーム要素 */}
      <button type="submit">ログイン</button>
    </form>
  );
}
```

## 27. 404 ページを用意する

存在しないルートへのアクセス処理:

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 他のルート */}

        {/* 404ページ - 最後に配置 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは存在しないか、移動した可能性があります。</p>
      <Link to="/">ホームに戻る</Link>
    </div>
  );
}
```
