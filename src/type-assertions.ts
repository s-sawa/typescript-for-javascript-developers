export {};

let name: any = "Ham";

// 型アノテーションによる制約
// 型アノテーションは変数や関数の引数に最初から型を指定する
// let length: number = name.length;

// 型アサーション
// 型アサーションはすでに存在する値に後から型を強制する

let length: number = (name as string).length; // 書き方1
// let length = (<string>name).length; ; // 書き方2、こちらはJSX記法と似ているため推奨されていない

// length = "foo";
