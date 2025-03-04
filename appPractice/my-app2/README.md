この画像は React の状態管理に関する学習コンテンツのセクション 7「グローバルな state 管理を知る」の目次を表示しています。これに基づいて、初心者向けに Recoil での状態管理実践（セクション 42）の内容を予測してみます。

# Recoil での状態管理実践

Recoil は、Facebook（現 Meta）が開発した React 向けの状態管理ライブラリです。セクション 41 では Recoil の基本的な紹介があり、このセクション 42 では実際に Recoil を使った実装を行うと思われます。以下に予想される内容をまとめました。

## 予想される内容

### 1. Recoil の基本セットアップ

```jsx
// RecoilRootでアプリをラップする
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <YourApp />
    </RecoilRoot>
  );
}
```

### 2. atom の定義と使用方法

atom は Recoil の最小単位の状態です。

```jsx
// atomの定義
import { atom, useRecoilState } from "recoil";

const counterState = atom({
  key: "counterState", // ユニークなID
  default: 0, // 初期値
});

// コンポーネントでの使用
function Counter() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>増加</button>
    </div>
  );
}
```

### 3. 読み取り専用の状態取得（useRecoilValue）

```jsx
import { useRecoilValue } from "recoil";

function DisplayCounter() {
  const count = useRecoilValue(counterState);

  return <div>現在のカウント: {count}</div>;
}
```

### 4. 書き込み専用の状態更新（useSetRecoilState）

```jsx
import { useSetRecoilState } from "recoil";

function CounterButtons() {
  const setCount = useSetRecoilState(counterState);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
      <button onClick={() => setCount(0)}>リセット</button>
    </div>
  );
}
```

### 5. selector による派生状態の作成

複数の atom から計算された状態を作成します。

```jsx
import { selector, useRecoilValue } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

const todoStatsState = selector({
  key: "todoStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const completedNum = todoList.filter((item) => item.isComplete).length;
    const uncompletedNum = totalNum - completedNum;

    return {
      totalNum,
      completedNum,
      uncompletedNum,
      percentCompleted: totalNum === 0 ? 0 : (completedNum / totalNum) * 100,
    };
  },
});

function TodoStats() {
  const { totalNum, completedNum, percentCompleted } =
    useRecoilValue(todoStatsState);

  return (
    <div>
      <p>タスク数: {totalNum}</p>
      <p>完了: {completedNum}</p>
      <p>完了率: {percentCompleted.toFixed(1)}%</p>
    </div>
  );
}
```

### 6. 非同期データ取得（実践的な例）

```jsx
const userInfoQuery = selectorFamily({
  key: "userInfoQuery",
  get: (userId) => async () => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    return response.json();
  },
});

function UserInfo({ userId }) {
  const userInfo = useRecoilValue(userInfoQuery(userId));

  return (
    <div>
      <h2>{userInfo.name}</h2>
      <p>Email: {userInfo.email}</p>
    </div>
  );
}
```

### 7. Recoil の実践的なプロジェクト構成

```
src/
├── atoms/
│   ├── counterAtom.js
│   ├── todoAtom.js
│   └── userAtom.js
├── selectors/
│   ├── todoSelectors.js
│   └── userSelectors.js
└── components/
    ├── Counter.jsx
    ├── TodoList.jsx
    └── UserProfile.jsx
```

## まとめ

Recoil は、React の状態管理において以下のメリットを提供します：

1. シンプルな API 設計（React の`useState`に似ている）
2. アトミックな状態管理（小さな単位で状態を分割できる）
3. 派生状態の簡単な計算（selector）
4. 非同期データフェッチのサポート
5. React の最新機能との互換性

このセクションでは、実際のプロジェクトを通じて Recoil の使い方を学び、従来の Redux などと比較してコードがどのようにシンプルになるかを体験できるでしょう。
