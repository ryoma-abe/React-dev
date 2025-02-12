論理演算子 `&&` と `||` の使い方を追加したバージョンを作成します。

# モダン JS 基礎文法まとめ

## 1. オブジェクトの分割代入とデフォルト値

オブジェクトから特定のプロパティを取り出す際に、デフォルト値を設定できます。

```javascript
const myProfile = {
  name: "安部",
};
const { name, age = 21 } = myProfile;
console.log(name); // "安部"
console.log(age); // 21 (デフォルト値が適用)
```

## 2. オブジェクトの省略記法

変数名とプロパティ名が同じ場合、省略して記述できます。

```javascript
const name = "abe";
const age = 21;
const myProfile = { name, age };
console.log(myProfile); // { name: "abe", age: 21 }
```

## 3. スプレッド構文

### 配列の操作

```javascript
// 基本的な配列の定義
const arr4 = [10, 20];
const arr5 = [30, 40];
// 配列のコピー
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6); // [100, 20]
console.log(arr4); // [10, 20] - 元の配列は変更されない
// 配列の結合
const arr7 = [...arr4, ...arr5]; // [10, 20, 30, 40]
```

### スプレッド構文の主な用途

1. **配列のコピー**
   - 浅いコピーを作成
   - 元の配列に影響を与えない
2. **配列の結合**
   - 複数の配列を 1 つにまとめる
   - 順序を自由に設定可能
3. **関数での使用**
   ```javascript
   const sumFunc = (num1, num2) => console.log(num1 + num2);
   const numbers = [1, 2];
   sumFunc(...numbers); // 配列を引数として展開
   ```

## 4. 論理演算子（&& と ||）

### AND 演算子 (&&)

左側の値が `true` の場合、右側の値を返します。左側が `false` の場合は、その時点で `false` を返します。

```javascript
// 基本的な使用法
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false

// 条件付き実行
const age = 20;
age >= 20 && console.log("成人です"); // 条件が true の場合のみ実行

// オブジェクトのプロパティ安全参照
const user = { name: "太郎" };
const nickname = user && user.nickname; // undefined
```

### OR 演算子 (||)

左側の値が `false` の場合、右側の値を返します。左側が `true` の場合は、その時点で左側の値を返します。

```javascript
// 基本的な使用法
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// デフォルト値の設定
const userInput = "";
const displayName = userInput || "ゲスト"; // "ゲスト"

// 複数の条件の組み合わせ
const hasPermission = true;
const isAdmin = false;
const canAccess = hasPermission || isAdmin; // true
```

これらの機能を使用することで、よりクリーンで保守性の高いコードを書くことができます。
