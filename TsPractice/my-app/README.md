# React × TypeScript 実践ガイド

このガイドでは、React と TypeScript を組み合わせた実践的な開発テクニックを紹介します。型安全な React アプリケーション開発のための知識とスキルを身につけましょう。

## 目次

1. [環境構築](#環境構築)
2. [TypeScript がバグを防ぐ仕組み](#typeScriptがバグを防ぐ仕組み)
3. [型定義の基本](#型定義の基本)
4. [コンポーネントの型定義](#コンポーネントの型定義)
   - [Props 型定義の方法](#props型定義の方法)
   - [Omit を使った型定義](#omitを使った型定義)
   - [FC を使った型定義](#fcを使った型定義)
5. [型定義の管理方法](#型定義の管理方法)
6. [高度な型操作（ユーティリティタイプ）](#高度な型操作ユーティリティタイプ)
7. [Null 安全なコード](#null安全なコード)
8. [ライブラリの型定義](#ライブラリの型定義)
9. [実践的なコード例：Todo リスト](#実践的なコード例todoリスト)
10. [学習のポイント](#学習のポイント)
11. [初心者向けアドバイス](#初心者向けアドバイス)
12. [参考リソース](#参考リソース)

## 環境構築

TypeScript 対応の React プロジェクトを作成する方法：

```bash
# TypeScript対応のReactプロジェクトを作成
npx create-react-app my-app --template typescript

# 既存のプロジェクトにTypeScriptを追加
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

基本的な`tsconfig.json`の設定例：

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

## TypeScript がバグを防ぐ仕組み

TypeScript を使わないと発生しがちなバグの例と、型安全に書き直した例：

```javascript
// JavaScriptでのバグが起きやすいコード例
function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// 呼び出し元
const result = calculateTotal(products); // productsがnullや適切なオブジェクト構造でない場合にランタイムエラー
```

```typescript
// TypeScriptで型安全にしたバージョン
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function calculateTotal(items: Product[]): number {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// 呼び出し元 - コンパイル時にエラーチェックできる
const result = calculateTotal(products);
```

## 型定義の基本

API レスポンスの型定義例：

```typescript
// APIレスポンスの型定義
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  registeredAt: Date;
  settings?: UserSettings; // オプショナルなプロパティ
}

interface UserSettings {
  theme: "light" | "dark"; // リテラル型の使用例
  notifications: boolean;
}

// API呼び出しとデータの使用
async function fetchUser(userId: number): Promise<User> {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();

  // JSONの日付文字列をDateオブジェクトに変換
  return {
    ...data,
    registeredAt: new Date(data.registeredAt),
  };
}
```

## コンポーネントの型定義

### Props 型定義の方法

```tsx
// 関数コンポーネントでのprops型定義
interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  children?: React.ReactNode;
}

function Button(props: ButtonProps) {
  const {
    text,
    onClick,
    color = "primary",
    disabled = false,
    children,
  } = props;

  return (
    <button
      onClick={onClick}
      className={`btn btn-${color}`}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
}
```

### Omit を使った型定義

```tsx
interface TodoType {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

// TodoTypeからidプロパティを除外したPropsを使用するコンポーネント
export const TodoItem = ({
  title,
  userId,
  completed = false,
}: Omit<TodoType, "id">) => {
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザーID:${userId})`}</p>;
};
```

### FC を使った型定義

```tsx
import React from "react";

// FCを使用したコンポーネント定義
interface GreetingProps {
  name: string;
  age?: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age !== undefined && <p>You are {age} years old.</p>}
    </div>
  );
};
```

**Omit と直接型定義 vs FC 型定義の違い**

1. **Omit と直接型定義**:

   - プロパティ（props）の型を定義するためのもの
   - 既存の型から特定のプロパティを除外した新しい型を作成
   - より柔軟で明示的な型定義が可能

2. **FC（Function Component）型**:
   - コンポーネント自体の型定義
   - React 関数コンポーネントであることを示す
   - 以前は`children`プロパティが自動で含まれていたが、React 18 以降では明示的に定義が必要

現在の React 開発では、`FC`型よりも直接型アノテーションやユーティリティタイプ（`Omit`など）を使用する方法が主流になっています。

## 型定義の管理方法

型定義を効率的に管理するためのファイル構成例：

```tsx
// src/types/index.ts - 型定義をまとめたファイル
export * from "./user";
export * from "./product";
export * from "./order";

// src/types/user.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

// コンポーネントでの利用
import { User } from "../types";

function UserProfile({ user }: { user: User }) {
  return <div>{user.name}</div>;
}
```

## 高度な型操作（ユーティリティタイプ）

TypeScript の便利なユーティリティタイプ：

```typescript
// 基本となる型
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
  created: Date;
}

// Omit: 特定のプロパティを除外する
type UserWithoutId = Omit<User, "id">;

// Pick: 特定のプロパティだけを選択する
type UserCredentials = Pick<User, "email" | "role">;

// Partial: すべてのプロパティをオプショナルにする
type PartialUser = Partial<User>;

// Required: すべてのプロパティを必須にする
type RequiredUser = Required<User>;

// Readonly: すべてのプロパティを読み取り専用にする
type ReadonlyUser = Readonly<User>;

// Record: 指定されたプロパティのマップ型を作成する
type UserRoleMap = Record<"admin" | "user" | "guest", User[]>;
```

実践的な活用例：

```tsx
// ユーザーの詳細表示用コンポーネント
const UserProfile: React.FC<User> = (props) => {
  // すべてのプロパティを必要とする
  return <div>...</div>;
};

// ユーザー作成フォーム用のコンポーネント
const UserCreateForm: React.FC<Omit<User, "id" | "created">> = (props) => {
  // id と created は自動生成するのでフォームからは除外
  return <form>...</form>;
};

// ユーザー編集フォーム用のコンポーネント
const UserEditForm: React.FC<Partial<User> & { id: number }> = (props) => {
  // id は必須だが、他のフィールドは任意で更新可能
  return <form>...</form>;
};
```

## Null 安全なコード

オプショナルチェイニング演算子（?.）を活用した例：

```tsx
interface Address {
  street: string;
  city: string;
  postalCode: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address?: Address;
  phoneNumbers?: string[];
}

function UserProfile({ user }: { user: User | null }) {
  return (
    <div>
      <h1>{user?.name ?? "Unknown User"}</h1>
      <p>Email: {user?.email}</p>

      {/* ネストされたプロパティへの安全なアクセス */}
      {user?.address && (
        <div>
          <p>
            Address: {user.address.street}, {user.address.city}{" "}
            {user.address.postalCode}
          </p>
        </div>
      )}

      {/* 配列の安全な操作 */}
      {user?.phoneNumbers?.length > 0 && (
        <div>
          <p>Phone Numbers:</p>
          <ul>
            {user.phoneNumbers.map((phone, index) => (
              <li key={index}>{phone}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
```

## ライブラリの型定義

サードパーティライブラリの型定義のインストール：

```bash
# ライブラリの型定義をインストール
npm install --save-dev @types/react-router-dom
```

型定義がないライブラリに対する独自の型定義ファイル：

```typescript
// my-lib.d.ts
declare module "untyped-module" {
  export interface Options {
    timeout?: number;
    retries?: number;
  }

  export function initialize(options?: Options): void;
  export function process(data: any): Promise<any>;

  // デフォルトエクスポートの場合
  const defaultExport: {
    initialize: typeof initialize;
    process: typeof process;
  };

  export default defaultExport;
}
```

## 実践的なコード例：Todo リスト

TypeScript と React を使用した簡単な Todo リストアプリケーション：

```tsx
// src/types/todo.ts
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "REMOVE_TODO"; id: number };

// src/components/TodoList.tsx
import React, { useReducer } from "react";
import { Todo, TodoAction } from "../types/todo";

const initialTodos: Todo[] = [];

function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const TodoList: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [text, setText] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", text });
      setText("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
            />
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

## 学習のポイント

- TypeScript による型安全な React アプリケーション開発の基礎を理解する
- コンパイル時のエラーチェックによるバグの早期発見
- IDE のコード補完機能を活用した開発効率の向上
- ユーティリティタイプを活用した柔軟な型設計
- コードの可読性と保守性の向上
- チーム開発におけるコミュニケーションコストの削減

## 初心者向けアドバイス

- JavaScript の基本を理解してから TypeScript に取り組むことをお勧めします
- 最初は厳格な型定義にこだわらず、`any`型を使いながら徐々に型付けを学んでいきましょう
- エラーメッセージをしっかり読むことで、TypeScript の理解が深まります
- 公式ドキュメントやコミュニティの例を参考にすることで、ベストプラクティスを学べます
- 小さなプロジェクトから始めて、徐々に複雑な型定義に挑戦していきましょう

## 参考リソース

- [TypeScript 公式ドキュメント](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
