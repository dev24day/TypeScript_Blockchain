// const name = "Nicolas",
//   age = 24,
//   gender = "male";

// const sayHi = (name, age, gender) => {
//   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// };
const sayHi = (name: string, age: number, gender: string): string => {
  //gender 인자는 optional
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("devist", 23, "male"));

export {};
