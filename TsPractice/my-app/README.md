# React × TypeScript 基礎編 具体的な型一覧

## 46. 基本的な型 (8 分)

### プリミティブ型

- `string`: 文字列型
  ```typescript
  const name: string = "TypeScript";
  ```
- `number`: 数値型（整数・小数点両方含む）
  ```typescript
  const age: number = 30;
  const price: number = 19.99;
  ```
- `boolean`: 真偽値型
  ```typescript
  const isActive: boolean = true;
  ```

### 特殊なプリミティブ型

- `null`: null 値の型
- `undefined`: undefined 値の型
- `symbol`: シンボル型
- `bigint`: 大きな整数を扱う型

### 配列型

- 配列の型指定（2 種類の書き方）

  ```typescript
  // 方法1: 型[]
  const numbers: number[] = [1, 2, 3];

  // 方法2: Array<型>
  const names: Array<string> = ["Alice", "Bob"];
  ```

### オブジェクト型

- インラインのオブジェクト型
  ```typescript
  const user: { id: number; name: string } = {
    id: 1,
    name: "TypeScript User",
  };
  ```

### 型エイリアス（type）

- 型に名前をつける

  ```typescript
  type User = {
    id: number;
    name: string;
    email?: string; // オプショナルプロパティ（省略可能）
  };

  const newUser: User = { id: 1, name: "React Dev" };
  ```

### インターフェース（interface）

- オブジェクトの構造を定義する

  ```typescript
  interface Product {
    id: number;
    name: string;
    price: number;
  }

  const product: Product = { id: 1, name: "Keyboard", price: 99.99 };
  ```

### 共用体型（Union Types）

- 複数の型の可能性を表現
  ```typescript
  type ID = string | number;
  const userId: ID = 123; // numberでもOK
  const productId: ID = "p-123"; // stringでもOK
  ```

### リテラル型

- 特定の値だけを許容する型
  ```typescript
  type Direction = "north" | "east" | "south" | "west";
  const heading: Direction = "north"; // これら4つの値だけが許容される
  ```

### any 型と unknown 型

- `any`: どんな型でも許容（型チェックを無効化）
  ```typescript
  let anyValue: any = "string";
  anyValue = 100; // OK
  ```
- `unknown`: どんな型でも許容するが、使用時に型チェックが必要
  ```typescript
  let value: unknown = "Hello";
  // value.toLowerCase(); // エラー：型を確認せずに使用できない
  if (typeof value === "string") {
    value.toLowerCase(); // OK：型チェック後は使用可能
  }
  ```

## 47. 引数の型指定 (6 分)

### 関数の引数型指定

- 基本的な引数の型指定
  ```typescript
  function greet(name: string) {
    console.log(`Hello, ${name}`);
  }
  ```

### オプショナルパラメータ

- `?` を使用して省略可能な引数を定義
  ```typescript
  function greetWithAge(name: string, age?: number) {
    if (age !== undefined) {
      console.log(`Hello, ${name}. You are ${age} years old.`);
    } else {
      console.log(`Hello, ${name}`);
    }
  }
  ```

### デフォルトパラメータ

- デフォルト値を設定した引数
  ```typescript
  function createUser(name: string, role: string = "user") {
    return { name, role };
  }
  ```

### React コンポーネントの props 型指定

- React コンポーネントの props 型定義

  ```typescript
  interface ButtonProps {
    text: string;
    onClick: () => void;
    color?: "primary" | "secondary";
  }

  function Button({ text, onClick, color = "primary" }: ButtonProps) {
    return (
      <button onClick={onClick} className={`btn-${color}`}>
        {text}
      </button>
    );
  }
  ```

### イベントハンドラの型指定

- React のイベントオブジェクト型

  ```typescript
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("Button clicked");
  }
  ```

## 48. 返却値の型指定 (3 分)

### 関数の戻り値型指定

- 基本的な戻り値の型指定
  ```typescript
  function add(a: number, b: number): number {
    return a + b;
  }
  ```

### 複数の返却値型（Union Types）

