# React 基礎文法まとめ

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

これらの機能を使用することで、よりクリーンで保守性の高いコードを書くことができます。
