React 基本構文のまとめに useEffect の説明を追加します。

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

## useEffect の基本

useEffect は副作用を扱うためのフックです。

```jsx
import { useState, useEffect } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // マウント時のみ実行（空の依存配列）
  useEffect(() => {
    console.log("マウント時のみ実行");
  }, []);

  // 特定の値（count）が変更されたときに実行
  useEffect(() => {
    if (count > 0) {
      console.log(`カウントが${count}に更新されました`);
    }
  }, [count]);

  // 毎レンダリング時に実行（依存配列なし）
  useEffect(() => {
    console.log("レンダリングされました");
  });

  // クリーンアップ関数の例
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("1秒経過");
    }, 1000);

    // クリーンアップ関数（アンマウント時やre-render前に実行）
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};
```

### useEffect の主な使用例

1. **データフェッチング**

   ```jsx
   useEffect(() => {
     const fetchData = async () => {
       const response = await fetch("https://api.example.com/data");
       const data = await response.json();
       setData(data);
     };
     fetchData();
   }, []); // マウント時のみデータを取得
   ```

2. **イベントリスナーの設定と解除**

   ```jsx
   useEffect(() => {
     const handleResize = () => {
       setWindowWidth(window.innerWidth);
     };
     window.addEventListener("resize", handleResize);

     // クリーンアップ関数
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);
   ```

3. **ローカルストレージの操作**
   ```jsx
   useEffect(() => {
     localStorage.setItem("count", count.toString());
   }, [count]); // countが変更されるたびに保存
   ```

特徴:

- Props は親コンポーネントから子コンポーネントへの一方通行のデータフロー
- useState を使用することで、コンポーネント内で状態を管理可能
- useEffect を使用することで、副作用（API コール、購読、DOM の手動変更など）を制御可能
- 状態が更新されると、関連するコンポーネントが自動的に再レンダリング
- Props、State ともに、データの不変性を保つことが重要
