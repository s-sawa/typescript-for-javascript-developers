export {};
// JavaScriptは通常変数を宣言するときはグローバルで宣言している。
// exportでファイルをモジュールにすることで、このファイル内だけの宣言となる
// exportする内容はなんでもよい。今回は空のオブジェクト

let name = "shogo;";

let isFinished: boolean = true;
isFinished = false;
console.log({ isFinished });
