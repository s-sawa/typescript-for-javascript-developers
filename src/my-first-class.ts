export {};

// インスタンスを作るための設計図
class Person {
  name: string;
  age: number;

  // constructorはreturnしないので型は書かなくていい
  constructor(name: string, age: number) {
    // Personのインスタンスのプロパティに設定する
    this.name = name;
    this.age = age;
  }
  // インスタンスメソッド
  profile(): string {
    return `name:${this.name}, age:${this.age}`;
  }
}

let taro = new Person("taro", 30);

console.log(taro.profile()); // name:taro, age:30
