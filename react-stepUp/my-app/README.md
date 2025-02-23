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