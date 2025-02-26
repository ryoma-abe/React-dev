# Atomic Design コンポーネント設計手法

## 1. Atoms（原子）

UI の最小単位となる基本的な構成要素です。

```javascript
// Button Atom の例
const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Input Atom の例
const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border rounded px-3 py-2"
    />
  );
};
```

## 2. Molecules（分子）

複数の Atoms を組み合わせた、単一の機能を持つコンポーネントです。

```javascript
// SearchForm Molecule の例
const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="検索..."
      />
      <Button type="submit">検索</Button>
    </form>
  );
};
```

## 3. Organisms（有機体）

Molecules と Atoms を組み合わせた、より複雑なコンポーネントです。

```javascript
// Header Organism の例
const Header = ({ user }) => {
  return (
    <header className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="flex gap-4">
          <NavLink href="/">ホーム</NavLink>
          <NavLink href="/products">商品</NavLink>
          <NavLink href="/about">会社概要</NavLink>
        </nav>
        {user ? (
          <UserMenu user={user} />
        ) : (
          <SearchForm onSearch={handleSearch} />
        )}
      </div>
    </header>
  );
};
```

## 4. Templates（テンプレート）

ページのレイアウト構造を定義します。実際のコンテンツではなく、配置を示します。

```javascript
// ProductPage Template の例
const ProductPageTemplate = ({ header, sidebar, mainContent, footer }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-none">{header}</div>
      <div className="flex-grow flex">
        <aside className="w-64 bg-gray-50">{sidebar}</aside>
        <main className="flex-grow p-6">{mainContent}</main>
      </div>
      <div className="flex-none">{footer}</div>
    </div>
  );
};
```

## 5. Pages（ページ）

テンプレートに具体的なコンポーネントとデータを配置した最終的な UI です。

```javascript
// ProductListPage の例
const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // データ取得処理
    fetchProducts().then(setProducts);
    fetchCategories().then(setCategories);
  }, []);

  return (
    <ProductPageTemplate
      header={<Header user={currentUser} />}
      sidebar={<CategoryList categories={categories} />}
      mainContent={<ProductGrid products={products} />}
      footer={<Footer />}
    />
  );
};
```

これらの階層構造を活用することで、再利用可能で保守性の高い UI コンポーネントシステムを構築できます。
