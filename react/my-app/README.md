# React 基本構文のまとめ

## アプリケーションのルート設定

```jsx
// index.jsなどのエントリーポイント
import { createRoot } from "react-dom/client";

// rootとなる要素を取得
const rootElement = document.querySelector("root");

// createRootでReactのルートを作成
const root = createRoot(rootElement);

// アプリケーションをレンダリング
root.render();
```

## Props の基本

Props はコンポーネント間でデータを受け渡すための仕組みです。

```jsx
// 親コンポーネント
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  return <ColorfulMessage color="blue" message="こんにちは" />;
};

// 子コンポーネント (ColorfulMessage.jsx)
export const ColorfulMessage = (props) => {
  // propsから値を取り出す
  const { color, message } = props;

  return <p style={{ color: color }}>{message}</p>;
};
```

## State の基本

```jsx
import { useState } from "react";

export const App = () => {
  // 状態の初期値を0に設定
  const [num, setNum] = useState(0);

  // 状態を更新する関数
  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <p>{num}</p>
      <button onClick={onClickButton}>カウントアップ</button>
    </div>
  );
};
```

特徴:

- Props は親コンポーネントから子コンポーネントへの一方通行のデータフロー
- useState を使用することで、コンポーネント内で状態を管理可能
- 状態が更新されると、関連するコンポーネントが自動的に再レンダリング
- Props、State ともに、データの不変性を保つことが重要
