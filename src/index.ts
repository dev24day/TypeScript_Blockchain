// const name = "Nicolas",
//   age = 24,
//   gender = "male";

// const sayHi = (name, age, gender) => {
//   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// };
interface Human {
  name: string;
  age: number;
  gender: string;
}
const person = {
  name: "KKK",
  age: 23,
  gender: "male"
};
const sayHi = (h: Human): string => {
  //gender 인자는 optional
  return `Hello ${h.name}, you are ${h.age}, you are a ${h.gender}`;
};

console.log(sayHi(person));

export {};
