export {};

class Person {
  //   public name: string;
  //   protected age: number;
  // コンストラクタでアクセス修飾子を設定できる
  // tsではコンストラクタの引数にアクセス修飾子をつけると自動で初期化を行なってくれる
  constructor(public name: string, protected age: number) {} // public this.name = name のように書かなくてもよくなる
}

const me = new Person("ハムさん", 43);
console.log(me);
