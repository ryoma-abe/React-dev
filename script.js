const sayHello = (name = "じゃけえ") => console.log(`私の名前は${name}です。`);
sayHello();

const myProfile = {
  name: "安部",
};

const { name, age = 21 } = myProfile;
console.log(name);
console.log(age);
