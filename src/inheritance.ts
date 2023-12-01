export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "i can run";
  }
}

// 継承 extends

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name); // 親クラスのname
    this.speed = speed; // speedは自分で初期化しないといけない
  }

  run(): string {
    // superをつかって親クラスの同名のメソッドを呼ぶ
    // const parentMessage = super.run(); // 親クラスのメソッドが呼ばれる
    // console.log({ parentMessage });
    return `${super.run()} ${this.speed}km`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal("Mickey").run());
console.log(new Lion("Simba", 100).run());