- 複数の型を返す可能性がある関数
  ```typescript
  function getIdOrNull(user: User): number | null {
    return user.id ? user.id : null;
  }
  ```

### void 型

- 値を返さない関数の型
  ```typescript
  function logMessage(message: string): void {
    console.log(message);
    // returnなし
  }
  ```

### React コンポーネントの返却値型

- React コンポーネントの戻り値型

  ```typescript
  function Header(props: HeaderProps): JSX.Element {
    return <header>{/* ... */}</header>;
  }

  // または
  const Card = (props: CardProps): React.ReactNode => {
    return <div className="card">{/* ... */}</div>;
  };
  ```

## 49. 変数の型指定 (3 分)

### 変数宣言での型指定

- 明示的な型指定
  ```typescript
  const name: string = "TypeScript";
  let count: number = 0;
  ```

### 型推論

- 初期値から自動的に型が決まる
  ```typescript
  const inferred = "TypeScript"; // string型と推論される
  const numbers = [1, 2, 3]; // number[]型と推論される
  ```

### React Hooks での型指定

- useState

  ```typescript
  // 型引数を指定する方法
  const [count, setCount] = useState<number>(0);

  // 複雑な型
  interface User {
    id: number;
    name: string;
  }
  const [user, setUser] = useState<User | null>(null);
  ```

- useRef

  ```typescript
  // DOM要素への参照
  const inputRef = useRef<HTMLInputElement>(null);

  // 値の参照
  const countRef = useRef<number>(0);
  ```

### ジェネリック型

- 型を引数として受け取る

  ```typescript
  function getFirstItem<T>(array: T[]): T | undefined {
    return array[0];
  }

  const firstNumber = getFirstItem<number>([1, 2, 3]); // number型
  const firstString = getFirstItem(["a", "b", "c"]); // 型推論でstring型
  ```

## 50. 設定ファイル(tsconfig)をいじってみる (4 分)

### 主要な tsconfig 設定

- `strict`: 厳格な型チェックを有効/無効
- `target`: 出力する JavaScript のバージョン（ES5, ES6, など）
- `lib`: 使用するライブラリ（DOM, ES6, など）
- `jsx`: JSX の扱い方（`react`, `react-jsx`, `preserve`）
- `module`: モジュールシステム（CommonJS, ESNext, など）
- `esModuleInterop`: CommonJS モジュールと ES モジュールの互換性
- `allowJs`: JavaScript ファイルのコンパイルを許可
- `outDir`: コンパイル結果の出力先ディレクトリ

### React 用の推奨設定

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

### 実用的な設定オプション

- `strictNullChecks`: null/undefined の厳格なチェック
- `noImplicitAny`: 暗黙的な any 型を許可しない
- `noImplicitThis`: this の型が不明な場合にエラー
- `paths`: モジュールのインポートパスのエイリアス設定


# React × TypeScript 実践編

このセクションでは、ReactとTypeScriptを組み合わせた実践的な開発テクニックを学びます。型安全なReactアプリケーション開発のための知識とスキルを身につけましょう。

## 学習内容

### 51. React × TypeScriptの準備
- ReactプロジェクトでTypeScriptを利用するための環境設定
- Create React AppでTypeScriptテンプレートを使う方法

```bash
# TypeScript対応のReactプロジェクトを作成
npx create-react-app my-app --template typescript

# 既存のプロジェクトにTypeScriptを追加
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

```json
// tsconfig.jsonの基本設定
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

### 52. 型がないせいでバグっているアプリの例
- TypeScriptを使わないと発生しがちなバグの実例

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

### 53. 取得データの型を定義してバグを防ぐ
- APIレスポンスの型定義方法

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
  theme: 'light' | 'dark'; // リテラル型の使用例
  notifications: boolean;
}

// API呼び出しとデータの使用
async function fetchUser(userId: number): Promise<User> {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  
  // JSONの日付文字列をDateオブジェクトに変換
  return {
    ...data,
    registeredAt: new Date(data.registeredAt)
  };
}

