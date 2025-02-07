const nameArr = ["田中", "山田", "じゃけえ"];
const newArr = nameArr
  .filter((name) => name !== "じゃけえ")
  .map((name) => name + "さん");

console.log(newArr);
