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

// Omitを使用した例 - 元の型から特定のプロパティを除外する
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

## TypeScript 高度な型操作（ユーティリティタイプ）

TypeScriptにはプロパティの追加、除外、選択など、既存の型から新しい型を作成するための便利なユーティリティタイプが用意されています。

```typescript
// 基本となる型
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  created: Date;
}

// Omit: 特定のプロパティを除外する
type UserWithoutId = Omit<User, 'id'>;  // id以外のプロパティを持つ型

// Pick: 特定のプロパティだけを選択する
type UserCredentials = Pick<User, 'email' | 'role'>;  // emailとroleだけを持つ型

// Partial: すべてのプロパティをオプショナルにする
type PartialUser = Partial<User>;  // すべてのプロパティが任意の型

// Required: すべてのプロパティを必須にする
type RequiredUser = Required<User>;  // すべてのプロパティが必須の型

// Readonly: すべてのプロパティを読み取り専用にする
type ReadonlyUser = Readonly<User>;  // すべてのプロパティが読み取り専用の型

// Record: 指定されたプロパティのマップ型を作成する
type UserRoleMap = Record<'admin' | 'user' | 'guest', User[]>;  // 各ロールに対応するユーザー配列のマップ

// Exclude: ユニオン型から特定の型を除外する
type AdminOrUser = Exclude<User['role'], 'guest'>;  // 'admin' | 'user' という型

// Extract: ユニオン型から特定の型を抽出する
type GuestOnly = Extract<User['role'], 'guest'>;  // 'guest' という型

// NonNullable: null と undefined を除外する
type NonNullableUser = NonNullable<User | null | undefined>;  // null と undefined を除いた User 型
```

### 実践的な活用例

```tsx
// ユーザーの詳細表示用コンポーネント
const UserProfile: React.FC<User> = (props) => {
  // すべてのプロパティを必要とする
  return <div>...</div>;
};

// ユーザー作成フォーム用のコンポーネント
const UserCreateForm: React.FC<Omit<User, 'id' | 'created'>> = (props) => {
  // id と created は自動生成するのでフォームからは除外
  return <form>...</form>;
};

// ユーザー編集フォーム用のコンポーネント
const UserEditForm: React.FC<Partial<User> & { id: number }> = (props) => {
  // id は必須だが、他のフィールドは任意で更新可能
  return <form>...</form>;
};

// 読み取り専用ビュー用のコンポーネント
const UserReadOnlyView: React.FC<Readonly<User>> = (props) => {
  // すべてのプロパティが読み取り専用
  return <div>...</div>;
};
```

## 学習のポイント

- TypeScriptによる型安全なReactアプリケーション開発の基礎を理解する
- コンパイル時のエラーチェックによるバグの早期発見
- IDEのコード補完機能を最大限に活用した開発効率の向上
- ユーティリティタイプを活用した柔軟な型設計
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