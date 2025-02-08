// 論理演算子の本当の意味
// || は左側がtruthyの時その時点で返却する
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// && は左側がfalsyの時その時点で返却する
const num2 = 100;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
