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
  return `Hello ${h.name}, you are ${h.age}, you are a ${h.gender}`;
};

console.log(sayHi(him));

export {};
