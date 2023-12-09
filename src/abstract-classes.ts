export {};

// abstractをクラスにつけることで抽象クラスとなる
abstract class Animal {
  // 抽象メソッドにする
  // オーバーライド
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

// 抽象クラスで継承したTigerで抽象メソッドを実装しないとエラーになる -> 実装し忘れることを防げる！
// class Tiger extends Animal {}
class Tiger extends Animal {
  cry() {
    return "grrrr";
  }
}
