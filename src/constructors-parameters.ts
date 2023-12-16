export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person("taro", 30);

console.log(taro);

type PersonType = typeof Person;

// タプル型, コンストラクターの引数の構造がProfileの型として取得できた
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ["Shogo", 30];

// インスタンス作成
const shogo = new Person(...profile);
console.log(shogo);
