export {};

// アクセサー

// * owner
//  * 所有者
//  * 初期化時に設定できる
//  * 途中で変更できない
//  * 参照できる -> getter
// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる
//  * 途中で変更できる -> setter
//  * 参照できない

class MyNumberCard {
  // owner をリネームする
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // get はメンバー変数ownerを参照するためのメソッド
  // このままだとメンバー変数と名前が被るためエラーになる
  get owner() {
    return this._owner;
  }

  // setは変更するためのメソッド
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber:${this._secretNumber}`;
  }
}

let card = new MyNumberCard("ham", 1234567890);
console.log(card.owner);
// card.owner = "ハム"; // 読み取り専用プロパティのため、変更できない -> 変更できない要件は達成できている

console.log(card.debugPrint());
card.secretNumber = 9999999999;
console.log(card.debugPrint()); // secretNumberの変更ができた！

console.log(card.secretNumber); // getメソッドを定義していないためundefinedとなる
