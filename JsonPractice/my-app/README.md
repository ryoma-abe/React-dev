# Axios 学習サンプル

このプロジェクトは React アプリケーションで Axios を使用して HTTP リクエストを行う基本的な使い方を示しています。

## 概要

このシンプルな React アプリケーションは以下の方法を示しています：

- Axios を使用して外部 API に GET リクエストを送信する
- API レスポンスを処理してコンソールにデータをログ出力する
- 全ユーザーの取得と、ID によるユーザーのフィルタリング

## コード例

メインコンポーネントには、異なる Axios リクエストをトリガーする 2 つのボタンが含まれています：

```jsx
import "./App.css";
import axios from "axios";

function App() {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((r) => {
      console.log(r.data);
    });
  };

  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users?id=1").then((r) => {
      console.log(r.data);
    });
  };

  return (
    <>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1</button>
    </>
  );
}

export default App;
```

## 機能

- **全ユーザーの取得**: JSONPlaceholder API から全ユーザー情報を取得
- **単一ユーザーの取得**: クエリパラメータを使用して ID=1 の特定のユーザーを取得

## 使用している API

このサンプルでは[JSONPlaceholder](https://jsonplaceholder.typicode.com/)を使用しています。これはテストやプロトタイピング用の無料のフェイク API です。

## 使い方

1. 依存関係をインストール：

   ```
   npm install axios
   ```

2. アプリケーションの実行：

   ```
   npm start
   ```

3. ボタンをクリックして、ブラウザのコンソールで API レスポンスを確認してください。

## 次のステップ

このサンプルをさらに発展させるためには：

- エラーハンドリングの追加
- POST、PUT、DELETE リクエストの実装
- コンソールにログ出力するだけでなく、UI にデータを表示する
- リクエスト中のローディング状態の追加

## 参考リンク

- [Axios ドキュメント](https://axios-http.com/docs/intro)
- [React ドキュメント](https://react.dev/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
