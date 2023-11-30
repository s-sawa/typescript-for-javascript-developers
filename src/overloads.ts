export {};
// オーバーロードとは同じ舐めの関数やメソッドを複数定義し、異なる型の引数や異なる数の引数を持つ服数のバリエーションを提供する機能のこと

// 下の2つの関数のためのそれぞれのシグネチャーを用意しないといけない
// 関数がどのような引数を取ってどのような型の値を返すかを定義するもの
function double(value: number): number;
function double(value: string): string;

// 数字またはを受け取って2倍にする
// オーバーロードでは関数の実態で型制約を行わない
// 全ての型を受け取れるようにanyにしておく
// function double(value: any): any {
//   console.log(typeof value);
//   if (typeof value === "number") {
//     return value * 2;
//   } else if (typeof value === "string") {
//     return value + value;
//   } else {
//     throw "numberでもstringでも無いので、引数の型を確認してください。";
//   }
// }

// 上記のコードをスッキリさせると...
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double("go!!!"));
// シグネチャーで型制約しているため、実行される前にコンパイルエラーとなり、else節は実行されない
// そのため、上記のelse節は不要。
// console.log(double(true));
