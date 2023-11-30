// // promiseとは...

// // promiseは非同期操作が「完了」したことを表すオブジェクト
// // 「完了」とは、非同期操作が終了し、その結果が準備できた状態のこと

// // thenメソッドとは...

// // then()メソッドは、promiseの非同期操作が完了した後に実行される処理を設定する
// // then()に渡された関数は、promiseの結果を引数として受け取る

// // asyncFunction1は、プロミスを返す非同期関数です。数値5を返します。
// const asyncFunction1 = () => new Promise((resolve) => resolve(5));

// // asyncFunction2は、前の関数から渡された数値(5)を引数'number'で受け取り、numberに10を加える非同期関数です。
// const asyncFunction2 = (number) =>
//   new Promise((resolve) => resolve(number + 10));

// // asyncFunction3は、前の関数から渡された数値(15)に20を加える非同期関数です。
// const asyncFunction3 = (number) =>
//   new Promise((resolve) => resolve(number + 20));

// // 非同期関数のチェーンを開始します。
// asyncFunction1()
//   .then(asyncFunction2) // asyncFunction1の結果をasyncFunction2に渡します。
// //   .then(asyncFunction3) // asyncFunction2の結果をasyncFunction3に渡します。
//   .then(console.log) // asyncFunction3関数の結果がconsole.log関数に渡されて、結果が出力される
//   .catch(console.error); // 何かエラーがあれば、それをコンソールに出力します。

// // asyncFunction1().then(console.log);

// // function handleResult(result) {
// //   console.log("Received value:", result);
// // }
// // asyncFunction1().then(handleResult);

// const asyncFunction1 = (number) =>
//   new Promise((resolve) => {
//     // let result = number * 2;
//     // resolve(result);
//     resolve(number * 2);
//   });

// const asyncFunction2 = (number) =>
//   new Promise((resolve) => resolve(number + 20));

// asyncFunction1(10).then(asyncFunction2).then(console.log);

// 10を受け取る
const asyncFunction1 = (number) =>
  new Promise((resolve) => {
    let result = number * 2;
    resolve(result); // 上のようにresultを用いずに、resolve(number * 2); と書いてもOK！自分が理解しやすくするためにresultを用意して書いてみた！
  });

// 20を受け取る
const asyncFunction2 = (number) =>
  new Promise((resolve) => resolve(number + 20));

// 関数実行
asyncFunction1(10).then(asyncFunction2).then(console.log);