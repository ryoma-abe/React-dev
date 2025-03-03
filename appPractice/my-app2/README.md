# React コンポーネントの実装におけるよくある問題と解決策

## 1. コンポーネント間のデータ共有 (Context API)

### 問題点

- Context の作成と使用方法に関する誤り
- Provider の実装方法の間違い
- コンテキストとプロバイダーの混同

### 正しい実装方法

```jsx
// 1. コンテキストの作成
import { createContext } from "react";
export const ListContext = createContext({});

// 2. プロバイダーコンポーネントの実装
export const ListProvider = ({ children }) => {
  const [incompleteTodos, setIncompleteTodos] = useState(["テストTodo"]);

  return (
    <ListContext.Provider
      value={{
        incompleteTodos,
        setIncompleteTodos,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

// 3. アプリケーションでのプロバイダーの使用
export const App = () => {
  return (
    <ListProvider>
      <Default>
        <InputArea />
        <ButtonArea />
        <List />
      </Default>
    </ListProvider>
  );
};

// 4. コンテキストの使用
export const List = () => {
  const { incompleteTodos } = useContext(ListContext);
  // ...
};
```

### 重要なポイント

- Context は値を保持するためのオブジェクト、Provider はその値を提供するコンポーネント
- `value`プロパティを通じて Context の値を設定する
- Provider は`children`プロパティを受け取り、子コンポーネントをラップする

## 2. ステート管理と更新

### 問題点

- ステート更新関数の誤った使用方法
- 不変性の原則に従わない更新

### 正しい実装方法

```jsx
// 不変性を保ちながら配列を更新
const onClickAdd = () => {
  if (inputText === "") return;

  // 新しい配列を作成して要素を追加
  const newIncompleteTodos = [...incompleteTodos, inputText];
  setIncompleteTodos(newIncompleteTodos);

  // 入力フィールドをクリア
  setInputText("");
};
```

### 重要なポイント

- React のステート更新関数は通常 1 つの引数のみを受け付ける
- オブジェクトや配列を更新する際は、コピーを作成してから変更を加える
- 空の入力などのエッジケースを考慮する

## 3. コンポーネント間の連携 (Props)

### 問題点

- プロパティ名の不一致
- プロパティの渡し忘れ
- コンポーネントのインターフェース設計の不備

### 正しい実装方法

```jsx
// 再利用可能なInputコンポーネントの設計
export const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      className="border p-2 w-full"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

// コンポーネントの使用
<Input
  placeholder={"Todoを入力してください"}
  value={inputText}
  onChange={onChangeInputText}
/>;
```

### 重要なポイント

- コンポーネントのインターフェースは一貫性を持たせる
- 制御されたコンポーネントでは`value`と`onChange`の両方を提供する
- プロパティが未指定の場合のフォールバック処理を考慮する

## 4. レイアウトとスタイリング

### 問題点

- フレックスボックスの誤った使用
- コンポーネントの配置が崩れる

### 正しい実装方法

```jsx
// 縦方向のレイアウト
<div className="max-w-4xl mx-auto text-center py-10 flex flex-col">
  <div className="flex mb-4">
    <Input placeholder={"Todoを入力してください"} />
    <Button>送信する</Button>
  </div>
  <List />
</div>
```

### 重要なポイント

- 適切なフレックスボックスの方向を指定する (`flex-col` vs `flex-row`)
- 子要素間の適切なマージンやギャップを設定する
- コンポーネントの配置を視覚的に確認する

## 5. 関数の実装

### 問題点

- `.apply()`などのメソッドの誤用
- イベントハンドラの実装ミス

### 正しい実装方法

```jsx
// 正しいイベントハンドラの実装
const onChangeInputText = (e) => {
  setInputText(e.target.value);
};
```

### 重要なポイント

- React のステート更新関数は直接呼び出す
- イベントオブジェクトから適切にプロパティを取得する
- 副作用を考慮し、関数の責務を明確にする