// 型安全に使用できる
const user = await fetchUser(1);
console.log(user.name); // OK
console.log(user.age);  // エラー: 'age'プロパティはUserに存在しない
```

### 54. propsに型を定義しよう
- Reactコンポーネントのpropsに型を付ける方法

```tsx
// 関数コンポーネントでのprops型定義
interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  children?: React.ReactNode;
}

// デフォルト値の設定
const defaultProps = {
  color: 'primary' as const,
  disabled: false
};

function Button(props: ButtonProps) {
  const { text, onClick, color, disabled, children } = { ...defaultProps, ...props };
  
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

// 使用例
<Button 
  text="Submit" 
  onClick={() => console.log('Clicked!')} 
  color="danger"
/>
```

### 55. 型定義を効率的に管理しよう
- 型定義ファイルの分割と整理

```tsx
// src/types/index.ts - 型定義をまとめたファイル
export * from './user';
export * from './product';
export * from './order';

// src/types/user.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

// src/types/product.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

// コンポーネントでの利用
import { User, Product } from '../types';

function UserProfile({ user }: { user: User }) {
  return <div>{user.name}</div>;
}
```

### 56. コンポーネント自身の型定義
- Reactコンポーネントそのものの型付け

```tsx
import React from 'react';

// FC型を使用したコンポーネント定義
interface GreetingProps {
  name: string;
  age?: number;
}

// React.FC型を使った定義方法
const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age !== undefined && <p>You are {age} years old.</p>}
    </div>
  );
};

// 明示的な戻り値型を使った定義方法
function Counter({ initialCount = 0 }: { initialCount?: number }): JSX.Element {
  const [count, setCount] = React.useState(initialCount);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// メモ化コンポーネントの型付け
const MemoizedGreeting = React.memo<GreetingProps>(
  ({ name, age }) => (
    <div>
      <h1>Hello, {name}!</h1>
      {age !== undefined && <p>You are {age} years old.</p>}
    </div>
  )
);
```

### 57. オプショナルチェイニングでnull安全なコードを書く
- TypeScriptのオプショナルチェイニング演算子（?.）の活用

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
  // オプショナルチェイニングを使用したnull安全なコード
  return (
    <div>
      <h1>{user?.name ?? 'Unknown User'}</h1>
      <p>Email: {user?.email}</p>
      
      {/* ネストされたプロパティへの安全なアクセス */}
      {user?.address && (
        <div>
          <p>Address: {user.address.street}, {user.address.city} {user.address.postalCode}</p>
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

### 58. 補足（ライブラリの型定義について）
- サードパーティライブラリの型定義の探し方

```bash
# ライブラリの型定義をインストール
npm install --save-dev @types/react-router-dom
```

```typescript
// 型定義がないライブラリに対する独自の型定義ファイル (my-lib.d.ts)
declare module 'untyped-module' {
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

## 学習のポイント

- TypeScriptによる型安全なReactアプリケーション開発の基礎を理解する
- コンパイル時のエラーチェックによるバグの早期発見
- IDEのコード補完機能を最大限に活用した開発効率の向上
- コードの可読性と保守性の向上
- チーム開発におけるコミュニケーションコストの削減

## 初心者向けアドバイス

- JavaScriptの基本を理解してからTypeScriptに取り組むことをお勧めします
- 最初は厳格な型定義にこだわらず、`any`型を使いながら徐々に型付けを学んでいきましょう
- エラーメッセージをしっかり読むことで、TypeScriptの理解が深まります
- 公式ドキュメントやコミュニティの例を参考にすることで、ベストプラクティスを学べます
- 小さなプロジェクトから始めて、徐々に複雑な型定義に挑戦していきましょう

## 実践的なコード例：Todoリスト

以下にTypeScriptとReactを使用した簡単なTodoリストアプリケーションの実装例を示します。

```tsx
// src/types/todo.ts
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoAction = 
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'REMOVE_TODO'; id: number };

// src/components/TodoList.tsx
import React, { useReducer } from 'react';
import { Todo, TodoAction } from '../types/todo';

const initialTodos: Todo[] = [];

function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const TodoList: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [text, setText] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', text });
      setText('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
            />
            <span>{todo.text}</span>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```

## 参考リソース

- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)