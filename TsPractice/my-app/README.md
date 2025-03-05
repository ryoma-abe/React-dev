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
