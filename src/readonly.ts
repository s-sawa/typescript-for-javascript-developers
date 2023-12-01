export {};

// クラスプロパティを読み取り専用にする場合に利用

class VisaCard {
  //   readonly owner: string;

  // typescriptはコンストラクタで初期化できる特徴
  constructor(public readonly owner: string) {
    // this.owner = owner;
  }
}

let myVisaCard = new VisaCard("sho");

console.log(myVisaCard.owner);
// myVisaCard.owner = "ssss";
