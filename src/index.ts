// const name = "Nicolas",
//   age = 24,
//   gender = "male";

// const sayHi = (name, age, gender) => {
//   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// };

//interface 는 js로 컴파일되지 않음
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const him = new Human("Bravo", 23, "male");

const sayHi = (h: Human): string => {
  //gender 인자는 optional
  return `Hello ${h.name}, you are ${h.age}, you are a ${h.gender}`;
};

console.log(sayHi(him));

export {};
