export {};

// 静的メンバー

class Me {
  static isProgrammer: boolean = true; // 初期値
  static firstName: string = "shogo";
  static lastName: string = "s";

  static work() {
    // staticにすることでインスタンスを作らなくてもメソッドを呼び出せる
    // return `Hey, Guys!This is ${Me.firstName}`; // このままだとMeに依存する -> thisで書くことができる
    return `Hey, Guys!This is ${this.firstName}`;
  }
}

let me = new Me();
// console.log(me.isProgrammer); // staticに変更したため、アクセスできない
// new で毎回インスタンスを作らなくても済む
console.log(Me.isProgrammer); // static メンバ変数は、クラス名を書いてアクセスすることが可能
console.log(Me.work());
